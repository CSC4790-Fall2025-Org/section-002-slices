import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../scripts/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore";
import "./css/Profile.css";

function generateRandomUsername() {
  const adjectives = ["Hungry", "Sleepy", "Sly", "Brave", "Clever"];
  const animals = ["Owl", "Fox", "Tiger", "Bear", "Wolf"];
  
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const number = Math.floor(1000 + Math.random() * 9000); // 4-digit number

  return `${adj}-${animal}-${number}`;
}

export default function Profile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("HUNGRY-OWL-2908");
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Track auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      setUser(u || null);

      if (u) {
        const userRef = doc(db, "UserAccounts", u.uid);
        onSnapshot(userRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (data.username) setUsername(data.username);
            if (data.Score !== undefined) setScore(data.Score);
          }
        });
      } else {
        setUsername(generateRandomUsername);
        setScore(0);
      }
    });

    // Leaderboard updates
    const q = query(collection(db, "UserAccounts"), orderBy("Score", "desc"));
    const unsubscribeLeaderboard = onSnapshot(q, (snap) => {
      setLeaderboard(
        snap.docs.map((d, i) => ({
          rank: i + 1,
          username: d.data().username,
          score: d.data().Score,
        }))
      );
    });

    return () => {
      unsubscribeAuth();
      unsubscribeLeaderboard();
    };
  }, []);

  function handleAuthClick() {
    if (user) {
      signOut(auth);
    } else {
      navigate("/auth?redirect=/profile");
    }
  }

  return (
    <main className="phone phone--white profile-screen">
      <section className="profile-card">
        <div className="profile-avatar">
          <img src="assets/icon.png" alt="User avatar" />
        </div>
        <h1 className="profile-username">
          <p>{username}</p>
          {user && (
            <Link to="/edit-account">
              <img
                src="assets/pencil-icon.png"
                alt="Edit username"
                style={{ width: "15px", height: "15px" }}
              />
            </Link>
          )}
        </h1>
        <div className="profile-streak">
          <span>{score}🔥</span>
        </div>
        <button onClick={handleAuthClick} className="authButton">
          {user ? "Sign Out" : "Sign In"}
        </button>
      </section>

      <div className="profile-scroll">
   <p style={{ fontWeight: "bold" }}>Daily Leaderboard:</p>
<div className={`leaderboard-container ${!user ? "blurred" : ""}`}>
  {!user && (
    <div className="leaderboard-overlay">
      <img src="../assets/lock-icon.png" alt="lock icon" className="lock" />
      <p>Sign in to view the leaderboard!</p>
    </div>
  )}

  <div className="leaderboard-list">
    {leaderboard.map((entry) => (
      <div className="leaderboard" key={entry.rank}>
        {entry.rank}. {entry.username} — {entry.score}
      </div>
    ))}
  </div>
</div>

      </div>
    </main>
  );
}
