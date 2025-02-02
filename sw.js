const CACHE_NAME = 'gch-25.01.02';
const FILES_TO_CACHE = [
'/',
'/index.html',
'/styles.css',
'/scripts.js',
'/icon-192x192.png',
'/icon-512x512.png'
];

// Instalação: armazena arquivos em cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Busca recursos do cache quando offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
