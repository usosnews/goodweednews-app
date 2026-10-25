/* Good Weed News Field Guide service worker.
   Network first: visitors always get the latest page and law data when online;
   the cached copy is only used offline. Bump CACHE to force-clear old copies. */
const CACHE = 'gwn-v5';
const ASSETS = ['/', '/index.html', '/manifest.json', '/states.json', '/federal.json', '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png', '/apple-touch-icon.png', '/favicon.svg', '/gwn-logo.png', '/gwn-logo.webp', '/anton.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {})))).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(cs => cs.forEach(c => c.navigate(c.url).catch(() => {})))
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('/index.html')))
  );
});
