"use strict";

const API_ACTIVATE = '/activate';
const API_REGISTER_REQ = '/webauthn/registerRequest';
const API_REGISTER_RES = '/webauthn/registerResponse';
const API_AUTH_REQ = '/webauthn/authRequest';
const API_AUTH_RES = '/webauthn/authResponse';

const statusEl = document.getElementById('status');
const activateBtn = document.getElementById('activateBtn');
const registerBtn = document.getElementById('registerBtn');
const revalidateBtn = document.getElementById('revalidateBtn');
const savePassBtn = document.getElementById('savePassBtn');
const unlockBtn = document.getElementById('unlockBtn');
const passphraseInput = document.getElementById('passphrase');
const unlockSection = document.getElementById('unlock');
const activationSection = document.getElementById('activation');
const cardsSection = document.getElementById('cards');
const cardsContainer = document.getElementById('cardsContainer');

let clientKeyPair = null; // ephemeral ECDH key for activation/revalidation
let cekCryptoKey = null; // AES-GCM CryptoKey for decrypting cards
let purchaseId = null;
let buyerInfo = null;

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered');
    } catch (err) {
      console.warn('SW register failed', err);
    }
  }
}

function arrayBufferToBase64(buf) {
  const bytes = new Uint8Array(buf);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// base64url -> ArrayBuffer
function base64UrlToArrayBuffer(b64url) {
  // convert base64url to base64
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  // pad
  const pad = b64.length % 4 === 0 ? '' : '='.repeat(4 - (b64.length % 4));
  return base64ToArrayBuffer(b64 + pad);
}

// IndexedDB helpers
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('crew-pwa', 2);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('cards')) db.createObjectStore('cards', { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function putMeta(obj) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('meta', 'readwrite');
    tx.objectStore('meta').put(obj);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function getMeta(key) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('meta', 'readonly');
    const r = tx.objectStore('meta').get(key);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function putCards(cardsArray) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('cards', 'readwrite');
    const store = tx.objectStore('cards');
    cardsArray.forEach(c => store.put(c));
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function getAllEncryptedCards() {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction('cards', 'readonly');
    const store = tx.objectStore('cards');
    const r = store.getAll();
    r.onsuccess = () => res(r.result || []);
    r.onerror = () => rej(r.error);
  });
}

// Activation flow (ECDH unwrap of CEK)
async function generateClientKeyPair() {
  clientKeyPair = await window.crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const pub = await window.crypto.subtle.exportKey('raw', clientKeyPair.publicKey);
  return arrayBufferToBase64(pub);
}

async function activate() {
  statusEl.textContent = 'Creating purchase token and activating...';
  // For demo purposes we create a purchase token here. In production this comes from checkout/email link.
  const createResp = await fetch('/createPurchase', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: 'demo-user' }) });
  if (!createResp.ok) {
    statusEl.textContent = 'Purchase creation failed';
    console.error('create purchase failed', await createResp.text());
    return;
  }
  const createJson = await createResp.json();
  const activationToken = createJson.activationToken;
  const clientPub = await generateClientKeyPair();
  const resp = await fetch(API_ACTIVATE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientPubKey: clientPub, activationToken })
  });
  if (!resp.ok) {
    statusEl.textContent = 'Activation failed';
    console.error('activation failed', await resp.text());
    return;
  }
  const j = await resp.json();
  buyerInfo = j.buyer || 'Buyer';
  purchaseId = j.purchaseId;

  // derive shared secret and unwrap CEK
  const serverPubKeyAb = base64ToArrayBuffer(j.serverPubKey);
  const serverPubKey = await window.crypto.subtle.importKey('raw', serverPubKeyAb, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const sharedBits = await window.crypto.subtle.deriveBits({ name: 'ECDH', public: serverPubKey }, clientKeyPair.privateKey, 256);
  const deriv = await window.crypto.subtle.digest('SHA-256', sharedBits);
  const derivedKey = await window.crypto.subtle.importKey('raw', deriv, { name: 'AES-GCM' }, false, ['decrypt']);
  const wrappedCombined = base64ToArrayBuffer(j.wrappedCEK);
  const wrapIv = base64ToArrayBuffer(j.wrappedIV);
  try {
    const plain = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(wrapIv) }, derivedKey, wrappedCombined);
    // import CEK as extractable initially so we can optionally wrap/export, then re-import as non-extractable
    cekCryptoKey = await window.crypto.subtle.importKey('raw', plain, { name: 'AES-GCM' }, true, ['decrypt']);

    // store encrypted cards in IndexedDB
    await putCards(j.cards);
    // store purchase metadata including lastValidated
    await putMeta({ key: 'purchase', purchaseId: j.purchaseId, lastValidated: j.lastValidated || Date.now() });
    statusEl.textContent = 'Activation complete — cards stored. You may register device or save passphrase for offline unlock.';
    activationSection.style.display = 'none';
    unlockSection.style.display = 'block';
    await decryptAndRenderAll(cekCryptoKey, j.cards);
  } catch (err) {
    console.error('failed to unwrap CEK', err);
    statusEl.textContent = 'Activation failed (unwrap error)';
  }
}

