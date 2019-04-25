importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:js|css|ico)$/,
  new workbox.strategies.StaleWhileRevalidate(),
);

workbox.googleAnalytics.initialize(); 
