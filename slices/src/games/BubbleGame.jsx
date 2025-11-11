import React, { useEffect, useState } from "react"
import "./css/BubbleGame.css"

export default function BubbleGame({ onComplete }) {
  const count = 5
  const [bubbles, setBubbles] = useState([])
  const [expected, setExpected] = useState(1)
  const [score, setScore] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())

  useEffect(() => {
    generateBubbles()
  }, [])

  function generateBubbles() {
    const newBubbles = []
    const minDistance = 50
    const stageWidth = 320
    const stageHeight = 320
    const bubbleSize = 48

    function isFarEnough(x, y) {
      return newBubbles.every(b => {
        const dx = x - b.x
        const dy = y - b.y
        return Math.sqrt(dx * dx + dy * dy) >= minDistance
      })
    }

    for (let i = 0; i < count; i++) {
      let x, y, attempts = 0
      do {
        x = Math.random() * (stageWidth - bubbleSize)
        y = Math.random() * (stageHeight - bubbleSize)
        attempts++
        if (attempts > 100) break
      } while (!isFarEnough(x, y))
      newBubbles.push({ id: i + 1, x, y, flash: false })
    }

    setBubbles(newBubbles)
    setExpected(1)
    setStartTime(Date.now())
  }

  function handleTap(id) {
    if (id === expected) {
      setScore(prev => prev + 1)
      setBubbles(prev => prev.filter(b => b.id !== id))

      if (id === count) {
        const elapsed = Date.now() - startTime
        const bonus = Math.max(0, 5000 - elapsed) / 1000
        const finalScore = score + 1 + Math.floor(bonus)
        setScore(finalScore)
        onComplete?.({ score: finalScore })
      } else {
        setExpected(prev => prev + 1)
      }
    } else {
      setScore(prev => prev - 1)
      setBubbles(prev =>
        prev.map(b => (b.id === id ? { ...b, flash: true } : b))
      )
      setTimeout(() => {
        setBubbles(prev =>
          prev.map(b => (b.id === id ? { ...b, flash: false } : b))
        )
      }, 300)
    }
  }

  return (
    <div className="bubblegame-container">
      <h2>Tap the Numbers in Order</h2>

      <div className="stage">
        {bubbles.map(b => (
          <div
            key={b.id}
            className={`bubble ${b.flash ? "flash" : ""}`}
            style={{ left: b.x, top: b.y }}
            onClick={() => handleTap(b.id)}
          >
            {b.id}
          </div>
        ))}
      </div>
    </div>
  )
}
