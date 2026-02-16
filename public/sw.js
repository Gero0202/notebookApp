const CACHE_NAME = "runbook-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return fetch(event.request)
        .then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        .catch(() => {
          return cache.match(event.request);
        });
    })
  );
});

