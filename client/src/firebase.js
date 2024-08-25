// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dc4f7.firebaseapp.com",
  projectId: "real-estate-dc4f7",
  storageBucket: "real-estate-dc4f7.appspot.com",
  messagingSenderId: "41095019654",
  appId: "1:41095019654:web:dc1b3c070ebd28b6892507",
  measurementId: "G-CJ7YRMVDJ3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
