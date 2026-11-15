// Service worker: precache the whole app so it opens instantly and works offline.
// Bump VERSION whenever any file changes so phones pick up the update.
const VERSION = 'figprep-v1.1.3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/app.css',
  './js/app.js',
  './js/ui.js',
  './js/util.js',
  './js/store.js',
  './js/content.js',
  './js/drills.js',
  './js/views/home.js',
  './js/views/study.js',
  './js/views/library.js',
  './js/views/firms.js',
  './js/views/track.js',
  './js/views/settings.js',
  './js/data/cards-core.js',
  './js/data/cards-banks.js',
  './js/data/cards-fig.js',
  './js/data/cards-guide.js',
  './js/data/guide.js',
  './js/data/terms.js',
  './js/data/formulas.js',
  './js/data/sheets.js',
  './js/data/deals.js',
  './js/data/firms.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Cache-first for our own files (fast + offline); fall back to network, then to the app shell.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req)
          .then((res) => {
            if (res.ok && res.type === 'basic') {
              const copy = res.clone();
              caches.open(VERSION).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())),
    ),
  );
});
