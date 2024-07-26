self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('stoppuhr-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/scripts.js',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-512x512.png',
                '/beep.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