// decrypt cards and render
async function decryptAndRenderAll(cekKey, encryptedCards) {
  cardsContainer.innerHTML = '';
  const decoder = new TextDecoder();
  for (const c of encryptedCards) {
    try {
      const ct = base64ToArrayBuffer(c.data);
      const iv = base64ToArrayBuffer(c.iv);
      const plainBuf = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(iv) }, cekKey, ct);
      const plainText = decoder.decode(plainBuf);
      const obj = JSON.parse(plainText);
      renderCard(c.id, obj.title, obj.text);
    } catch (err) {
      console.error('card decrypt failed', c.id, err);
      renderCard(c.id, 'Locked', 'Unable to decrypt. Enter passphrase or revalidate.');
    }
  }
  cardsSection.style.display = 'block';
}

// Save wrapped CEK with passphrase for offline use (wrapKey to avoid raw export)
async function saveWrappedKeyWithPassphrase(pass) {
  if (!cekCryptoKey) {
    alert('No CEK available — activate first.');
    return;
  }
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const baseKey = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(pass), { name: 'PBKDF2' }, false, ['deriveKey']);
  const wrapKey = await window.crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 150000, hash: 'SHA-256' }, baseKey, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  // Export the CEK bytes so we can encrypt them; then re-import CEK as non-extractable to reduce exposure
  const cekRawBytes = await window.crypto.subtle.exportKey('raw', cekCryptoKey);
  const wrapped = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, wrapKey, cekRawBytes);
  await putMeta({ key: 'wrappedCEK', salt: arrayBufferToBase64(salt.buffer), iv: arrayBufferToBase64(iv.buffer), data: arrayBufferToBase64(wrapped) });
  // Re-import CEK as non-extractable for runtime security
  cekCryptoKey = await window.crypto.subtle.importKey('raw', cekRawBytes, { name: 'AES-GCM' }, false, ['decrypt']);
  statusEl.textContent = 'Wrapped CEK saved to device storage (IndexedDB). CEK re-imported as non-extractable.';
}

async function unlockWithPassphrase(pass) {
  // check revalidation window
  const purchaseMeta = await getMeta('purchase');
  const REVALIDATE_DAYS = 14;
  if (purchaseMeta && purchaseMeta.lastValidated) {
    const age = Date.now() - purchaseMeta.lastValidated;
    if (age > REVALIDATE_DAYS * 24 * 60 * 60 * 1000) {
      statusEl.textContent = 'Offline license expired — please revalidate online.';
      return;
    }
  }

  const entry = await getMeta('wrappedCEK');
  if (!entry) { statusEl.textContent = 'No wrapped key stored. Activate first.'; return; }
  const salt = base64ToArrayBuffer(entry.salt);
  const iv = base64ToArrayBuffer(entry.iv);
  const wrapped = base64ToArrayBuffer(entry.data);
  const baseKey = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(pass), { name: 'PBKDF2' }, false, ['deriveKey']);
  const wrapKey = await window.crypto.subtle.deriveKey({ name: 'PBKDF2', salt: new Uint8Array(salt), iterations: 150000, hash: 'SHA-256' }, baseKey, { name: 'AES-GCM', length: 256 }, true, ['wrapKey', 'unwrapKey']);
  try {
    const unwrappedKey = await window.crypto.subtle.unwrapKey('raw', wrapped, wrapKey, { name: 'AES-GCM', iv: new Uint8Array(iv) }, { name: 'AES-GCM' }, false, ['decrypt']);
    cekCryptoKey = unwrappedKey;
  } catch (err) {
    console.error('unwrap with pass failed', err);
    statusEl.textContent = 'Passphrase incorrect or unwrap failed.';
    return;
  }
  // update lastValidated from meta (we only allow unlock when within window)
  if (purchaseMeta && purchaseMeta.lastValidated) {
    await putMeta({ key: 'purchase', purchaseId: purchaseMeta.purchaseId, lastValidated: purchaseMeta.lastValidated });
  }
  const encryptedCards = await getAllEncryptedCards();
  if (!encryptedCards || encryptedCards.length === 0) { statusEl.textContent = 'No encrypted cards found. Activate first.'; return; }
  statusEl.textContent = 'Unlocked offline. Rendering cards...';
  await decryptAndRenderAll(cekCryptoKey, encryptedCards);
}

