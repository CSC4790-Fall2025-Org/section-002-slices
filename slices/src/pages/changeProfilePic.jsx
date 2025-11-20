import { useNavigate } from "react-router-dom"
import { auth, db } from "../scripts/firebase.js"
import { doc, updateDoc } from "firebase/firestore"
import "./css/changeProfilePic.css"

const imageNames = [
  "gamer.png",
  "icon.png",
  "logo.png",
  "pencil-icon.png",
  "search.png",
  "gamergirl.png",
  "bunny.png",
  "giraff.png",
  "zebra.png",
]

async function onImageClick(imgPath, navigate) {
  const user = auth.currentUser
  if (user) {
    try {
      const userRef = doc(db, "UserAccounts", user.uid)
      await updateDoc(userRef, { ProfilePic: imgPath })
      alert("Profile picture updated!")
      navigate("/profile")
    } catch (err) {
      console.error("Error updating profile picture:", err)
      alert("Something went wrong.")
    }
  } else {
    alert("No user is signed in.")
  }
}

export default function ClickablePngGallery() {
  const navigate = useNavigate()

  return (
    <div className="gallery-grid">
      {imageNames.map((name, index) => {
        const imgPath = `/assets/${name}`
        return (
          <div
            key={index}
            className="gallery-item"
            onClick={() => onImageClick(imgPath, navigate)}
          >
            <img
              src={imgPath}
              alt={`profile-option-${index}`}
              className="gallery-img"
            />
          </div>
        )
      })}
    </div>
  )
}
