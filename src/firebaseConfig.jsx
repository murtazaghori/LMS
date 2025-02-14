 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyC17SaKkBNpTxHOlsCgYv43sDOculhtJ-8",
  authDomain: "sttesting-d63d3.firebaseapp.com",
  projectId: "sttesting-d63d3",
  storageBucket: "sttesting-d63d3.firebasestorage.app",
  messagingSenderId: "609028032730",
  appId: "1:609028032730:web:2eab1c6c99ef20fe4b3de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export  {auth,db }