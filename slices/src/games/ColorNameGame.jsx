import { useState, useEffect } from "react"
import "./css/ColorNameGame.css"

const COLORS = [
  "#b12727", // red
  "#1976d2", // blue
  "#3d8e41", // green
  "#f8810b", // orange
  "#8a1fb8", // purple
  "#fbc02d"  // yellow (muted)
]
const WORDS = ["RED", "BLUE", "GREEN", "ORANGE", "PURPLE", "YELLOW"]

export default function ColorNameGame({ onComplete }) {
  const [card, setCard] = useState(null)
  const [modeWord, setModeWord] = useState(() => Math.random() < 0.5)
  const [answers, setAnswers] = useState([])
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
    setAnswers([...WORDS])
    setLoading(false)
  }

  useEffect(() => {
    newRound()
  }, [])

  function handleAnswer(answer) {
    if (!card) return
    const correctValue = modeWord ? WORDS[card.wordIdx] : WORDS[card.colorIdx]
    const correct = answer === correctValue
    setSelected(answer)
    setIsCorrect(correct)

    if (correct) {
      setScore(s => {
        const newScore = s + 1
        setTimeout(() => onComplete?.({ correct: true, score: newScore }), 600)
        return newScore
      })
    } else {
      setAnswers(prev => prev.filter(a => a !== answer))
      setSelected(null)
    }
  }

  if (loading || !card) return <div>Loading...</div>

  return (
    <div className="color-game">
      <h2>Color Name Game</h2>
      <p>Choose based on the instruction shown.</p>
      <p>{modeWord ? "Tap the WORD" : "Tap the COLOR"}</p>

      <div
        className="color-word"
        style={{ color: COLORS[card.colorIdx] }}
      >
        {WORDS[card.wordIdx]}
      </div>

      <div className="answer-grid">
        {answers.map(ans => {
          const display = modeWord ? ans : ans.toLowerCase()
          const isSelected = selected === ans
          const correctClass = isSelected
            ? isCorrect
              ? "correct"
              : "incorrect"
            : ""
          return (
            <button
              key={ans}
              onClick={() => handleAnswer(ans)}
              disabled={isCorrect}
              className={`answer-btn ${correctClass}`}
            >
              {display}
            </button>
          )
        })}
      </div>

      {isCorrect !== null && (
        <div className="feedback">
          <h3>{isCorrect ? "Correct!" : "Incorrect! Try again."}</h3>
        </div>
      )}
    </div>
  )
}
