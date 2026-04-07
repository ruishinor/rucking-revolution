const CACHE_NAME = 'crew-pwa-v1';
const ASSETS = ['/', '/index.html', '/main.js', '/dist/main.obf.js', '/styles.css', '/manifest.json'];

self.addEventListener('install', evt => {
  self.skipWaiting();
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', evt => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', evt => {
  const url = new URL(evt.request.url);
  if (ASSETS.includes(url.pathname) || url.origin === location.origin) {
    evt.respondWith(caches.match(evt.request).then(res => res || fetch(evt.request)));
  } else {
    evt.respondWith(fetch(evt.request).catch(() => caches.match(evt.request)));
  }
});
