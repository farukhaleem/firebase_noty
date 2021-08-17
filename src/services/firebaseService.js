import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUZmVWu6Jp-qqdKoNVfS7BBpISnR3ooFo",
    authDomain: "notify-f43a6.firebaseapp.com",
    projectId: "notify-f43a6",
    storageBucket: "notify-f43a6.appspot.com",
    messagingSenderId: "314133857050",
    appId: "1:314133857050:web:fbc95aeeccaebde7da62a3"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

let configureNotification = () => {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission === 'granted'){
            messaging.getToken().then((currentToken) => {
                if(currentToken){
                    console.log(currentToken);
                }else{
                    console.log('No Instance ID token available.')
                }
            }).catch((err) =>{
                console.log('An error occured', err);
            });
        }else{
            
        }
    })
}

export default configureNotification;