// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwjXplywlpw1luEOKLTx4MlEMp8o-B2Qw",
  authDomain: "senior-project-game-a4f10.firebaseapp.com",
  projectId: "senior-project-game-a4f10",
  storageBucket: "senior-project-game-a4f10.firebasestorage.app",
  messagingSenderId: "978389541590",
  appId: "1:978389541590:web:2f1619498ac7e02c6b1f77",
  measurementId: "G-LMP5ZZ0K3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
