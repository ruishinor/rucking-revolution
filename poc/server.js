const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
// Load selfsigned only when HTTPS provisioning is requested
const base64url = require('base64url');
const {
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse
} = require('@simplewebauthn/server');

const app = express();
app.use(bodyParser.json());
// optional helmet: use if available, otherwise continue without it
try {
  const _helmet = require('helmet');
  app.use(_helmet());
} catch (e) {
  console.warn('Optional dependency "helmet" is not installed; continuing without security headers from helmet.');
}
const PORT = process.env.PORT || 3001;
// Default to HTTP for local dev unless USE_HTTPS explicitly set to 'true'
const USE_HTTPS = process.env.USE_HTTPS === 'true';

// Private paths & secrets
const PRIVATE_DIR = path.join(__dirname, 'private');
if (!fs.existsSync(PRIVATE_DIR)) fs.mkdirSync(PRIVATE_DIR, { recursive: true });
const MASTER_KEY_PATH = path.join(PRIVATE_DIR, 'master.key');
const CARDS_ENC_PATH = path.join(PRIVATE_DIR, 'cards.enc');
const CARDS_JSON_PATH = path.join(PRIVATE_DIR, 'cards.json');
const STATE_PATH = path.join(PRIVATE_DIR, 'state.json');
const ADMIN_TOKEN_PATH = path.join(PRIVATE_DIR, 'admin.token');

const LOGFILE = path.join(__dirname, 'logs.txt');
function logEvent(line) {
  const ts = new Date().toISOString();
  const out = `[${ts}] ${line}\n`;
  fs.appendFileSync(LOGFILE, out);
  console.log(out.trim());
}

// Load or generate master key
let MASTER_KEY;
if (fs.existsSync(MASTER_KEY_PATH)) {
  MASTER_KEY = Buffer.from(fs.readFileSync(MASTER_KEY_PATH, 'utf8'), 'base64');
} else {
  MASTER_KEY = crypto.randomBytes(32);
  fs.writeFileSync(MASTER_KEY_PATH, MASTER_KEY.toString('base64'), { mode: 0o600 });
  logEvent('Generated master key');
}

// Admin token for admin actions (revoke, listing)
let ADMIN_TOKEN;
if (fs.existsSync(ADMIN_TOKEN_PATH)) {
  ADMIN_TOKEN = fs.readFileSync(ADMIN_TOKEN_PATH, 'utf8').trim();
} else {
  ADMIN_TOKEN = base64url(crypto.randomBytes(24));
  fs.writeFileSync(ADMIN_TOKEN_PATH, ADMIN_TOKEN, { mode: 0o600 });
  logEvent('Generated admin token');
}

// Helper: encrypt/decrypt with master key (AES-GCM)
function encryptWithMaster(plainBuffer) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', MASTER_KEY, iv);
  const ct = Buffer.concat([cipher.update(plainBuffer), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, ct, tag]).toString('base64');
}

