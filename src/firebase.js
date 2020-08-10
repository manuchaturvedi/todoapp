import firebase from "firebase";
  
  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCGwt5_1YhJXPXezrJgpFipqtEdxaItkuM",
    authDomain: "todo-app-cp-f0fbe.firebaseapp.com",
    databaseURL: "https://todo-app-cp-f0fbe.firebaseio.com",
    projectId: "todo-app-cp-f0fbe",
    storageBucket: "todo-app-cp-f0fbe.appspot.com",
    messagingSenderId: "720451111362",
    appId: "1:720451111362:web:fbeaba4a1a8c1ad8806e5b",
    measurementId: "G-J53K7DZEY8"
  });

  const db= firebaseApp.firestore();

  export default db;