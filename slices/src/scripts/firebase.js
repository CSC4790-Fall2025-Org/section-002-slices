// Correct Firebase setup for React (npm version)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optional: only use Analytics if you actually need it and you're in a browser
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwjXplywlpw1luEOKLTx4MlEMp8o-B2Qw",
  authDomain: "senior-project-game-a4f10.firebaseapp.com",
  projectId: "senior-project-game-a4f10",
  storageBucket: "senior-project-game-a4f10.firebasestorage.app",
  messagingSenderId: "978389541590",
  appId: "1:978389541590:web:2f1619498ac7e02c6b1f77",
  measurementId: "G-LMP5ZZ0K3Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export only what you actually use
export { app, auth, db };
