const cacheName = 'rating-app-v1';
const assets = [
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
