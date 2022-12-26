// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkxLHAhx8jWaM506ZBn-lfUJloYewYax0",
  authDomain: "house-marketplace-app-15b58.firebaseapp.com",
  projectId: "house-marketplace-app-15b58",
  storageBucket: "house-marketplace-app-15b58.appspot.com",
  messagingSenderId: "688455654739",
  appId: "1:688455654739:web:89dea0900d64c29f4615a6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
