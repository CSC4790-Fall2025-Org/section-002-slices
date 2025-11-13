import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../scripts/firebase.js";
import { Navigate, useNavigate } from "react-router-dom";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent check your spam!\n Redirecting to login...");
      setTimeout(() => navigate("/auth"), 5000);
    } catch (error) {
      setMessage("Error sending password reset email.");
    }
  };

  return (
    <main className="auth-page">
      <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p>{message}</p>}
     </div>
    </main> 
  );
}