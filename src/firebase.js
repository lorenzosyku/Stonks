// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUsg9el5Y3B6hQ6O_ir9Q5CbGoFx5NMuk",
  authDomain: "teztnet-v1.firebaseapp.com",
  projectId: "teztnet-v1",
  storageBucket: "teztnet-v1.appspot.com",
  messagingSenderId: "372920406505",
  appId: "1:372920406505:web:f37446e86a651765177b78",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export {
  auth,
  db,
  app,
  useAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
};
