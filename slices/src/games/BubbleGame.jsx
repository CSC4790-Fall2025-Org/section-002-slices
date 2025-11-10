import React, { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import GameControls from "../components/GameControls.jsx"

const useStyles = createUseStyles({
  stage: {
    position: "relative",
    width: 320,
    height: 320,
    border: "2px solid #ccc",
    borderRadius: 12,
    overflow: "hidden",
    margin: "0 auto",
    background: "#f9f9f9",
  },
  bubble: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: "50%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  flash: {
    background: "#ef4444 !important",
  },
  info: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 18,
  },
})

export default function BubbleGame({ onComplete }) {
  const css = useStyles()
  const count = 5 // fixed number of bubbles
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
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance >= minDistance
      })
    }

    for (let i = 0; i < count; i++) {
      let x, y
      let attempts = 0
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
    setScore(prev => prev + 1);

    // Remove the tapped bubble
    setBubbles(prev => prev.filter(b => b.id !== id));

    if (id === count) {
      const elapsed = Date.now() - startTime;
      const bonus = Math.max(0, 5000 - elapsed) / 1000;
      const finalScore = score + 1 + Math.floor(bonus);
      setScore(finalScore);
      onComplete?.({ score: finalScore });
    } else {
      setExpected(prev => prev + 1);
    }
  } else {
    setScore(prev => prev - 1);
    setBubbles(prev =>
      prev.map(b => (b.id === id ? { ...b, flash: true } : b))
    );
    setTimeout(() => {
      setBubbles(prev =>
        prev.map(b => (b.id === id ? { ...b, flash: false } : b))
      );
    }, 300);
  }
}

  function handleCheck() {}

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tap the Numbers in Order</h2>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <div className={css.stage}>
        {bubbles.map(b => (
          <div
            key={b.id}
            className={`${css.bubble} ${b.flash ? css.flash : ""}`}
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
