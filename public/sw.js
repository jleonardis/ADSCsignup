console.log("Hello from your service worker!");

self.addEventListener('install', e => {
  e.waitUntil(caches.open('signup').then(function(cache) {
      return cache.addAll([
        '/',
        '/css/main.css',
        '/css/app.css',
        '/js/checkAnimation.js',
        '/js/main.js',
        '/manifest.webmanifest'
      ]);
    })
  );
});

self.addEventListener('sync', e => {
  var sendSignups = new Promise((resolve, reject) => {
    var request = indexedDB.open('amigos_signups', 1);
    request.onsuccess = e => {
      var db = e.target.result;
      var signups = db.transaction('signups', 'readonly').objectStore('signups');
      signups.openCursor().onsuccess = e => {
        var cursor = e.target.result;
        if (cursor){
          // fetch('/saveSignup', {
          //   method: 'post',
          //   headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          //   body: 'first_name=' + cursor.value.firstName + '&last_name=' + cursor.value.lastName + '&email=' + cursor.value.email
          // })
          // .then(response => response.json())
          // .then(json => {
          //   setTimeout(function(){
          //     var box = db.transaction('signups', 'readwrite').objectStore('signups');
          //     json['email_addresses'].forEach(function(elem){
          //       box.delete(elem['email_address']);
          //     });
          //   }, 500) //set timeout is used to slow down API calls so as to not exceed or secondly limit
          // })
          // .catch(err => console.log(err));
          cursor.continue();
        }
      }
      resolve();
    };
    request.onerror = e => { reject(); }
  });
  e.waitUntil(sendSignups);
});

self.addEventListener('fetch', e => {
  var url = e.request;

  e.respondWith(caches.match(e.request).then(function(response){
    return response || fetch(e.request);
  }));
});




//     store.signups('readonly').then(function(signups) {
//       return signups.getAll();
//     }).then(function(signups){
//       return Promise.all(signups.map(function(signup){
//         return fetch('/signups', {
//           method: 'POST',
//           body: JSON.stringify(signup),
//           headers: {
//             'Accept': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'Content-Type': 'application/json'
//           }
//         }).then(function(response) {
//           return response.json();
//         }).then(function(data){
//           if(data.result === 'success') {
//             return store.signups('readwrite').then(function(signups){
//               return signups.delete(signup.email);
//             });
//           }
//         });
//       }))
//     })
//   );
// });

// self.addEventListener('activate', e => {
//   const dbName = 'amigos_signup_db';
//   const request = indexedDB.open(dbName, 1);
//
//   request.onupgradeneeded = e => {
//     db = e.target.result;
//     db.createObjectStore("signups", {keyPath: "email"});
//   }
// });
//
// self.addEventListener('fetch', e => {
//   var url = e.request;
//
//   e.respondWith(caches.match(e.request).then(function(response){
//     return response || fetch(e.request);
//   }));
// });
