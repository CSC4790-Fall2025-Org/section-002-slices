import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../scripts/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./css/AuthPage.css";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../scripts/firebase.js";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get("redirect") || "/profile";

   async function handleSignUp() {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "UserAccounts", auth.currentUser.uid), {
        email: auth.currentUser.email,
        highestScore: 0,
        Score: 0,
        createdAt: new Date(),
      });
      navigate('../edit-account');
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSignIn() {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirect);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="auth-page">
      <h2>Log In / Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Log In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={() => navigate("/ForgotPassword")}>Forgot Password</button>
    </main>
  );
}
