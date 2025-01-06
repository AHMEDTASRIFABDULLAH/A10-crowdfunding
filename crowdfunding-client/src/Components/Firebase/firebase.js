// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHXirxBd5ehUfb-baDPtzMVdChzy2FyFo",
  authDomain: "a10crowdfunding.firebaseapp.com",
  projectId: "a10crowdfunding",
  storageBucket: "a10crowdfunding.firebasestorage.app",
  messagingSenderId: "398191780884",
  appId: "1:398191780884:web:a1f14ff82874cc0242f301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
