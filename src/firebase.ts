// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL8D_vYeyZdABfu_FULTSq0nhLM0M60AE",
  authDomain: "casinos-43417.firebaseapp.com",
  projectId: "casinos-43417",
  storageBucket: "casinos-43417.firebasestorage.app",
  messagingSenderId: "9378875212",
  appId: "1:9378875212:web:2d2713b8bb5e33e61f71e9",
  measurementId: "G-BZKQSKBCPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);