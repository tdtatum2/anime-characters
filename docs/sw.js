

self.addEventListener('install', function(event) {
    // Fires when the browser installs the app. Provides space to set up local environment after installation.
});



self.addEventListener('activate', function(event) {
    // Fires after service worker completes its installation. Allows service worker to clean up previous versions.
});

self.addEventListener('fetch', function(event) {
    // Fires when the app requests files or data.
    console.log(`SW: Fetching ${event.request.url}`);
});