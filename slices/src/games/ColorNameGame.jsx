import React, { useMemo, useState } from "react"
import { createUseStyles } from "react-jss"
import GameControls from "../components/GameControls.jsx"

const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"]
const WORDS = ["RED", "BLUE", "GREEN", "ORANGE", "PURPLE", "YELLOW"]

const useStyles = createUseStyles({
  wrap: { display: "grid", placeItems: "center", gap: 16, padding: 24, textAlign: "center" },
  prompt: { fontSize: 22, opacity: 0.9 },
  word: { fontSize: 48, fontWeight: 800, letterSpacing: 2 },
  row: { display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" },
  btn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.12)",
    background: "#222",
    cursor: "pointer",
    fontSize: 16
  },
  feedback: { fontSize: 18, marginTop: 8, minHeight: 24, transition: "opacity 0.3s ease" }
})

export default function ColorNameGame({ items = 1, onComplete }) {
  const css = useStyles()
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [modeWord, setModeWord] = useState(() => Math.random() < 0.5)

  const card = useMemo(() => {
    const colorIdx = Math.floor(Math.random() * COLORS.length)
    let wordIdx = Math.floor(Math.random() * WORDS.length)
    if (Math.random() < 0.6) {
      while (wordIdx === colorIdx) wordIdx = Math.floor(Math.random() * WORDS.length)
    } else {
      wordIdx = colorIdx
    }
    return { colorIdx, wordIdx }
  }, [i])

  function pick(ansIdx) {
    const correctIdx = modeWord ? card.wordIdx : card.colorIdx
    const isCorrect = ansIdx === correctIdx
    setFeedback(isCorrect ? "Correct" : "Incorrect")
    if (isCorrect) setScore(s => s + 1)
    setTimeout(() => setFeedback(""), 600)
    if (i + 1 >= items) onComplete?.({ score })
    else {
      setI(n => n + 1)
      if ((i + 1) % 3 === 0) setModeWord(m => !m)
    }
  }

  function handleCheck() {
    // "Check" doesn't have a natural action here, so just complete the round
    onComplete?.({ checked: true })
  }

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div className={css.wrap}>
      <h2>Color Name Game</h2>
      <p>Choose based on the instruction shown.</p>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <div className={css.prompt}>
        {modeWord ? "Tap the WORD" : "Tap the COLOR"}
      </div>

      <div className={css.word} style={{ color: COLORS[card.colorIdx] }}>
        {WORDS[card.wordIdx]}
      </div>

      <div className={css.row} role="group" aria-label="Answer choices">
        {WORDS.map((w, idx) => (
          <button className={css.btn} key={w} onClick={() => pick(idx)}>
            {modeWord ? w : w.toLowerCase()}
          </button>
        ))}
      </div>

      <div className={css.feedback} aria-live="polite">{feedback}</div>
      <div>Score: {score}</div>
    </div>
  )
}