function decryptWithMaster(b64) {
  const combined = Buffer.from(b64, 'base64');
  const iv = combined.slice(0, 12);
  const tag = combined.slice(combined.length - 16);
  const ct = combined.slice(12, combined.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', MASTER_KEY, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ct), decipher.final()]);
  return plain;
}

// Load encrypted cards (cards.enc) or prepare it from cards.json if present
let cardsData = [];
if (fs.existsSync(CARDS_ENC_PATH)) {
  try {
    const enc = fs.readFileSync(CARDS_ENC_PATH, 'utf8');
    const plain = decryptWithMaster(enc);
    cardsData = JSON.parse(plain.toString('utf8'));
    logEvent('Loaded encrypted card set');
  } catch (err) {
    logEvent('Failed to decrypt cards.enc: ' + err);
  }
} else if (fs.existsSync(CARDS_JSON_PATH)) {
  try {
    const plain = fs.readFileSync(CARDS_JSON_PATH, 'utf8');
    cardsData = JSON.parse(plain);
    const encB64 = encryptWithMaster(Buffer.from(JSON.stringify(cardsData), 'utf8'));
    fs.writeFileSync(CARDS_ENC_PATH, encB64, { mode: 0o600 });
    // Remove the plaintext source file after creating the encrypted copy
    try {
      if (fs.existsSync(CARDS_JSON_PATH)) {
        fs.unlinkSync(CARDS_JSON_PATH);
        logEvent('Removed plaintext cards.json from private/');
      }
    } catch (rmErr) {
      logEvent('Failed to remove plaintext cards.json: ' + rmErr);
    }
    logEvent('Encrypted cards.json to cards.enc');
  } catch (err) {
    logEvent('Failed to prepare cards enc: ' + err);
  }
} else {
  logEvent('No cards data found under private/; provisioning default encrypted card set');
  try {
    // Provision a default card set encrypted with the current MASTER_KEY
    const defaultCards = [
      { id: 1, title: 'Silent Move', text: 'Move quietly, keep conversations to hand signals.' },
      { id: 2, title: 'Buddy Check', text: 'Regularly check buddy gear and breathing.' },
      { id: 3, title: 'Route Selection', text: 'Choose paths that minimize exposure and maximize cover.' },
      { id: 4, title: 'Signal', text: 'Use compact signals to convey intent without noise.' },
      { id: 5, title: 'Watch Rotation', text: 'Rotate watch duties to maintain alertness.' }
    ];
    const encB64 = encryptWithMaster(Buffer.from(JSON.stringify(defaultCards), 'utf8'));
    fs.writeFileSync(CARDS_ENC_PATH, encB64, { mode: 0o600 });
    cardsData = defaultCards;
    logEvent('Provisioned default encrypted card set to cards.enc');
  } catch (e) {
    logEvent('Failed to provision default cards.enc: ' + e);
  }
}

// In-memory runtime structures -- persisted to state.json
let users = {};
let purchases = {}; // purchaseId -> { cek: Buffer, userId, revoked, lastValidated }
let activationTokens = {}; // token -> purchaseId
const pendingReval = {}; // ephemeral only

function loadState() {
  if (!fs.existsSync(STATE_PATH)) return;
  try {
    const s = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    users = s.users || {};
    activationTokens = s.activationTokens || {};
    purchases = {};
    if (s.purchases) {
      for (const pid of Object.keys(s.purchases)) {
        const p = s.purchases[pid];
        try {
          const cekBuf = decryptWithMaster(p.cek);
          purchases[pid] = { cek: cekBuf, userId: p.userId, revoked: p.revoked, lastValidated: p.lastValidated };
        } catch (e) {
          logEvent('Failed to decrypt CEK for purchase ' + pid + ': ' + e);
        }
      }
    }
    logEvent('Loaded state from disk');
  } catch (err) {
    logEvent('Failed to load state.json: ' + err);
  }
}

function saveState() {
  const out = { users: {}, purchases: {}, activationTokens };
  for (const k of Object.keys(users)) {
    out.users[k] = { id: users[k].id, name: users[k].name, devices: (users[k].devices || []).map(d => ({ credentialID: d.credentialID, credentialPublicKey: d.credentialPublicKey, counter: d.counter || 0 })) };
  }
  for (const pid of Object.keys(purchases)) {
    const p = purchases[pid];
    try {
      out.purchases[pid] = { cek: encryptWithMaster(p.cek), userId: p.userId, revoked: p.revoked, lastValidated: p.lastValidated };
    } catch (e) {
      logEvent('Failed to encrypt CEK for saving ' + pid + ': ' + e);
    }
  }
  fs.writeFileSync(STATE_PATH, JSON.stringify(out, null, 2), { mode: 0o600 });
}

// Initialize default demo user if none exists
if (!fs.existsSync(STATE_PATH)) {
  users['demo-user'] = { id: 'demo-user', name: 'Demo Buyer', devices: [] };
  saveState();
}
loadState();

// Simple rate limiter (per-IP, naive)
const rateMap = {};
function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  if (!rateMap[ip]) rateMap[ip] = [];
  // keep last 1 hour
  rateMap[ip] = rateMap[ip].filter(t => now - t < 60 * 60 * 1000);
  if (rateMap[ip].length > 120) {
    return res.status(429).json({ error: 'rate limit exceeded' });
  }
  rateMap[ip].push(now);
  next();
}
app.use(rateLimit);

