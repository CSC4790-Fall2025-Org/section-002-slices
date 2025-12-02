import { NavLink } from 'react-router-dom'
import { useState, useEffect, use } from "react";
import { auth, db } from "../scripts/firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

import '../index.css';
import './BottomNav.css';
export default function BottomNav() {
  const[user, setUser] = useState(null);
  const[imgUrl, setImgUrl] = useState(null);

useEffect(() => {
  const unsubscribeAuth = auth.onAuthStateChanged((u) => {
    setUser(u || null);
  });

  return () => {
    unsubscribeAuth();
  };
}, []);

useEffect(() => {
  if (!user) return;

  const userRef = doc(db, "UserAccounts", user.uid);

  const unsubscribeSnap = onSnapshot(userRef, (snap) => {
    if (snap.exists()) {
      const data = snap.data();
      if (data.ProfilePic !== undefined) {
        setImgUrl(data.ProfilePic);
      }
    }
  });

  return () => {
    unsubscribeSnap();
  };
}, [user]);
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <NavLink to="/" end>
        {({ isActive }) => (
          <img
            src="../assets/polygon.png"
            alt="Home"
            className={`nav-icon home-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>

      <NavLink to="/explore">
        {({ isActive }) => (
          <img
            src="../assets/search.png"
            alt="Search"
            className={`nav-icon search-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>

      <NavLink to="/profile">
        {({ isActive }) => (
          <img
            src={imgUrl || "../assets/icon.png"}
            alt="Profile"
            className={`nav-icon profile-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>
    </nav>
  )
}
