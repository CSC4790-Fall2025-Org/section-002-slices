import { useEffect, useState } from "react"
import GameControls from "../components/GameControls.jsx"
import "./css/memory.css"

export default function MemoryGame({ onComplete }) {
  const allEmojis = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍋", "🍍"]
  const [grid, setGrid] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    const shuffledEmojis = allEmojis.sort(() => Math.random() - 0.5)
    const selected = shuffledEmojis.slice(0, 3)
    const paired = [...selected, ...selected]
    const finalGrid = paired.sort(() => Math.random() - 0.5)
    setGrid(finalGrid)

    // initially show emojis, then flip after 1 second
    const flipTimeout = setTimeout(() => {
      setFlipped(Array(finalGrid.length).fill(true))
    }, 1000)

    return () => clearTimeout(flipTimeout)
  }, [])

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  function handleCardClick(index) {
    setFlipped(prev => {
      const newFlipped = [...prev]
      newFlipped[index] = false
      return newFlipped
    })
  }

  return (
    <div className="memory-container">
      <h2>Emoji Grid (memory game)</h2>
      <p>Skip for now it will work</p>

      <GameControls onSkip={handleSkip} />

      <div className="grid">
        {grid.map((emoji, i) => (
          <div
            key={i}
            className={`cell ${flipped[i] ? "flipped" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            {!flipped[i] && emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
