import { useState, useEffect } from "react";
import { auth, db } from "../scripts/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./css/EditAccount.css";

export default function EditAccount() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async u => {
      if (!u) {
        setUser(null);
        setUsername("");
        setBirthday("");
        return;
      }

      setUser(u);
      try {
        const snap = await getDoc(doc(db, "UserAccounts", u.uid));
        if (snap.exists()) {
          const d = snap.data();
          if (d.username) setUsername(d.username);
          if (d.birthday) setBirthday(d.birthday);
        }
      } catch {}
    });

    return unsub;
  }, []);

  async function handleSignUp() {
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "UserAccounts", user.uid), {
        email: user.email,
        Score: 0,
        highestScore: 0,
        createdAt: new Date()
      });
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDeleteAccount() {
    if (!user) return;
    const c = window.confirm("Are you sure?");
    if (!c) return;

    try {
      await deleteDoc(doc(db, "UserAccounts", user.uid));
      await deleteUser(user);
      handleSignOut();
    } catch {
      setError("Failed to delete account.");
    }
  }

  async function handleSignIn() {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
      setUser(null);
      setUsername("");
      setBirthday("");
    } catch {}
  }

  async function handleConfirm() {
    if (!user) return;
    try {
      await setDoc(
        doc(db, "UserAccounts", user.uid),
        { username, birthday },
        { merge: true }
      );
      navigate("/profile");
    } catch {
      setError("Failed to save changes.");
    }
  }

  return (
    <main className="edit-screen">
      <div className="status-errors">
        <h1>Account Settings</h1>
        <p>{user ? `Signed in as: ${user.email}` : "Not signed in"}</p>
        {error && <p className="error-text">{error}</p>}
      </div>

      {user ? (
        <div className="settingsWrapper">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Birthday (00/00/0000)"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          />

          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleSignOut}>Sign Out</button>
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      ) : (
        <div className="auth-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button onClick={handleSignIn}>Log In</button>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={() => navigate("/ForgotPassword")} className="secondary">
            Forgot Password
          </button>
        </div>
      )}
    </main>
  );
}
