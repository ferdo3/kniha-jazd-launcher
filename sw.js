/* Minimálny service worker — VÝHRADNE pre Chrome/Android PWA installability („Inštalovať aplikáciu").
   Žiadny offline cache, žiadna caching stratégia. Fetch je passthrough (necháme prehliadač spraviť
   normálny sieťový request). Súbor MUSÍ ležať na base path (/kniha-jazd-launcher/sw.js), aby scope sedel. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* passthrough — žiadny zásah, žiadny cache */ });
