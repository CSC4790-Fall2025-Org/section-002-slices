import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import { auth, db } from "../scripts/firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

import '../index.css';
import './BottomNav.css';

export default function BottomNav() {
  const [user, setUser] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => {
      setUser(u || null);
      if (!u) setImgUrl(null);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const ref = doc(db, "UserAccounts", user.uid);
    const unsub = onSnapshot(ref, snap => {
      if (snap.exists()) {
        const data = snap.data();
        setImgUrl(data.ProfilePic || null);
      }
    });
    return () => unsub();
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
            src={user && imgUrl ? imgUrl : "../assets/icon.png"}
            alt="Profile"
            className={`nav-icon profile-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>
    </nav>
  );
}
