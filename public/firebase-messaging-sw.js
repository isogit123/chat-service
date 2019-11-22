importScripts('https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.4.0/firebase-messaging.js');

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

const messaging = firebase.messaging();