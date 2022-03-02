// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//login
export function login(email, password) {
  return signInWithEmailAndPassword(email, password);
}

//signup
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//logout
export function logout() {
  return signOut(auth);
}

//costum hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
