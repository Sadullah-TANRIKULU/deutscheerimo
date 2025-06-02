"use strict";
// File: service-worker.ts
const urlsToCache = [
    "/",
    "./index.html",
    "./assets/Js_logo.png",
    "./assets/dont_panic.png",
    "./manifest.json",
    "./dist/script.js",
];
self.addEventListener("install", (event) => {
    const swEvent = event;
    swEvent.waitUntil(caches.open("pwa-assets").then((cache) => {
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    }));
});
