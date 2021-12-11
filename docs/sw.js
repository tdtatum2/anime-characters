const cacheName = 'animeCharacterCache'

self.addEventListener('install', function(event) {
    // Fires when the browser installs the app. Provides space to set up local environment after installation.
    console.log('SW: Event fire:' + event.type);
});



self.addEventListener('activate', function(event) {
    // Fires after service worker completes its installation. Allows service worker to clean up previous versions.
    console.log('SW: Event activated: ' + event.type);
});

self.addEventListener('fetch', function(event) {
    // Fires when the app requests files or data.
    console.log('SW Fetched.' + event.request.url);
    event.respondWith(fetch(event.request));
});