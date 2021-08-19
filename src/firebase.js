import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDOOPxEtDU6fTyQqRFqarYI7laFKRB-dy0",
    authDomain: "chikochats.firebaseapp.com",
    projectId: "chikochats",
    storageBucket: "chikochats.appspot.com",
    messagingSenderId: "665790991183",
    appId: "1:665790991183:web:327813bc2fba3e2083d33a"
  }).auth();
