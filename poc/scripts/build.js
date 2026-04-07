const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const SRC = path.join(__dirname, '..', 'public');
const OUT = path.join(SRC, 'dist');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

(async () => {
  try {
    console.log('Bundling main.js with esbuild...');
    await esbuild.build({
      entryPoints: [path.join(SRC, 'main.js')],
      bundle: true,
      minify: true,
      sourcemap: false,
      platform: 'browser',
      target: ['es2019'],
      outfile: path.join(OUT, 'main.bundle.js')
    });

    console.log('Obfuscating bundle...');
    const bundleCode = fs.readFileSync(path.join(OUT, 'main.bundle.js'), 'utf8');
    const obf = JavaScriptObfuscator.obfuscate(bundleCode, {
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      stringArrayRotate: true,
      disableConsoleOutput: true
    });
    fs.writeFileSync(path.join(OUT, 'main.obf.js'), obf.getObfuscatedCode(), 'utf8');

    console.log('Copying static assets to dist...');
    const copy = ['index.html', 'styles.css', 'manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png'];
    copy.forEach(f => {
      const src = path.join(SRC, f);
      if (fs.existsSync(src)) fs.copyFileSync(src, path.join(OUT, f));
    });

    // update dist/index.html to point to bundled obfuscated script
    const indexPath = path.join(OUT, 'index.html');
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf8');
      html = html.replace('/main.js', '/dist/main.obf.js');
      fs.writeFileSync(indexPath, html, 'utf8');
    }

    console.log('Build complete. Dist is in public/dist');
  } catch (err) {
    console.error('Build failed', err);
    process.exit(1);
  }
})();
