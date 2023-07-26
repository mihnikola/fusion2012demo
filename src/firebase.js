// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMlsTIaZ9MrwCrH_3NdlXDd-KbullnYE",
  authDomain: "project-demo-5eac8.firebaseapp.com",
  projectId: "project-demo-5eac8",
  storageBucket: "project-demo-5eac8.appspot.com",
  messagingSenderId: "926024813675",
  appId: "1:926024813675:web:4e7b4547b294d7d634352e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);