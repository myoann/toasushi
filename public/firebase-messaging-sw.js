importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp(
{
  apiKey: "AIzaSyAOXTFNcagWJj1KpfUotOWRR-2ed7s2QVs",
  authDomain: "toasushitest.firebaseapp.com",
  projectId: "toasushitest",
  storageBucket: "toasushitest.appspot.com",
  messagingSenderId: "559741368691",
  appId: "1:559741368691:web:167146cf328992ad332d06"
});
const messaging = firebase.messaging();