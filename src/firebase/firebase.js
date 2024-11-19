// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-uOVVCrQGpfXkaG8P3CqJ-OkGAG1tenY",
  authDomain: "clases-25d52.firebaseapp.com",
  projectId: "clases-25d52",
  storageBucket: "clases-25d52.firebasestorage.app",
  messagingSenderId: "1091571551833",
  appId: "1:1091571551833:web:5858e0fd6364144c50eb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
