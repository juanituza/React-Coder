
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGIDXnnJ34i3gMxax5VZzhby6liiD23OI",
  authDomain: "react-coder-a500b.firebaseapp.com",
  projectId: "react-coder-a500b",
  storageBucket: "react-coder-a500b.appspot.com",
  messagingSenderId: "880157974422",
  appId: "1:880157974422:web:3c8a784d7bc0f8b97dc7b7",
};


initializeApp(firebaseConfig);

const db = getFirestore ()

export default db