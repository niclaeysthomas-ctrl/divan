const CACHE = "divan-v5";
const ASSETS = ["./", "./index.html", "./cours.html", "./cours-a.js?v=1", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // jamais de cache aveugle : pendant un build GitHub répond 404 et figerait l'app
    await Promise.all(ASSETS.map(async u => {
      try { const r = await fetch(u, {cache: "no-cache"}); if (r && r.ok) await c.put(u, r.clone()); } catch (err) {}
    }));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    // ne purger que nos propres caches : l'origine est partagée avec les autres apps
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("divan-") && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.ok) { const c = await caches.open(CACHE); c.put(req, fresh.clone()); }
      return fresh;
    } catch (err) {
      const hit = await caches.match(req);
      return hit || caches.match("./index.html");
    }
  })());
});
