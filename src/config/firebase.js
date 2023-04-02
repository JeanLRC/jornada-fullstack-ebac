// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDccLefY5kPG71QNy47tFOmUX2a9L46hGQ",
  authDomain: "tiktok---jornada-fullstack.firebaseapp.com",
  projectId: "tiktok---jornada-fullstack",
  storageBucket: "tiktok---jornada-fullstack.appspot.com",
  messagingSenderId: "478759173581",
  appId: "1:478759173581:web:59abd4d223523554ed9884"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;