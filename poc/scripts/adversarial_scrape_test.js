const http = require('http');
const https = require('https');
const url = require('url');

const TARGET = { hostname: 'localhost', port: 3001 };

const paths = [
  '/private/cards.json',
  '/private/cards.enc',
  '/poc/private/cards.enc',
  '/..%2f..%2fprivate/cards.json',
  '/.git/config',
  '/.git/HEAD',
  '/.env',
  '/package.json',
  '/public/dist/main.obf.js',
  '/dist/main.obf.js',
  '/public/main.js',
  '/index.html'
];

function probePath(p) {
  return new Promise((resolve) => {
    const opts = { hostname: TARGET.hostname, port: TARGET.port, path: p, method: 'GET' };
    const req = http.request(opts, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString('utf8').slice(0, 5000);
        resolve({ path: p, status: res.statusCode, length: body.length, snippet: body.slice(0, 1000) });
      });
    });
    req.on('error', (e) => resolve({ path: p, error: e.message }));
    req.end();
  });
}

const fs = require('fs');
async function run() {
  console.log('Adversarial scrape test against http://localhost:3001');
  const results = [];
  for (const p of paths) {
    const r = await probePath(p);
    results.push(r);
    if (r.error) console.log(p, 'ERROR', r.error);
    else console.log(p, '=>', r.status, 'len=', r.length, '\n', r.snippet.replace(/\n/g,' '));
  }
  const outPath = path.join(__dirname, '..', 'private', 'adversarial_results.json');
  try { fs.mkdirSync(path.dirname(outPath), { recursive: true }); } catch (e) {}
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log('Done. Results written to', outPath, '\nReview responses for any leaked plaintext or private files.');
}
run();
