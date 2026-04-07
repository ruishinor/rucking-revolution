const crypto = require('crypto');

function encryptWithCEK(plainBuf, cek) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', cek, iv);
  const ct = Buffer.concat([cipher.update(plainBuf), cipher.final()]);
  const tag = cipher.getAuthTag();
  return { iv: iv.toString('base64'), data: Buffer.concat([ct, tag]).toString('base64') };
}

function decryptWithCEK(ivB64, dataB64, cek) {
  const iv = Buffer.from(ivB64, 'base64');
  const combined = Buffer.from(dataB64, 'base64');
  const tag = combined.slice(combined.length - 16);
  const ct = combined.slice(0, combined.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', cek, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ct), decipher.final()]);
}

// ECDH wrap/unwrap test
function ecdhWrapUnwrapTest() {
  const cek = crypto.randomBytes(32);
  const client = crypto.createECDH('prime256v1'); client.generateKeys();
  const server = crypto.createECDH('prime256v1'); server.generateKeys();
  const shared1 = client.computeSecret(server.getPublicKey());
  const shared2 = server.computeSecret(client.getPublicKey());
  if (!shared1.equals(shared2)) throw new Error('ECDH mismatch');

  const derived = crypto.createHash('sha256').update(shared1).digest();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', derived, iv);
  const wrapped = Buffer.concat([cipher.update(cek), cipher.final()]);
  const tag = cipher.getAuthTag();
  const wrappedCombined = Buffer.concat([wrapped, tag]);

  // Unwrap
  const decipher = crypto.createDecipheriv('aes-256-gcm', derived, iv);
  decipher.setAuthTag(tag);
  const unwrapped = Buffer.concat([decipher.update(wrapped), decipher.final()]);
  if (!unwrapped.equals(cek)) throw new Error('Unwrapped CEK mismatch');
  console.log('ECDH wrap/unwrap test PASSED');

  // CEK -> encrypt/decrypt card
  const card = Buffer.from(JSON.stringify({ id: 1, title: 'Silent Move', text: 'Move quietly' }));
  const enc = encryptWithCEK(card, cek);
  const dec = decryptWithCEK(enc.iv, enc.data, cek);
  if (dec.toString('utf8') !== card.toString('utf8')) throw new Error('Card decrypt mismatch');
  console.log('Card encrypt/decrypt with CEK PASSED');
}

try {
  ecdhWrapUnwrapTest();
  console.log('Crypto unit tests completed successfully');
  process.exit(0);
} catch (e) {
  console.error('Crypto unit test failed:', e);
  process.exit(2);
}
