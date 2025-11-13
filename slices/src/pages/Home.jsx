import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../scripts/firebase.js";


import "../index.css";
import "./css/Home.css";

async function canPlay() {
  if (!auth.currentUser) return  true;
  const today = new Date()
  console.log("Today's date:", today);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const userDoc = await getDoc(doc(db, "UserAccounts", auth.currentUser.uid));
  if (userDoc.exists()) {
    const data = userDoc.data();
    if (!data.lastPlayed) {
      setDoc(doc(db, "UserAccounts", auth.currentUser.uid), {
      lastPlayed: today,
      Score: 0
    }, { merge: true });
      return true; 

    }
    const lastPlayed = data.lastPlayed.toDate() || "";
    console.log("Last played date:", lastPlayed);
    if (lastPlayed.getFullYear() === year &&
        lastPlayed.getMonth() + 1 === month &&
        lastPlayed.getDate() === day) {
      return false; // Already played today
    }
    if (lastPlayed.getFullYear() === year &&
        lastPlayed.getMonth() + 1 === month &&
        lastPlayed.getDate() === day - 1) {
      // Consecutive day streak
      const newStreak = (data.Streak || 0) + 1;
      console.log("New streak:", newStreak);
      setDoc(doc(db, "UserAccounts", auth.currentUser.uid), {
        Streak: newStreak
      }, { merge: true });
    }
    if (!(lastPlayed.getFullYear() === year &&
        lastPlayed.getMonth() + 1 === month &&
        lastPlayed.getDate() === day - 1)) {
          console.log("Streak reset to 0");
        setDoc(doc(db, "UserAccounts", auth.currentUser.uid), {
        Streak: 0
      }, { merge: true });

        }
    setDoc(doc(db, "UserAccounts", auth.currentUser.uid), {
      lastPlayed: today,
      Score: 0
    }, { merge: true });
    return true; // Can play
  }

}

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="phone start-page" role="main">
      <img src="../assets/logo.png" alt="SLICES logo" className="main-logo" />

      <h1 className="title">
        THE DAILY<br />SLICE
      </h1>

      <button
        className="btn btn--primary"
        type="button"
        onClick={async () => {
          {/*{const allowed = await canPlay();
          console.log("Can play today:", allowed);
          if (allowed) {
            navigate("/game", { state: { from: "daily" } } );
          }
          else {
            alert("You have already played today's game. Come back tomorrow for a new challenge!");
          }
        }}}*/}
          navigate("/daily-loading", { state: { from: "daily" } } )}}
      >
        BEGIN
      </button>
    </main>
  );
}
