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
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
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
          const data = snap.data();
          if (data.username) setUsername(data.username);
          if (data.birthday) setBirthday(data.birthday);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    });

    return unsubscribe;
  }, []);

  async function handleSignUp() {
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "UserAccounts", user.uid), {
        email: user.email,
        Score: 0,
        highestScore: 0,
        createdAt: new Date(),
      });
    } catch (err) {
      setError(err.message);
    }
  }
  async function handleDeleteAccount() {
    if (!user) return;
    const confirm = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, "UserAccounts", user.uid));
      await deleteUser(user);
      handleSignOut();
    } catch (err) {
        console.error("Error deleting account:", err);
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
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }

  async function handleConfirm() {
    if (!user) return;

    try {
      await setDoc(doc(db, "UserAccounts", user.uid), {
        username,
        birthday,
      }, { merge: true });

      navigate("/profile"); // go back to profile page after saving
    } catch (err) {
      console.error("Error saving info:", err);
      setError("Failed to save changes.");
    }
  }
  return (
    <main className="phone phone--white profile-screen">
      <div className="status-errors">
        <h1>Account Settings</h1>
        <p>{user ? `Signed in as: ${user.email}` : "Not signed in"}</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {user ? (
        <div className="settingsWrapper">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Birthday (00/00/0000)"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
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

        </div>
      )}
    </main>
  );
}