// Configuration for WebAuthn (use secure origin when possible)
const RP_NAME = 'RuckingRevolution';
const RP_ID = 'localhost';
const ORIGIN = `${USE_HTTPS ? 'https' : 'http'}://localhost:${PORT}`;

// Activation endpoint: returns encrypted cards and a wrapped CEK (ECDH)
// Create a purchase token (simulate checkout). In production this comes from payment flow.
app.post('/createPurchase', (req, res) => {
  const userId = (req.body && req.body.userId) || 'demo-user';
  const purchaseId = crypto.randomBytes(8).toString('hex');
  const token = base64url(crypto.randomBytes(12));
  const cek = crypto.randomBytes(32);
  purchases[purchaseId] = { cek, userId, revoked: false, lastValidated: Date.now() };
  activationTokens[token] = purchaseId;
  saveState();
  logEvent(`PURCHASE_CREATE purchase=${purchaseId} user=${userId}`);
  res.json({ purchaseId, activationToken: token });
});

// Activation endpoint: requires an activationToken (from checkout) and clientPubKey
app.post('/activate', (req, res) => {
  const clientPubBase64 = req.body && req.body.clientPubKey;
  const activationToken = req.body && req.body.activationToken;
  if (!clientPubBase64) return res.status(400).json({ error: 'missing clientPubKey' });
  if (!activationToken) return res.status(400).json({ error: 'missing activationToken' });
  const clientPub = Buffer.from(clientPubBase64, 'base64');
  const purchaseId = activationTokens[activationToken];
  if (!purchaseId) return res.status(403).json({ error: 'invalid activation token' });
  const purchase = purchases[purchaseId];
  if (!purchase) return res.status(404).json({ error: 'purchase not found' });
  if (purchase.revoked) return res.status(403).json({ error: 'purchase revoked' });

  const cek = purchase.cek;

  // Server ephemeral ECDH keypair (P-256 / prime256v1)
  const ecdh = crypto.createECDH('prime256v1');
  ecdh.generateKeys();
  const serverPub = ecdh.getPublicKey(); // uncompressed format
  const sharedSecret = ecdh.computeSecret(clientPub);
  const derivedKey = crypto.createHash('sha256').update(sharedSecret).digest(); // 32 bytes

  // Wrap CEK with derivedKey (AES-GCM)
  const wrapIv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', derivedKey, wrapIv);
  const wrapped = Buffer.concat([cipher.update(cek), cipher.final()]);
  const wrapTag = cipher.getAuthTag();
  const wrappedCombined = Buffer.concat([wrapped, wrapTag]);

  // Encrypt cards with CEK (cardsData loaded from private/cards.enc)
  const encryptedCards = cardsData.map((c) => {
    const enc = encryptWithCEK(JSON.stringify({ title: c.title, text: c.text }), cek);
    return { id: c.id, iv: enc.iv, data: enc.data };
  });

  logEvent(`ACTIVATE purchase=${purchaseId} user=${purchase.userId}`);

  res.json({
    serverPubKey: serverPub.toString('base64'),
    wrappedCEK: wrappedCombined.toString('base64'),
    wrappedIV: wrapIv.toString('base64'),
    cards: encryptedCards,
    purchaseId,
    lastValidated: purchases[purchaseId].lastValidated,
    buyer: users[purchase.userId] ? users[purchase.userId].name : purchase.userId
  });
});

// WebAuthn register request
app.post('/webauthn/registerRequest', (req, res) => {
  const username = req.body && req.body.username ? req.body.username : 'demo-user';
  const user = users[username] || (users[username] = { id: username, name: username, devices: [] });
  const opts = generateRegistrationOptions({
    rpName: RP_NAME,
    rpID: RP_ID,
    userID: user.id,
    userName: user.name,
    attestationType: 'none',
    authenticatorSelection: { userVerification: 'preferred' },
    supportedAlgorithmIDs: [-7]
  });
  user.currentChallenge = opts.challenge;
  logEvent(`WEBAUTHN_REGISTER_REQUEST user=${username}`);
  res.json(opts);
});

