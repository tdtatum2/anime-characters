var CACHE_NAME = 'anime-characters-cache';
var urlsToCache = [
    '/'
]

console.log("Trying to install");
self.addEventListener('install', function(event) {
    console.log('SW: Event fired.');
    // event.waitUntil(
    //     caches.open(CACHE_NAME)
    //     .then(function(cache) {
    //         console.log('Opened cache');
    //         return cache.addAll(urlsToCache);
    //     })
    // );
});