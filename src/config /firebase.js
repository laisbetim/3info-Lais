// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdg38geWsJUMLWmTalV3MvKTu1oZP6Vtc",
  authDomain: "info-lais.firebaseapp.com",
  projectId: "info-lais",
  storageBucket: "info-lais.appspot.com",
  messagingSenderId: "924148686426",
  appId: "1:924148686426:web:8daccda811f9c6737e8263",
  measurementId: "G-51DL5MBLCB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)