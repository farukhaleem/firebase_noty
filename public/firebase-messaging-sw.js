importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyAUZmVWu6Jp-qqdKoNVfS7BBpISnR3ooFo",
    authDomain: "notify-f43a6.firebaseapp.com",
    projectId: "notify-f43a6",
    storageBucket: "notify-f43a6.appspot.com",
    messagingSenderId: "314133857050",
    appId: "1:314133857050:web:fbc95aeeccaebde7da62a3"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();