// WebAuthn helpers: convert server-provided options (base64url fields) to ArrayBuffer
function convertMakeCredReq(makeCredReq) {
  makeCredReq.challenge = base64UrlToArrayBuffer(makeCredReq.challenge);
  makeCredReq.user.id = base64UrlToArrayBuffer(makeCredReq.user.id);
  if (makeCredReq.excludeCredentials) {
    makeCredReq.excludeCredentials = makeCredReq.excludeCredentials.map(c => ({ id: base64UrlToArrayBuffer(c.id), type: c.type }));
  }
  return makeCredReq;
}

function convertGetAssertReq(getAssertReq) {
  getAssertReq.challenge = base64UrlToArrayBuffer(getAssertReq.challenge);
  if (getAssertReq.allowCredentials) {
    getAssertReq.allowCredentials = getAssertReq.allowCredentials.map(c => ({ id: base64UrlToArrayBuffer(c.id), type: c.type }));
  }
  return getAssertReq;
}

// Register device via WebAuthn (server-driven)
async function registerDevice() {
  try {
    statusEl.textContent = 'Starting WebAuthn registration...';
    const r = await fetch(API_REGISTER_REQ, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: 'demo-user' }) });
    const opts = await r.json();
    const publicKey = convertMakeCredReq(opts);
    const cred = await navigator.credentials.create({ publicKey });
    const attestationResponse = {
      id: cred.id,
      rawId: arrayBufferToBase64(cred.rawId),
      response: {
        attestationObject: arrayBufferToBase64(cred.response.attestationObject),
        clientDataJSON: arrayBufferToBase64(cred.response.clientDataJSON)
      },
      type: cred.type
    };
    const rr = await fetch(API_REGISTER_RES, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: 'demo-user', attestationResponse }) });
    const jr = await rr.json();
    if (jr && jr.ok) {
      statusEl.textContent = 'Device registered for WebAuthn.';
    } else {
      statusEl.textContent = 'Registration failed.';
      console.error(jr);
    }
  } catch (err) {
    console.error('registerDevice failed', err);
    statusEl.textContent = 'Registration error';
  }
}

