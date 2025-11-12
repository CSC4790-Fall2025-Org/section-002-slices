import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../scripts/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, collection, query, orderBy, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { where, getDocs, arrayUnion } from "firebase/firestore";
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
  const [addfriend, setAddFriend] = useState(true);
  const [friendUsername, setFriendUsername] = useState("");
  const [error, setError] = useState("");
  const [friendAdded, setFriendAdded] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [Friends, setFriends] = useState(null);
  const [filtered, setFiltered] = useState(false);
  const [highestScore, setHighestScore] = useState(0);

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
            console.log(data.highestScore, data.Score)
            if (data.username) setUsername(data.username);
            if (data.Streak !== undefined) setScore(data.Streak);
            if (data.friends) setFriends(data.friends);
            if (data.highestScore !== undefined) setHighestScore(data.highestScore);
            if(data.Score > data.highestScore){
              setHighestScore(data.Score);
               setDoc(doc(db, "UserAccounts", u.uid), {
                highestScore: data.Score,
              }, { merge: true });
            }

              
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
  async function handleAddFriend(emails){
    if (!user) return;
    try {
      const data = collection(db, "UserAccounts");
      const q = query(data, where("email", "==", emails));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) { // The email is not in the database
        setError("User's email not found."); 
        return;
      }

      const email = (querySnapshot.docs[0].data().email);
      setAddFriend(false);

      await updateDoc(doc(db, "UserAccounts", user.uid), {
        friends: arrayUnion(email),
      });
      setFriendAdded("Friend added!");
      setAddFriend(true);
    } catch (err) {
      console.error("Error adding friend:", err);
    }
    }
    
async function showAllLeaderboard() {
  const q = query(collection(db, "UserAccounts"), orderBy("Score", "desc"));
  const querySnapshot = await getDocs(q);
  const fullLeaderboard = querySnapshot.docs.map((d, i) => ({
    rank: i + 1,
    username: d.data().username,
    score: d.data().Score,
  }));
  setLeaderboard(fullLeaderboard);
  setFiltered(false);
}
  
  async function filterLeaderboard() {
    if (!user) return;
    const ref = doc(db, "UserAccounts", user.uid);
    const snap = await getDoc(ref);
    const friendslist = snap.data().friends || [];
    friendslist.push(snap.data().email); // Include self
    console.log("friendslist:", friendslist);

    const filtered = query(collection(db, "UserAccounts"), where("email", "in", friendslist), orderBy("Score", "desc"));
    const querySnapshot = await getDocs(filtered);
    const filteredleaderboard = querySnapshot.docs.map((d, i) => ({
          rank: i + 1,
          username: d.data().username,
          score: d.data().Score,
    }));
    setLeaderboard(filteredleaderboard);
    setFiltered(true);
  }

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
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="profile-streak">
          <span>{score}🔥</span>
        </div>
        <button onClick={handleAuthClick} className="authButton">
          {user ? "Sign Out" : "Sign In"}
        </button>

      </section>

      <div className="profile-scroll">
    {highestScore > 0 ? (
      <p style={{ fontWeight: "bold" }}>High Score: {highestScore}</p>
    ) : null}

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
{addfriend ? (
          <button className = "friend-button" onClick={() => { setAddFriend(false); setError(""); }}>Add Friend</button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Friend's Email"
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
            />
            <button onClick={() => { setAddFriend(true); handleAddFriend(friendEmail); }}>Add</button>

          </>
        )}
 {filtered ?    
   <button style={{ padding: "0.2rem", width: "50%", marginBottom: "1rem" }} onClick={showAllLeaderboard}>Show All</button>
 : 
 <button className = "sort-button" onClick={filterLeaderboard}>Sort by Friends</button>}
      </div>

    </main>
  );
}
