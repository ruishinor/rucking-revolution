const crypto = require('crypto');

// Simulate server producing serverPub and wrappedCEK for a given clientPub
function serverWrapForClient(clientPub) {
  const cek = crypto.randomBytes(32);
  const ecdh = crypto.createECDH('prime256v1'); ecdh.generateKeys();
  const serverPub = ecdh.getPublicKey();
  const shared = ecdh.computeSecret(Buffer.from(clientPub, 'base64'));
  const derived = crypto.createHash('sha256').update(shared).digest();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', derived, iv);
  const wrapped = Buffer.concat([cipher.update(cek), cipher.final()]);
  const tag = cipher.getAuthTag();
  const wrappedCombined = Buffer.concat([wrapped, tag]);
  return { cek, serverPub: serverPub.toString('base64'), wrappedCEK: wrappedCombined.toString('base64'), iv: iv.toString('base64') };
}

function attemptDecryptWithDifferentClient(wrappedB64, ivB64, serverPubB64, differentClient) {
  const wrapped = Buffer.from(wrappedB64, 'base64');
  const iv = Buffer.from(ivB64, 'base64');
  const tag = wrapped.slice(wrapped.length - 16);
  const ciphertext = wrapped.slice(0, wrapped.length - 16);
  try {
    const shared = Buffer.from(differentClient.computeSecret(Buffer.from(serverPubB64, 'base64')));
    const derived = crypto.createHash('sha256').update(shared).digest();
    const decipher = crypto.createDecipheriv('aes-256-gcm', derived, iv);
    decipher.setAuthTag(tag);
    const cek = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return { ok: true, cek };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

// Test: server wraps CEK for clientA; clientB tries to decrypt -> should fail
const clientA = crypto.createECDH('prime256v1'); clientA.generateKeys();
const clientB = crypto.createECDH('prime256v1'); clientB.generateKeys();
const srv = serverWrapForClient(clientA.getPublicKey().toString('base64'));

console.log('Server produced wrappedCEK for clientA');
const r = attemptDecryptWithDifferentClient(srv.wrappedCEK, srv.iv, srv.serverPub, clientB);
if (r.ok) {
  console.error('MITM/Replay test FAILED: different client could unwrap CEK');
  process.exit(2);
} else {
  console.log('MITM/Replay test PASSED: different client failed to unwrap CEK');
}

// Replay with same client -> should succeed
const clientA2 = crypto.createECDH('prime256v1'); clientA2.generateKeys();
// For replay to succeed attacker would need clientA private; simulate by reusing clientA
try {
  const shared = clientA.computeSecret(Buffer.from(srv.serverPub, 'base64'));
  const derived = crypto.createHash('sha256').update(shared).digest();
  const wrapped = Buffer.from(srv.wrappedCEK, 'base64');
  const tag = wrapped.slice(wrapped.length - 16);
  const ciphertext = wrapped.slice(0, wrapped.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', derived, Buffer.from(srv.iv, 'base64'));
  decipher.setAuthTag(tag);
  const cek = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  console.log('Replay with original client succeeded (expected)');
} catch (e) {
  console.error('Replay with original client failed unexpectedly', e.message);
  process.exit(2);
}

console.log('mitm_replay_test completed');
