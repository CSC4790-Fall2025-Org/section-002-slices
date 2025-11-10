import { useEffect, useState } from "react"
import GameControls from "../components/GameControls.jsx"
import "./css/memory.css"

export default function MemoryGame({ onComplete }) {
  const allEmojis = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍋", "🍍"]
  const [grid, setGrid] = useState([])

  useEffect(() => {
    const shuffled = allEmojis.sort(() => Math.random() - 0.5).slice(0, 6)
    setGrid(shuffled)
  }, [])

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div className="memory-container">
      <h2>Emoji Grid (memory game)</h2>
      <p>Skip for now it will work</p>

      <GameControls onSkip={handleSkip} />

      <div className="grid">
        {grid.map((emoji, i) => (
          <div key={i} className="cell">
            {emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
