import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCsXwRDNJ_qQWaa6YckUIbzT8TF-Me1wQ",
  authDomain: "bank-3bf58.firebaseapp.com",
  projectId: "bank-3bf58",
  storageBucket: "bank-3bf58.appspot.com",
  messagingSenderId: "1063401591253",
  appId: "1:1063401591253:web:d0572bdbf07de03804ad5c",
};

const app = initializeApp(firebaseConfig);
export let auth = getAuth();
export let db = getFirestore();

export let register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export let login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export let logout = () => signOut(auth);
