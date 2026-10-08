var C='habit-tracker-v2',A=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;
 e.respondWith(caches.open(C).then(function(c){return c.match(e.request).then(function(m){
  var f=fetch(e.request).then(function(r){if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());return r}).catch(function(){return m});
  return m||f})}))});
