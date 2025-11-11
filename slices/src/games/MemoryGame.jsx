import { useEffect, useState } from "react"
import "./css/MemoryGame.css"

export default function MemoryGame({ onComplete }) {
  const allEmojis = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍋", "🍍"]
  const [grid, setGrid] = useState([])
  const [flipped, setFlipped] = useState([])
  const [activeIndices, setActiveIndices] = useState([])

  useEffect(() => {
    const shuffledEmojis = allEmojis.sort(() => Math.random() - 0.5)
    const selected = shuffledEmojis.slice(0, 3)
    const paired = [...selected, ...selected]
    const finalGrid = paired.sort(() => Math.random() - 0.5)
    setGrid(finalGrid)
    
    setFlipped(Array(finalGrid.length).fill(true))
    const hideTimeout = setTimeout(() => {
      setFlipped(Array(finalGrid.length).fill(false))
    }, 500)

    return () => clearTimeout(hideTimeout)
  }, [])

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  function handleCardClick(index) {
    if (flipped[index] || activeIndices.length === 2) return

    const newActive = [...activeIndices, index]
    setActiveIndices(newActive)
    setFlipped(prev => {
      const copy = [...prev]
      copy[index] = true
      return copy
    })

    if (newActive.length === 2) {
      const [first, second] = newActive
      if (grid[first] !== grid[second]) {
        setTimeout(() => {
          setFlipped(prev => {
            const copy = [...prev]
            copy[first] = false
            copy[second] = false
            return copy
          })
          setActiveIndices([])
        }, 250)
      } else {
        setActiveIndices([])
      }
    }

    setTimeout(() => {
      if (flipped.every((v, i) => v || i === index)) {
        onComplete?.({ correct: true })
      }
    }, 100)
  }

  return (
    <div className="memory-container">
      <h2>Memory Match</h2>
      <p>Find all the matching pairs!</p>

      <div className="grid">
        {grid.map((emoji, i) => (
          <div
            key={i}
            className={`cell ${flipped[i] ? "flipped" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            {flipped[i] && emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
