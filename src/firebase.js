import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP6oCz7iaXA6SdSp4xX9WuraCbuFtU_No",
  authDomain: "clone-fcd72.firebaseapp.com",
  databaseURL: "https://clone-fcd72-default-rtdb.firebaseio.com",
  projectId: "clone-fcd72",
  storageBucket: "clone-fcd72.appspot.com",
  messagingSenderId: "719643660835",
  appId: "1:719643660835:web:098ad3ce925e03ad205796",
  measurementId: "G-N6Y01H7KH5"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth,}
