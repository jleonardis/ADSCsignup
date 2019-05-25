var amigos_db;

window.addEventListener('DOMContentLoaded', () => {

  var request = indexedDB.open('amigos_signups', 1);

  request.onupgradeneeded = e => {
    var db = e.target.result;

    db.createObjectStore('signups', {keyPath: 'email'});
  };

  request.onsuccess = e => {
    amigos_db = e.target.result;
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function(swRegister){
        if('sync' in swRegister){
          var firstName = document.getElementById('first_name');
          var lastName = document.getElementById('last_name');
          var email = document.getElementById('email');
          var submitButton = document.getElementById('submit_button');

          submitButton.addEventListener('click', e => {
            var reg = swRegister;
            var signup = {
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value
            };

            var signups = amigos_db.transaction('signups', 'readwrite').objectStore('signups');
            signups.put(signup);

            firstName.value = '';
            lastName.value = '';
            email.value = '';

            reg.sync.register('signups');

            runThankYouAnimation();
          });
        }
      });
    };
  }
});

window.beforeunload = e => {
  e.preventDefault();
}
