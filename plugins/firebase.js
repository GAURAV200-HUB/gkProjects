import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDZZGfLoQC7KF92TPPHlo21anLFhXnYmgg",
  authDomain: "gkprojects-b38e2.firebaseapp.com",
  projectId: "gkprojects-b38e2",
  storageBucket: "gkprojects-b38e2.appspot.com",
  messagingSenderId: "739770361936",
  appId: "1:739770361936:web:342139269e37b0bdad0955",
  measurementId: "G-0CZFDX6MFY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todos = collection(db, 'todos');

export { app, db, todos }