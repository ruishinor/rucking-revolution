const http = require('http');
const crypto = require('crypto');

function postJSON(path, obj) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(obj);
    const options = {
      hostname: 'localhost',
      port: 3001,
      path,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    };
    const req = http.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

(async () => {
  try {
    // Create a purchase token first (simulate checkout)
    const create = await postJSON('/createPurchase', { userId: 'demo-user' });
    console.log('Created purchase', create.purchaseId);
    const ecdh = crypto.createECDH('prime256v1');
    const clientPub = ecdh.generateKeys();
    const clientPubB64 = clientPub.toString('base64');
    console.log('Posting clientPub length:', clientPubB64.length);

    const resp = await postJSON('/activate', { clientPubKey: clientPubB64, activationToken: create.activationToken });
    console.log('Activation response keys:', Object.keys(resp));

    const serverPub = Buffer.from(resp.serverPubKey, 'base64');
    const wrappedCEK = Buffer.from(resp.wrappedCEK, 'base64');
    const wrapIv = Buffer.from(resp.wrappedIV, 'base64');

    const shared = ecdh.computeSecret(serverPub);
    const derived = crypto.createHash('sha256').update(shared).digest();

    // decrypt wrappedCEK using AES-256-GCM
    const tag = wrappedCEK.slice(wrappedCEK.length - 16);
    const ciphertext = wrappedCEK.slice(0, wrappedCEK.length - 16);
    const decipher = crypto.createDecipheriv('aes-256-gcm', derived, wrapIv);
    decipher.setAuthTag(tag);
    const cek = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    console.log('Derived CEK length:', cek.length, 'purchaseId:', resp.purchaseId);

    // decrypt first card
    const c = resp.cards[0];
    const cardCipher = Buffer.from(c.data, 'base64');
    const cardTag = cardCipher.slice(cardCipher.length - 16);
    const cardCt = cardCipher.slice(0, cardCipher.length - 16);
    const cardIv = Buffer.from(c.iv, 'base64');
    const decipher2 = crypto.createDecipheriv('aes-256-gcm', cek, cardIv);
    decipher2.setAuthTag(cardTag);
    const plainCard = Buffer.concat([decipher2.update(cardCt), decipher2.final()]);
    console.log('Decrypted card:', plainCard.toString('utf8'));
  } catch (err) {
    console.error('Test client error', err);
    process.exit(1);
  }
})();
