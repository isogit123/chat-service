import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBqAS6z8ihpl1QbMj2YRz2U8CXfH2xqEb0",
    authDomain: "chat-service-8e25d.firebaseapp.com",
    databaseURL: "https://chat-service-8e25d.firebaseio.com",
    projectId: "chat-service-8e25d",
    storageBucket: "chat-service-8e25d.appspot.com",
    messagingSenderId: "994661078642",
    appId: "1:994661078642:web:e777817426e327cb1894eb",
    measurementId: "G-T068YC6MYF"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    messaging.onTokenRefresh(() => {

    });
    
    return token;
  } catch (error) {
    console.error(error);
  }
}

export const initCredentialsUI = (containerId) => {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start(containerId, {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          console.log(authResult);
          return true;
        }
      }
      // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    });

}
initializeFirebase();