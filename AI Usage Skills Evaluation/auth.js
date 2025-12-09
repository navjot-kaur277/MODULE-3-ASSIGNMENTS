import { auth, provider } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!email || !password) return alert("Enter email and password.");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (e) {
    alert(e.message);
  }
});

signupBtn.addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (!email || !password) return alert("Enter email and password.");
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created. You can log in now.");
  } catch (e) {
    alert(e.message);
  }
});

googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "dashboard.html";
  } catch (e) {
    alert(e.message);
  }
});

// If already logged in, skip login page
onAuthStateChanged(auth, (user) => {
  if (user && location.pathname.endsWith("index.html")) {
    window.location.href = "dashboard.html";
  }
});
