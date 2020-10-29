importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIPcJOREkjL1H5Cxw_I5vIM2ePLy8Q9p4",
    authDomain: "i2talk.firebaseapp.com",
    databaseURL: "https://i2talk.firebaseio.com",
    projectId: "i2talk",
    storageBucket: "i2talk.appspot.com",
    messagingSenderId: "964071356352",
    appId: "1:964071356352:web:25f8b5368438bb0d493a25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function(){
    console.log("Have permission")
    return messaging.getToken();
  }).then(function(token) {
    console.log(token)
  })
  .catch(function(err) {
    console.log("Error Occurred")
  })


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: './assets/logo.svg'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END on_background_message]
