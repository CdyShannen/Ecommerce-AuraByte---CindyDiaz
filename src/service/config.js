import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJ0NckrWkLU-DTLHXrglKmJMU2AEj_SvM",
  authDomain: "aurabyte-1cd04.firebaseapp.com",
  projectId: "aurabyte-1cd04",
  storageBucket: "aurabyte-1cd04.appspot.com",
  messagingSenderId: "109566706527",
  appId: "1:109566706527:web:3566b18533ebd1dab66cea",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
