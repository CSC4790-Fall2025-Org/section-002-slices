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

  useEffect(() => {
    document.body.classList.add("auth-mode");
    return () => document.body.classList.remove("auth-mode");
  }, []);

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
      navigate("../edit-account");
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
  <main className="auth-screen">
    <section className="auth-card">
      <h1 className="auth-title">Sign In / Sign Up</h1>

      {error && <p className="auth-error">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="auth-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="auth-input"
      />

      <button onClick={handleSignIn} className="auth-btn">
        Log In
      </button>

      <button onClick={() => navigate("/ForgotPassword")} className="auth-btn secondary">
        Forgot Password
      </button>

            <button onClick={() => navigate("/profile")} className="auth-btn back-btn">
        Back
      </button>

      <p>Don't have an account? Type an email and password in the above fields and press the button below:</p>
      <button onClick={handleSignUp} className="auth-btn">
        Sign Up
      </button>


    </section>
  </main>
);

}
