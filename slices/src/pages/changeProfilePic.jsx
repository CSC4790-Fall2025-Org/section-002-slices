import { useNavigate } from "react-router-dom"
import { auth, db } from "../scripts/firebase.js"
import { doc, updateDoc } from "firebase/firestore"
import "./css/changeProfilePic.css"

const imageNames = [
  "gamer.png",
  "icon.png",
  "logo.png",
  "gamergirl.png",
  "bunny.png",
  "giraff.png",
  "zebra.png",
  "lion.png",
]

async function updateProfilePic(path, navigate) {
  const user = auth.currentUser
  if (!user) {
    navigate("/profile")
    return
  }
  try {
    const ref = doc(db, "UserAccounts", user.uid)
    await updateDoc(ref, { ProfilePic: path })
    navigate("/profile")
  } catch (err) {
    console.error(err)
  }
}

export default function ClickablePngGallery() {
  const navigate = useNavigate()

  const handleClick = name => {
    const path = `/assets/${name}`
    updateProfilePic(path, navigate)
  }

  return (
    <div className="gallery-grid">
      {imageNames.map(name => (
        <button
          key={name}
          className="gallery-item"
          onClick={() => handleClick(name)}
        >
          <img
            src={`/assets/${name}`}
            alt={name}
            className="gallery-img"
          />
        </button>
      ))}
    </div>
  )
}
