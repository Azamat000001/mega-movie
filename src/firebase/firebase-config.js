// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw4mGxuY6tVc3TSXuapQF5dVpQducOj9M",
  authDomain: "movie-app-b1f97.firebaseapp.com",
  projectId: "movie-app-b1f97",
  storageBucket: "movie-app-b1f97.appspot.com",
  messagingSenderId: "575722106510",
  appId: "1:575722106510:web:9a7965dd3b4c56c5c0e3df",
  measurementId: "G-70MR9ZYNZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);