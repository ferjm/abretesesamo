importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(app.js|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
);
