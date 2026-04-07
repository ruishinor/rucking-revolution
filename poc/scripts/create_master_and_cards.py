from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os, base64, json, secrets

PRIVATE_DIR = os.path.join(os.getcwd(), 'private')
os.makedirs(PRIVATE_DIR, exist_ok=True)

MASTER_KEY_PATH = os.path.join(PRIVATE_DIR, 'master.key')
CARDS_ENC_PATH = os.path.join(PRIVATE_DIR, 'cards.enc')

cards = [
  {"id":1,"title":"Silent Move","text":"Move quietly, keep conversations to hand signals."},
  {"id":2,"title":"Buddy Check","text":"Regularly check buddy gear and breathing."},
  {"id":3,"title":"Route Selection","text":"Choose paths that minimize exposure and maximize cover."},
  {"id":4,"title":"Signal","text":"Use compact signals to convey intent without noise."},
  {"id":5,"title":"Watch Rotation","text":"Rotate watch duties to maintain alertness."}
]

def encrypt_with_key(plain_bytes, key):
    aesgcm = AESGCM(key)
    iv = secrets.token_bytes(12)
    ct = aesgcm.encrypt(iv, plain_bytes, None)
    return iv + ct

def main():
    new_master = secrets.token_bytes(32)
    with open(MASTER_KEY_PATH, 'wb') as f:
        f.write(base64.b64encode(new_master))
    print('WROTE_MASTER', MASTER_KEY_PATH)

    cards_json = json.dumps(cards).encode('utf8')
    combined = encrypt_with_key(cards_json, new_master)
    with open(CARDS_ENC_PATH, 'wb') as f:
        f.write(base64.b64encode(combined))
    print('WROTE_CARDS', CARDS_ENC_PATH)

if __name__ == '__main__':
    main()
