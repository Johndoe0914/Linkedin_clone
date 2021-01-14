import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCY7_h0EKJy4UnOgK0klvP9eJLbeQRa3zg",
    authDomain: "linkedin-clone-d76a6.firebaseapp.com",
    projectId: "linkedin-clone-d76a6",
    storageBucket: "linkedin-clone-d76a6.appspot.com",
    messagingSenderId: "511966735206",
    appId: "1:511966735206:web:a5aa9e277b3e2c96ee36a7",
    measurementId: "G-KZ2Y07EHMB"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};