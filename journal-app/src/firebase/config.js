// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWidEnfCP9o3vaXJEpCuWBTVWYX7p6a6g",
  authDomain: "react-cursos-12c2a.firebaseapp.com",
  projectId: "react-cursos-12c2a",
  storageBucket: "react-cursos-12c2a.firebasestorage.app",
  messagingSenderId: "749730908052",
  appId: "1:749730908052:web:3e6e86792a971d4904f181"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);