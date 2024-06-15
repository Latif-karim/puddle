// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDSTO_JtNC76fyjNMvf2cki3R-SQO4V6o",
  authDomain: "bizlinken-2222.firebaseapp.com",
  projectId: "bizlinken-2222",
  storageBucket: "bizlinken-2222.appspot.com",
  messagingSenderId: "818595523304",
  appId: "1:818595523304:web:85d466f629bbc84353f75d",
  measurementId: "G-3MZDCLPQ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)