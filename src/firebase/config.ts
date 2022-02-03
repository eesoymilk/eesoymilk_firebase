import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtuSgGDwvbmpk-y2lNabYuSXRWRvUSht4",
  authDomain: "eesoymilk.firebaseapp.com",
  projectId: "eesoymilk",
  storageBucket: "eesoymilk.appspot.com",
  messagingSenderId: "830841222064",
  appId: "1:830841222064:web:41351bc1ba7af36c3edc75",
  measurementId: "G-8TC7F9FFDD",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export { db };