// Revalidate using WebAuthn + ephemeral ECDH to receive wrapped CEK
async function revalidateWithWebAuthn() {
  if (!purchaseId) { alert('No purchaseId — activate first.'); return; }
  try {
    statusEl.textContent = 'Starting revalidation (WebAuthn)...';
    // create ephemeral ECDH keypair and send clientPub to server
    const revalKey = await window.crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
    const clientPub = await window.crypto.subtle.exportKey('raw', revalKey.publicKey);
    const clientPubB64 = arrayBufferToBase64(clientPub);
    // ask server for auth options (and server stores our clientPub)
    const r = await fetch(API_AUTH_REQ, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ purchaseId, clientPubKey: clientPubB64 }) });
    const opts = await r.json();
    const publicKey = convertGetAssertReq(opts);
    const assertion = await navigator.credentials.get({ publicKey });
    const assertionResponse = {
      id: assertion.id,
      rawId: arrayBufferToBase64(assertion.rawId),
      response: {
        authenticatorData: arrayBufferToBase64(assertion.response.authenticatorData),
        clientDataJSON: arrayBufferToBase64(assertion.response.clientDataJSON),
        signature: arrayBufferToBase64(assertion.response.signature),
        userHandle: assertion.response.userHandle ? arrayBufferToBase64(assertion.response.userHandle) : null
      },
      type: assertion.type
    };
    // send assertion to server to complete revalidation and receive wrapped CEK
    const rr = await fetch(API_AUTH_RES, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ purchaseId, assertionResponse }) });
    const jr = await rr.json();
    if (!rr.ok) {
      statusEl.textContent = 'Revalidation failed';
      console.error('revalidate failed', jr);
      return;
    }
    // unwrap CEK using ephemeral revalKey and serverPub
    const serverPubKeyAb = base64ToArrayBuffer(jr.serverPubKey);
    const serverPubKey = await window.crypto.subtle.importKey('raw', serverPubKeyAb, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
    const sharedBits = await window.crypto.subtle.deriveBits({ name: 'ECDH', public: serverPubKey }, revalKey.privateKey, 256);
    const deriv = await window.crypto.subtle.digest('SHA-256', sharedBits);
    const derivedKey = await window.crypto.subtle.importKey('raw', deriv, { name: 'AES-GCM' }, false, ['decrypt']);
    const wrappedCombined = base64ToArrayBuffer(jr.wrappedCEK);
    const wrapIv = base64ToArrayBuffer(jr.wrappedIV);
    const plain = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(wrapIv) }, derivedKey, wrappedCombined);
    // import CEK as extractable initially so build/flows that need to wrap/ export can do so, then re-import as non-extractable
    cekCryptoKey = await window.crypto.subtle.importKey('raw', plain, { name: 'AES-GCM' }, true, ['decrypt']);
    // update local purchase lastValidated timestamp with server value
    if (jr && jr.lastValidated) {
      await putMeta({ key: 'purchase', purchaseId: purchaseId, lastValidated: jr.lastValidated });
    }
    statusEl.textContent = 'Revalidation successful — CEK refreshed.';
    // load cards from IndexedDB
    const encryptedCards = await getAllEncryptedCards();
    await decryptAndRenderAll(cekCryptoKey, encryptedCards);
  } catch (err) {
    console.error('revalidate error', err);
    statusEl.textContent = 'Revalidation error';
  }
}

// Render card onto canvas with watermark
function renderCard(id, title, text) {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  ctx.fillStyle = '#000';
  ctx.font = '20px sans-serif';
  ctx.fillText(title, 30, 60);

  ctx.font = '16px sans-serif';
  const maxWidth = canvas.width - 60;
  let y = 100;
  const words = text.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth) {
      ctx.fillText(line, 30, y);
      line = word + ' ';
      y += 24;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, 30, y);
  }

  const watermark = buyerInfo || 'Demo Buyer';
  ctx.save();
  ctx.fillStyle = 'rgba(150,150,150,0.12)';
  ctx.font = '26px sans-serif';
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-0.5);
  for (let i = -3; i < 4; i++) {
    ctx.fillText(watermark, -ctx.measureText(watermark).width / 2, i * 60);
  }
  ctx.restore();

  const wrapper = document.createElement('div');
  wrapper.className = 'card-wrapper';
  wrapper.appendChild(canvas);
  cardsContainer.appendChild(wrapper);
}

// wire up UI
activateBtn.addEventListener('click', () => { activate().catch(err => { console.error(err); statusEl.textContent = 'Activation error'; }); });
savePassBtn.addEventListener('click', async () => {
  const p = passphraseInput.value;
  if (!p) { alert('Enter a passphrase'); return; }
  await saveWrappedKeyWithPassphrase(p);
});
unlockBtn.addEventListener('click', async () => {
  const p = passphraseInput.value;
  if (!p) { alert('Enter a passphrase'); return; }
  await unlockWithPassphrase(p);
});
registerBtn.addEventListener('click', () => { registerDevice().catch(err => { console.error(err); statusEl.textContent = 'Register error'; }); });
revalidateBtn.addEventListener('click', () => { revalidateWithWebAuthn().catch(err => { console.error(err); statusEl.textContent = 'Revalidate error'; }); });

registerSW();