// WebAuthn register response
app.post('/webauthn/registerResponse', async (req, res) => {
  const username = req.body && req.body.username ? req.body.username : 'demo-user';
  const user = users[username];
  if (!user) return res.status(400).json({ error: 'unknown user' });
  const attestationResponse = req.body && req.body.attestationResponse;
  try {
    const verification = await verifyRegistrationResponse({
      credential: attestationResponse,
      expectedChallenge: user.currentChallenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID
    });

      if (verification.verified) {
        const { registrationInfo } = verification;
        // persist credentialID and publicKey as base64 strings
        const credIdB64 = Buffer.from(registrationInfo.credentialID).toString('base64');
        const pubKeyB64 = Buffer.from(registrationInfo.credentialPublicKey).toString('base64');
        user.devices.push({ credentialID: credIdB64, credentialPublicKey: pubKeyB64, counter: registrationInfo.counter || 0 });
        saveState();
        logEvent(`WEBAUTHN_REGISTER_COMPLETE user=${username} cred=${credIdB64}`);
        return res.json({ ok: true });
      } else {
        return res.status(400).json({ error: 'registration not verified' });
      }
  } catch (err) {
    console.error('register verify error', err);
    return res.status(500).json({ error: 'verify error' });
  }
});

// WebAuthn auth request (start revalidation) - client sends ephemeral ECDH pub
app.post('/webauthn/authRequest', (req, res) => {
  const { purchaseId, clientPubKey } = req.body || {};
  if (!purchaseId || !clientPubKey) return res.status(400).json({ error: 'missing purchaseId or clientPubKey' });
  const p = purchases[purchaseId];
  if (!p) return res.status(404).json({ error: 'purchase not found' });
  if (p.revoked) return res.status(403).json({ error: 'purchase revoked' });

  const username = p.userId;
  const user = users[username];
  if (!user) return res.status(404).json({ error: 'user not found' });

  const allow = user.devices.map(d => ({ id: d.credentialID, type: 'public-key' }));
  const opts = generateAuthenticationOptions({
    allowCredentials: allow,
    userVerification: 'preferred'
  });
  user.currentChallenge = opts.challenge;
  pendingReval[purchaseId] = { clientPub: Buffer.from(clientPubKey, 'base64'), challenge: opts.challenge };
  logEvent(`WEBAUTHN_AUTH_REQUEST purchase=${purchaseId}`);
  res.json(opts);
});

// WebAuthn auth response (complete revalidation) -> wrap CEK and return
app.post('/webauthn/authResponse', async (req, res) => {
  const { purchaseId, assertionResponse } = req.body || {};
  if (!purchaseId || !assertionResponse) return res.status(400).json({ error: 'missing purchaseId or assertionResponse' });
  const p = purchases[purchaseId];
  if (!p) return res.status(404).json({ error: 'purchase not found' });
  if (p.revoked) return res.status(403).json({ error: 'purchase revoked' });

  const username = p.userId;
  const user = users[username];
  if (!user) return res.status(404).json({ error: 'user not found' });

  // find matching device by id (stored as base64 strings)
  const assertionId = assertionResponse.id;
  let device = user.devices.find(d => {
    try {
      return base64url(Buffer.from(d.credentialID, 'base64')) === assertionId;
    } catch (e) {
      return false;
    }
  });
  if (!device) return res.status(404).json({ error: 'credential not registered' });

  try {
    const verification = await verifyAuthenticationResponse({
      credential: assertionResponse,
      expectedChallenge: user.currentChallenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
      authenticator: {
        credentialPublicKey: Buffer.from(device.credentialPublicKey, 'base64'),
        credentialID: Buffer.from(device.credentialID, 'base64'),
        counter: device.counter || 0
      }
    });

    if (!verification.verified) return res.status(403).json({ error: 'assertion verification failed' });

    // update counter if provided
    if (verification.authenticationInfo && typeof verification.authenticationInfo.newCounter === 'number') {
      device.counter = verification.authenticationInfo.newCounter;
      saveState();
    }

    // proceed to wrap CEK for this device using ephemeral ECDH (server) + client ephemeral pub stored earlier
    const pending = pendingReval[purchaseId];
    if (!pending) return res.status(400).json({ error: 'missing revalidation state' });
    const clientPub = pending.clientPub;

    const ecdh = crypto.createECDH('prime256v1');
    ecdh.generateKeys();
    const serverPub = ecdh.getPublicKey();
    const sharedSecret = ecdh.computeSecret(clientPub);
    const derivedKey = crypto.createHash('sha256').update(sharedSecret).digest();

    const wrapIv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', derivedKey, wrapIv);
    const wrapped = Buffer.concat([cipher.update(p.cek), cipher.final()]);
    const wrapTag = cipher.getAuthTag();
    const wrappedCombined = Buffer.concat([wrapped, wrapTag]);

    p.lastValidated = Date.now();
    saveState();
    logEvent(`WEBAUTHN_AUTH_COMPLETE purchase=${purchaseId}`);

    res.json({ serverPubKey: serverPub.toString('base64'), wrappedCEK: wrappedCombined.toString('base64'), wrappedIV: wrapIv.toString('base64'), lastValidated: p.lastValidated });
  } catch (err) {
    console.error('auth verify error', err);
    return res.status(500).json({ error: 'verify error' });
  }
});

