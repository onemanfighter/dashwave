// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFW2kCRWMbbnPoe4Fi0eHPb5nRraEXBR4",
  authDomain: "dashboard-amit.firebaseapp.com",
  projectId: "dashboard-amit",
  storageBucket: "dashboard-amit.appspot.com",
  messagingSenderId: "161489879736",
  appId: "1:161489879736:web:1c2454599aaec1cbcdaa4d",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(fireBaseApp);
