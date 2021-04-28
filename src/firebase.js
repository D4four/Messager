import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd6tIYMdhMBmswkK3xkZXcG__dKhrwMBM",
    authDomain: "mess-proj-71c76.firebaseapp.com",
    projectId: "mess-proj-71c76",
    storageBucket: "mess-proj-71c76.appspot.com",
    messagingSenderId: "617578170004",
    appId: "1:617578170004:web:9efac3c5ca5f99e9db9681",
    measurementId: "G-7HD5C9NRGW"
  })

  const db = firebaseApp.firestore()

  export default db