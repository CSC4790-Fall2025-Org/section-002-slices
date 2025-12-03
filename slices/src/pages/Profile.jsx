import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../scripts/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
  setDoc,
  updateDoc,
  getDoc,
  where,
  getDocs,
  arrayUnion
} from "firebase/firestore";
import "./css/Profile.css";

function generateRandomUsername() {
  const adjectives = ["Hungry", "Sleepy", "Sly", "Brave", "Clever"];
  const animals = ["Owl", "Fox", "Tiger", "Bear", "Wolf"];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const number = Math.floor(1000 + Math.random() * 9000);

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
  const [profilePic, setProfilePic] = useState(null);

  const navigate = useNavigate();

  /* -----------------------------------------------------
     FIXED VIEWPORT HEIGHT: WORKS ON iPhone 15/16 AND SAFARI
     ----------------------------------------------------- */
  useEffect(() => {
    function setVhFromViewport(h) {
      document.documentElement.style.setProperty("--vh", `${h * 0.01}px`);
    }

    function updateVH() {
      const vv = window.visualViewport;
      if (vv && typeof vv.height === "number") {
        setVhFromViewport(vv.height);
      } else {
        setVhFromViewport(window.innerHeight);
      }
    }

    updateVH();

    window.addEventListener("resize", updateVH);
    window.addEventListener("orientationchange", updateVH);

    const vv = window.visualViewport;
    if (vv && vv.addEventListener) vv.addEventListener("resize", updateVH);

    return () => {
      window.removeEventListener("resize", updateVH);
      window.removeEventListener("orientationchange", updateVH);
      if (vv && vv.removeEventListener) vv.removeEventListener("resize", updateVH);
    };
  }, []);

  /* ----------------------------------------------------- */

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      setUser(u || null);

      if (u) {
        const userRef = doc(db, "UserAccounts", u.uid);
        onSnapshot(userRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data();

            if (data.username) setUsername(data.username);
            if (data.Streak !== undefined) setScore(data.Streak);
            if (data.ProfilePic !== undefined) setProfilePic(data.ProfilePic);
            if (data.friends) setFriends(data.friends);
            if (data.highestScore !== undefined) setHighestScore(data.highestScore);

            if (data.Score > data.highestScore) {
              setHighestScore(data.Score);
              setDoc(
                doc(db, "UserAccounts", u.uid),
                { highestScore: data.Score },
                { merge: true }
              );
            }
          }
        });
      } else {
        setUsername(generateRandomUsername);
        setScore(0);
      }
    });

    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTomorrow = new Date(startOfToday);
    startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

    const q = query(
      collection(db, "UserAccounts"),
      where("lastPlayed", ">=", startOfToday),
      where("lastPlayed", "<", startOfTomorrow),
      orderBy("Score", "desc")
    );

    const unsubscribeLeaderboard = onSnapshot(q, (snap) => {
      setLeaderboard(
        snap.docs.map((d, i) => ({
          rank: i + 1,
          username: d.data().username,
          score: d.data().Score,
          ProfilePic: d.data().ProfilePic ? d.data().ProfilePic : null
        }))
      );
    });

    return () => {
      unsubscribeAuth();
      unsubscribeLeaderboard();
    };
  }, []);

  useEffect(() => {
    console.log(username);
    console.log(profilePic);
  }, [username]);

  async function handleAddFriend(emails) {
    if (!user) return;
    try {
      const data = collection(db, "UserAccounts");
      const q = query(data, where("email", "==", emails));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError("User's email not found.");
        return;
      }

      const email = querySnapshot.docs[0].data().email;
      setAddFriend(false);

      await updateDoc(doc(db, "UserAccounts", user.uid), {
        friends: arrayUnion(email)
      });
      setFriendAdded("Friend added!");
      setAddFriend(true);
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  }

  async function showAllLeaderboard() {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTomorrow = new Date(startOfToday);
    startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

    const q = query(
      collection(db, "UserAccounts"),
      where("lastPlayed", ">=", startOfToday),
      where("lastPlayed", "<", startOfTomorrow),
      orderBy("Score", "desc")
    );
    const querySnapshot = await getDocs(q);

    const fullLeaderboard = querySnapshot.docs.map((d, i) => ({
      rank: i + 1,
      username: d.data().username,
      score: d.data().Score,
      ProfilePic: d.data().ProfilePic ? d.data().ProfilePic : null
    }));

    setLeaderboard(fullLeaderboard);
    setFiltered(false);
  }

  async function filterLeaderboard() {
    if (!user) return;
    const ref = doc(db, "UserAccounts", user.uid);
    const snap = await getDoc(ref);
    const friendslist = snap.data().friends || [];
    friendslist.push(snap.data().email);

    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTomorrow = new Date(startOfToday);
    startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

    const filtered = query(
      collection(db, "UserAccounts"),
      where("lastPlayed", ">=", startOfToday),
      where("lastPlayed", "<", startOfTomorrow),
      where("email", "in", friendslist),
      orderBy("Score", "desc")
    );

    const querySnapshot = await getDocs(filtered);

    const filteredleaderboard = querySnapshot.docs.map((d, i) => ({
      rank: i + 1,
      username: d.data().username,
      score: d.data().Score,
      ProfilePic: d.data().ProfilePic ? d.data().ProfilePic : null
    }));

    setLeaderboard(filteredleaderboard);
    setFiltered(true);
  }

  function handleAuthClick() {
    if (user) signOut(auth);
    else navigate("/auth?redirect=/profile");
  }

  async function AllTimeScores() {
    const q = query(collection(db, "UserAccounts"), orderBy("highestScore", "desc"));
    const querySnapshot = await getDocs(q);

    const fullLeaderboard = querySnapshot.docs.map((d, i) => ({
      rank: i + 1,
      username: d.data().username,
      score: d.data().highestScore,
      ProfilePic: d.data().ProfilePic ? d.data().ProfilePic : null
    }));

    setLeaderboard(fullLeaderboard);
    setFiltered(true);
  }

  return (
    <main className="phone phone--white profile-screen">
      <section className="profile-card">
        <div className="profile-avatar">
          {user ? (
          <Link to="/ProfilePic">
            <img src={profilePic ? profilePic : "assets/icon.png"} alt="User avatar" />
          </Link>
          ) : (
            <img src="assets/icon.png" alt="Default avatar" />
          )}
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
          {highestScore > 0 ? (
          <span style={{ fontWeight: "bold" }}>High Score: {highestScore}</span>
        ) : null}
        <span style={{ fontWeight: "bold" }}>Daily Leaderboard:</span>

      </section>
          
      <div className="profile-scroll">


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
                {entry.rank}. {entry.username} — {entry.score} —
                <img
                  src={entry.ProfilePic != null ? entry.ProfilePic : "assets/icon.png"}
                  alt="Gamer icon"
                  style={{ width: "26px", height: "26px" }}
                />
              </div>
            ))}
          </div>
        </div>
   
        {addfriend ? (
          <button
            className="friend-button"
            onClick={() => {
              setAddFriend(false);
              setError("");
            }}
          >
            Add Friend
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Friend's Email"
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
            />
            <button
              onClick={() => {
                setAddFriend(true);
                handleAddFriend(friendEmail);
              }}
            >
              Add
            </button>
          </>
        )}

        {filtered ? (
          <button className="sort-button" onClick={showAllLeaderboard}>
            Show All
          </button>
        ) : (
          <>
            <button className="sort-button" onClick={filterLeaderboard}>
              Sort by Friends
            </button>
            <button className="sort-button" onClick={AllTimeScores}>
              All-Time Scores
            </button>
          </>
        )}
         </div>
    </main>
  );
}
