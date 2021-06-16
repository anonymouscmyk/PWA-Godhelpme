const version = 'v10';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
    		'/bloc.html',
		    '/quiz.html',
        '/style.css',
        '/quizproject.js',
        '/script.js',
        '/notfound.txt',
        '/images/nightmap.jpg',
        
        
        
        
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    console.log("response is ");
    console.log(response);
    if (response !== undefined) {
      return response;
    } else {
      console.log("Offline fetch made");
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});