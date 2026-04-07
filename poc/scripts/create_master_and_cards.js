const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PRIVATE_DIR = path.join(__dirname, '..', 'private');
if (!fs.existsSync(PRIVATE_DIR)) fs.mkdirSync(PRIVATE_DIR, { recursive: true });
const MASTER_KEY_PATH = path.join(PRIVATE_DIR, 'master.key');
const CARDS_ENC_PATH = path.join(PRIVATE_DIR, 'cards.enc');

const cards = [
  { id: 1, title: 'Silent Move', text: 'Move quietly, keep conversations to hand signals.' },
  { id: 2, title: 'Buddy Check', text: 'Regularly check buddy gear and breathing.' },
  { id: 3, title: 'Route Selection', text: 'Choose paths that minimize exposure and maximize cover.' },
  { id: 4, title: 'Signal', text: 'Use compact signals to convey intent without noise.' },
  { id: 5, title: 'Watch Rotation', text: 'Rotate watch duties to maintain alertness.' }
];

function encryptWithKey(plainBuffer, key) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ct = Buffer.concat([cipher.update(plainBuffer), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, ct, tag]).toString('base64');
}

function main() {
  const newMaster = crypto.randomBytes(32);
  fs.writeFileSync(MASTER_KEY_PATH, newMaster.toString('base64'), { mode: 0o600 });
  console.log('Wrote new master.key');

  const cardsJson = JSON.stringify(cards);
  const enc = encryptWithKey(Buffer.from(cardsJson, 'utf8'), newMaster);
  fs.writeFileSync(CARDS_ENC_PATH, enc, { mode: 0o600 });
  console.log('Wrote new cards.enc');
}

main();