// Revoke purchase
app.post('/revoke', (req, res) => {
  const admin = req.headers['x-admin-token'];
  if (!admin || admin !== ADMIN_TOKEN) return res.status(401).json({ error: 'unauthorized' });
  const { purchaseId } = req.body || {};
  if (!purchaseId) return res.status(400).json({ error: 'missing purchaseId' });
  const p = purchases[purchaseId];
  if (!p) return res.status(404).json({ error: 'purchase not found' });
  p.revoked = true;
  saveState();
  logEvent(`REVOKE purchase=${purchaseId}`);
  res.json({ ok: true });
});

// Admin: list purchases (sanitized) - requires admin token
app.get('/admin/purchases', (req, res) => {
  const admin = req.headers['x-admin-token'];
  if (!admin || admin !== ADMIN_TOKEN) return res.status(401).json({ error: 'unauthorized' });
  const out = Object.keys(purchases).map(pid => ({ purchaseId: pid, userId: purchases[pid].userId, revoked: purchases[pid].revoked, lastValidated: purchases[pid].lastValidated }));
  res.json(out);
});

// Client: check purchase status
app.get('/status', (req, res) => {
  const purchaseId = req.query.purchaseId;
  if (!purchaseId) return res.status(400).json({ error: 'missing purchaseId' });
  const p = purchases[purchaseId];
  if (!p) return res.status(404).json({ error: 'purchase not found' });
  res.json({ purchaseId, revoked: p.revoked, lastValidated: p.lastValidated });
});

app.get('/', (req, res) => {
  // prefer to serve built dist index.html if present
  const distIndex = path.join(__dirname, 'public', 'dist', 'index.html');
  if (fs.existsSync(distIndex)) return res.sendFile(distIndex);
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server with HTTPS (self-signed for local dev) when requested.
if (USE_HTTPS) {
  const CERT_PATH = path.join(PRIVATE_DIR, 'cert.pem');
  const KEY_PATH = path.join(PRIVATE_DIR, 'key.pem');
  let cert, key;
  if (fs.existsSync(CERT_PATH) && fs.existsSync(KEY_PATH)) {
    cert = fs.readFileSync(CERT_PATH, 'utf8');
    key = fs.readFileSync(KEY_PATH, 'utf8');
  } else {
    const attrs = [{ name: 'commonName', value: 'localhost' }];
    const pems = selfsigned.generate(attrs, { days: 365 });
    key = pems.private;
    cert = pems.cert;
    fs.writeFileSync(KEY_PATH, key, { mode: 0o600 });
    fs.writeFileSync(CERT_PATH, cert, { mode: 0o600 });
    logEvent('Generated self-signed cert for HTTPS');
  }
  https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log('POC server (HTTPS) listening on port', PORT);
    logEvent('SERVER_START_HTTPS');
  });
} else {
  app.listen(PORT, () => {
    console.log('POC server listening on port', PORT);
    logEvent('SERVER_START');
  });
}
