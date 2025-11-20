import { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../scripts/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, collection, query, orderBy, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { where, getDocs, arrayUnion } from "firebase/firestore";
import "./css/changeProfilePic.css";

const images = [
    "../assets/gamer.png",
    "../assets/icon.png",
    "../assets/logo.png",
    "../assets/pencil-icon.png",
    "../assets/search.png",
    "../assets/gamergirl.png",


]
async function onImageClick(img) {

    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, "UserAccounts", user.uid);
        await updateDoc(userRef, {
            ProfilePic: img,
        });
        alert("Profile picture updated!")        
    } else {
        alert("No user is signed in.");
    }
}
export default function ClickablePngGallery() {
    const navigate = useNavigate();
    

return (
<div className="gallery-grid">
{images.map((img, index) => (
<div key={index} className="gallery-item" onClick={() => { onImageClick(img); setTimeout(() => navigate("/profile"), 1000); }}>

<img
src={img}
alt={img}
className="gallery-img"
/>
</div>
))}
</div>
);
}