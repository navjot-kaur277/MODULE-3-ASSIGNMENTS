// Firebase init — paste your config values below
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAKkfX2U9UnegUGy4Ewg3rbM4QBLW9KFqQ",
  authDomain: "ai-time-tracker-15893.firebaseapp.com",
  projectId: "ai-time-tracker-15893",
  storageBucket: "ai-time-tracker-15893.firebasestorage.app",
  messagingSenderId: "680853840222",
  appId: "1:680853840222:web:e4ca4178ea86a121922fcf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
