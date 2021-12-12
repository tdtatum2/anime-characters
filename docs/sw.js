const cacheName = 'animeCharacterCache'

self.addEventListener('install', function(event) {
    // Fires when the browser installs the app. Provides space to set up local environment after installation.
    console.log('SW: Event fire:' + event.type);
    // Caching local files.
    event.waitUntil(
        caches.open(cacheName).then((cache => {
            return cache.addAll([
                './',
                './index.html',
                './js/',
                './js/app.js',
                './js/auth.js',
                './js/bootstrap.min.js',
                './js/bootstrap.min.js.map',
                './js/index.js',
                './js/materialize.min.js',
                './css/',
                './css/bootstrap.min.css',
                './css/bootstrap.min.css.map',
                './css/materialize.min.css',
                './css/style.css',
                './imgs/',
                './imgs/akira.gif',
                './imgs/amon.gif',
                './imgs/annie.gif',
                './imgs/aot.png',
                './imgs/armin.jpg',
                './imgs/ayato.gif',
                './imgs/eren.jpg',
                './imgs/godspeedstatic.gif',
                './imgs/gojo.gif',
                './imgs/gon.gif',
                './imgs/hisoka.gif',
                './imgs/historia.jpg',
                './imgs/hxh.png',
                './imgs/icon_transparent.png',
                './imgs/icon48.png',
                './imgs/icon72.png',
                './imgs/icon96.png',
                './imgs/icon128.png',
                './imgs/icon192.png',
                './imgs/icon256.png',
                './imgs/icon512.png',
                './imgs/illumi.gif',
                './imgs/inumaki.png',
                './imgs/itachi.gif',
                './imgs/itadori.gif',
                './imgs/jjk.png',
                './imgs/juuzou.gif',
                './imgs/kakashi.gif',
                './imgs/kaneki.gif',
                './imgs/killua.png',
                './imgs/kurapika.gif',
                './imgs/leorio.png',
                './imgs/levi.jpg',
                './imgs/megumi.gif',
                './imgs/mikasa.jpg',
                './imgs/minato.gif',
                './imgs/naruto.gif',
                './imgs/nobara.gif',
                './imgs/sai.gif',
                './imgs/sasuke.gif',
                './imgs/tg.PNG',
                './imgs/toge.gif',
                './imgs/touka.gif',
                './imgs/yuta.gif',
            ]);
        }))
    );
});



self.addEventListener('activate', function(event) {
    // Fires after service worker completes its installation. Allows service worker to clean up previous versions.
    console.log('SW: Event activated: ' + event.type);
});

self.addEventListener('fetch', function(event) {
    // Fires when the app requests files or data.
    console.log('SW Fetched.' + event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open(cacheName).then((cache)=> {
                    cache.put(event.request, responseClone);

                });

                return response;
            }).catch(() => {
                return caches.match('./imgs/icon_transparent.png');
            })
        })
    );
});