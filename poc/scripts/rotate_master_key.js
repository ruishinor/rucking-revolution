const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PRIVATE_DIR = path.join(__dirname, '..', 'private');
const MASTER_KEY_PATH = path.join(PRIVATE_DIR, 'master.key');
const CARDS_ENC_PATH = path.join(PRIVATE_DIR, 'cards.enc');
const STATE_PATH = path.join(PRIVATE_DIR, 'state.json');

function decryptWithKey(b64, key) {
  const combined = Buffer.from(b64, 'base64');
  const iv = combined.slice(0, 12);
  const tag = combined.slice(combined.length - 16);
  const ct = combined.slice(12, combined.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ct), decipher.final()]);
  return plain;
}

function encryptWithKey(plainBuffer, key) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ct = Buffer.concat([cipher.update(plainBuffer), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, ct, tag]).toString('base64');
}

async function main() {
  if (!fs.existsSync(PRIVATE_DIR)) {
    console.error('Missing private dir:', PRIVATE_DIR);
    process.exit(1);
  }

  let oldMaster = null;
  if (fs.existsSync(MASTER_KEY_PATH)) {
    oldMaster = Buffer.from(fs.readFileSync(MASTER_KEY_PATH, 'utf8'), 'base64');
    console.log('Loaded existing master key.');
  } else {
    console.warn('No existing master.key found; proceeding to create a fresh master key.');
  }

  const newMaster = crypto.randomBytes(32);

  // Backup old master (if present)
  if (oldMaster) {
    const backupPath = MASTER_KEY_PATH + '.old.b64';
    fs.writeFileSync(backupPath, oldMaster.toString('base64'), { mode: 0o600 });
    console.log('Backed up old master to', backupPath);
  }

  // Re-encrypt cards
  try {
    let cardsPlain = null;
    if (fs.existsSync(CARDS_ENC_PATH) && oldMaster) {
      try {
        const enc = fs.readFileSync(CARDS_ENC_PATH, 'utf8');
        cardsPlain = decryptWithKey(enc, oldMaster);
        console.log('Decrypted existing cards.enc');
      } catch (e) {
        console.warn('Could not decrypt existing cards.enc with old master:', e.message);
      }
    }
    // fallback to plaintext cards.json if present
    const cardsJsonPath = path.join(PRIVATE_DIR, 'cards.json');
    if (!cardsPlain && fs.existsSync(cardsJsonPath)) {
      cardsPlain = fs.readFileSync(cardsJsonPath, 'utf8');
      console.log('Loaded plaintext cards.json as source');
    }

    if (cardsPlain) {
      const newEnc = encryptWithKey(Buffer.from(cardsPlain, 'utf8'), newMaster);
      fs.writeFileSync(CARDS_ENC_PATH, newEnc, { mode: 0o600 });
      console.log('Wrote new cards.enc encrypted with rotated master key');
    } else {
      console.log('No card source found (cards.enc or cards.json); skipping cards re-encrypt');
    }
  } catch (e) {
    console.error('Error while re-encrypting cards:', e);
  }

  // Re-encrypt state.purchases CEKs
  try {
    if (fs.existsSync(STATE_PATH)) {
      const state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
      if (state.purchases) {
        for (const pid of Object.keys(state.purchases)) {
          const p = state.purchases[pid];
          if (p.cek) {
            if (!oldMaster) {
              console.warn('No old master available; cannot decrypt existing CEK for', pid);
              continue;
            }
            try {
              const cekBuf = decryptWithKey(p.cek, oldMaster);
              state.purchases[pid].cek = encryptWithKey(cekBuf, newMaster);
              console.log('Re-encrypted CEK for purchase', pid);
            } catch (e) {
              console.error('Failed to re-encrypt CEK for', pid, e.message);
            }
          }
        }
      }
      fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), { mode: 0o600 });
      console.log('Updated state.json with re-encrypted CEKs');
    } else {
      console.log('No state.json found; skipping purchase CEK rotation');
    }
  } catch (e) {
    console.error('Error rotating state.json CEKs:', e);
  }

  // Write new master.key
  try {
    fs.writeFileSync(MASTER_KEY_PATH, newMaster.toString('base64'), { mode: 0o600 });
    console.log('Wrote new master.key');
  } catch (e) {
    console.error('Failed to write new master.key:', e);
    process.exit(1);
  }

  console.log('Master key rotation complete.');
}

main().catch(err => { console.error('Rotation script failed:', err); process.exit(1); });
