// service-worker.js

const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/', // Cache the root
  '/index.html',
  '/CSS/styles.css',
  '/JS/script.js',
  '/manifest.json', // <-- ADD THIS LINE
  // Add paths to essential images (adjust paths as needed)
  '/images/favicons/favicon.ico',
  '/images/favicons/favicon-32x32.png',
  '/images/favicons/favicon-16x16.png',
  '/images/favicons/apple-touch-icon.png',
  '/images/Porftolio website/portfolio-site.png',
  '/images/happyfox/happyfox-app.png',
  '/images/Schiller Project/schiller.png',
  '/images/Raspberry Pi Adblocker & Streamer/raspberry-pi.png',
  '/images/Research LLMs & Human Knowledge/llm-research.png',
  '/images/The Friendly Wheelchair (Concept)/friendly-wheelchair.png',
  // Add paths to fonts or other critical assets if loaded locally
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
];

// Install event: Cache essential assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell including manifest'); // Updated log
        // Use addAll which fails if any resource fails to cache
        return cache.addAll(urlsToCache).catch(error => {
          console.error('Service Worker: Failed to cache essential assets during install:', error);
          // Rethrow error to potentially signal installation failure if critical assets (like manifest) fail
          throw error;
        });
      })
      .then(() => {
        console.log('Service Worker: Installation complete, resources cached.');
        // Immediately activate the new service worker once installed
        return self.skipWaiting();
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        console.log('Service Worker: Activation complete, old caches cleared.');
        // Take control of uncontrolled clients immediately
        return self.clients.claim();
      })
  );
});

// Fetch event: Serve cached content when offline, or fetch from network
self.addEventListener('fetch', event => {
    // Cache-First strategy for assets defined in urlsToCache:

    let isCacheable = false;
    try {
        const requestUrl = new URL(event.request.url);
        // Check if the request is for the root path or if the pathname exists in urlsToCache
        if (requestUrl.origin === self.location.origin) { // Only handle requests from the same origin for path checking
            isCacheable = urlsToCache.includes(requestUrl.pathname) || requestUrl.pathname === '/';
             // Handle explicit index.html request
             if (!isCacheable && requestUrl.pathname === '/index.html' && urlsToCache.includes('/index.html')) {
                 isCacheable = true;
             }
        } else if (urlsToCache.includes(event.request.url)) {
             // Handle full external URLs if they are explicitly listed
             isCacheable = true;
        }
    } catch (e) {
         console.error("Error parsing URL:", event.request.url, e);
         isCacheable = false;
    }


    if (isCacheable) {
        // console.log(`Service Worker: Handling fetch for cacheable resource: ${event.request.url}`); // Debug log
        event.respondWith(
            caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    // console.log(`Service Worker: Serving from cache: ${event.request.url}`);
                    return response;
                }

                // Not in cache - fetch from network, cache it, and return response
                // console.log(`Service Worker: Fetching from network: ${event.request.url}`);
                return fetch(event.request).then(
                    networkResponse => {
                        let isValidResponse = networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors');

                        if (isValidResponse) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    // console.log(`Service Worker: Caching new resource: ${event.request.url}`);
                                    cache.put(event.request, responseToCache);
                                });
                         } else {
                            // console.log(`Service Worker: Not caching invalid response for ${event.request.url} (Status: ${networkResponse.status}, Type: ${networkResponse.type})`);
                         }
                        return networkResponse;
                    }
                ).catch(error => {
                    console.error(`Service Worker: Fetch failed for ${event.request.url}; Error:`, error);
                    // If fetch fails, just re-throw error. Browser will show offline error page.
                     throw error;
                });
            })
        );
    } else {
        // Let non-cacheable requests pass through normally.
        // console.log(`Service Worker: Bypassing cache for: ${event.request.url}`);
    }
});