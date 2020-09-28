import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIa7oyjE6YX9OeLTyIJ0OP6Vovm8rZnDI",
  authDomain: "clone-a14c4.firebaseapp.com",
  databaseURL: "https://clone-a14c4.firebaseio.com",
  projectId: "clone-a14c4",
  storageBucket: "clone-a14c4.appspot.com",
  messagingSenderId: "663217084457",
  appId: "1:663217084457:web:9f49f2bbcb8f9d153d2438",
  measurementId: "G-2MT4D7F69Y"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };