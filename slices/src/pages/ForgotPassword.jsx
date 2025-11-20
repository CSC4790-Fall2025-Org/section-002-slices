import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../scripts/firebase.js";
import { useNavigate } from "react-router-dom";
import "./css/ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("Email sent. Check your spam. Redirecting...");
      setTimeout(() => navigate("/auth"), 4000);
    } catch {
      setMsg("Failed to send reset email.");
    }
  }

  return (
    <main className="fp-screen">
      <button className="fp-back" onClick={() => navigate("/auth")}>
        Back
      </button>

      <div className="fp-card">
        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit} className="fp-form">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <button type="submit">Send Reset Email</button>
        </form>

        {msg && <p className="fp-msg">{msg}</p>}
      </div>
    </main>
  );
}
