// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmiB02-NAB1Qi4Z2SiuWMpVAAMYk9t3N4",
  authDomain: "casinosaffiliatesdb.firebaseapp.com",
  projectId: "casinosaffiliatesdb",
  storageBucket: "casinosaffiliatesdb.firebasestorage.app",
  messagingSenderId: "726714806315",
  appId: "1:726714806315:web:815e13b157d3efadddba6e",
  measurementId: "G-F5P1RDEQSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);