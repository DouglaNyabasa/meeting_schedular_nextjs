

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-schedular-1b7ba.firebaseapp.com",
  projectId: "meeting-schedular-1b7ba",
  storageBucket: "meeting-schedular-1b7ba.firebasestorage.app",
  messagingSenderId: "940668214831",
  appId: "1:940668214831:web:a131bac8676ee884ba70da"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export const db=getFirestore(app);


export { auth }; 



