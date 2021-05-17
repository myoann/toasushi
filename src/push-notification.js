import firebase from 'firebase';

export const initializeFirebase = () => {

  firebase.initializeApp(
  {
    apiKey: "AIzaSyAOXTFNcagWJj1KpfUotOWRR-2ed7s2QVs",
    authDomain: "toasushitest.firebaseapp.com",
    projectId: "toasushitest",
    storageBucket: "toasushitest.appspot.com",
    messagingSenderId: "559741368691",
    appId: "1:559741368691:web:167146cf328992ad332d06"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    console.log('1')
    const messaging = firebase.messaging();
    console.log('2', messaging)

    return Notification.requestPermission()
    .then(async function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve a Instance ID token for use with FCM.
      // ...
       const token = await messaging.getToken();
      console.log('Your token is:', token);
      return token;
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify. ', err);
      return;
    });
  /*  await messaging.requestPermission();
    console.log('3')
    const token = await messaging.getToken();
    console.log('Your token is:', token); */
    
  } catch (error) {
    console.log("Mince")
    console.error(error);
  }
}