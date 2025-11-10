import { useState, useEffect } from "react"
import GameControls from "../components/GameControls.jsx"

const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"]
const WORDS = ["RED", "BLUE", "GREEN", "ORANGE", "PURPLE", "YELLOW"]

export default function ColorNameGame({ onComplete }) {
  const [card, setCard] = useState(null)
  const [modeWord, setModeWord] = useState(() => Math.random() < 0.5)
  const [selected, setSelected] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [loading, setLoading] = useState(true)
  const [score, setScore] = useState(0)

  function newRound() {
    setLoading(true)
    setSelected(null)
    setIsCorrect(null)

    const colorIdx = Math.floor(Math.random() * COLORS.length)
    let wordIdx = Math.floor(Math.random() * WORDS.length)

    if (Math.random() < 0.6) {
      while (wordIdx === colorIdx) wordIdx = Math.floor(Math.random() * WORDS.length)
    } else {
      wordIdx = colorIdx
    }

    setCard({ colorIdx, wordIdx })
    setModeWord(Math.random() < 0.5)
    setLoading(false)
  }

  useEffect(() => {
    newRound()
  }, [])

  function handleAnswer(idx) {
    if (!card) return
    const correctIdx = modeWord ? card.wordIdx : card.colorIdx
    const correct = idx === correctIdx
    setSelected(idx)
    setIsCorrect(correct)

    if (correct) {
      setScore(s => s + 1)
      const t = setTimeout(() => {
        onComplete?.({ correct: true, score: score + 1 })
      }, 600)
      return () => clearTimeout(t)
    } else {
      // remove wrong answer to let them try again
      setTimeout(() => setSelected(null), 300)
    }
  }

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  if (loading || !card) return <div>Loading...</div>

  return (
    <div className="centered">
      <h2>Color Name Game</h2>
      <p>Choose based on the instruction shown.</p>

      <GameControls onSkip={handleSkip} />

      <p>{modeWord ? "Tap the WORD" : "Tap the COLOR"}</p>

      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          letterSpacing: 2,
          color: COLORS[card.colorIdx],
          margin: "12px 0"
        }}
      >
        {WORDS[card.wordIdx]}
      </div>

      <div>
        {WORDS.map((w, idx) => (
          <button
            key={w}
            onClick={() => handleAnswer(idx)}
            disabled={isCorrect}
            style={{
              margin: 4,
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,.2)",
              background:
                selected === idx
                  ? isCorrect
                    ? "#006f16"
                    : "#802020"
                  : "#222",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            {modeWord ? w : w.toLowerCase()}
          </button>
        ))}
      </div>

      {isCorrect !== null && (
        <div style={{ marginTop: 12 }}>
          <h3>{isCorrect ? "Correct!" : "Incorrect! Try again."}</h3>
        </div>
      )}

      <div style={{ marginTop: 8 }}>Score: {score}</div>
    </div>
  )
}
