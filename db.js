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
  var db_storage = firebase.storage();
//   var messaging = firebase.messaging();



  
//   messaging.onMessage(function(payload) {
//     alert(payload)
//   })
  
//   messaging.requestPermission().then(function(){
//     console.log("Have permission")
//     return messaging.getToken();
//   }).then(function(token) {
//     // tokens = token
//     console.log(token)
    
//   })
//   .catch(function(err) {
//     console.log("Error Occurred")
//   })

//   messaging.getToken({vapidKey: 'BCKF5-FWvcDCF7zrwMyC9rdbiqcn3Bp9ME4NHXB212Ahb8cGmgth9BlXoqmMFmukwlPxlL0bZ4k2ObrWiMBTB9c'}).then((currentToken) => {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       console.log(currentToken)
// var key = 'AAAA4Hchd8A:APA91bFOIJS5Ckfhp0rVa7_tw_WA7FH9YSNbDBwTegO06Xea6XgQwfC3xfkJpL8J5B6uxzJl6LhVc0UGcVv-poZ2L8Ogp9hKStK44O-FAYggjBiy2BUnG8b1ayNU7T_HWvfIC3XbKIhH';
// var to = currentToken;
// var notification = {
//   'title': 'Rashotech',
//   'body': 'Working',
//   'icon': './assets/logo.png',
//   'click_action': 'http://localhost:5502'
// };

// fetch('https://fcm.googleapis.com/fcm/send', {
//   'method': 'POST',
//   'headers': {
//     'Authorization': 'key=' + key,
//     'Content-Type': 'application/json'
//   },
//   'body': JSON.stringify({
//     'notification': notification,
//     'to': to
//   })
// }).then(function(response) {
//   console.log(response);
// }).catch(function(error) {
//   console.error(error);
// })
//       // updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No registration token available. Request permission to generate one.');
//       // Show permission UI.
//       // updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     setTokenSentToServer(false);
//   });
//   // [END get_token]



//   // Send the registration token your application server, so that it can:
//   // - send messages back to this app
//   // - subscribe/unsubscribe the token from topics
//   function sendTokenToServer(currentToken) {
//     if (!isTokenSentToServer()) {
//       console.log('Sending token to server...');
//       // TODO(developer): Send the current token to your server.
//       setTokenSentToServer(true);
//     } else {
//       console.log('Token already sent to server so won\'t send it again ' +
//           'unless it changes');
//     }

//   }

//   function isTokenSentToServer() {
//     return window.localStorage.getItem('sentToServer') === '1';
//   }

//   function setTokenSentToServer(sent) {
//     window.localStorage.setItem('sentToServer', sent ? '1' : '0');
//   }
