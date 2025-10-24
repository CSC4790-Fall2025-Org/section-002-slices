import React, { useState, useMemo, useEffect } from "react"
import { createUseStyles } from "react-jss"
import GameControls from "../components/GameControls.jsx"

const useStyles = createUseStyles({
  wrap: { display: "grid", placeItems: "center", gap: 24, padding: 32 },
  card: {
    fontSize: 36,
    fontWeight: 700,
    padding: "20px 40px",
    border: "2px solid #ccc",
    borderRadius: 12,
  },
  row: { display: "flex", gap: 40, justifyContent: "center" },
  zone: {
    padding: "16px 24px",
    fontSize: 18,
    borderRadius: 10,
    border: "1px solid #999",
    background: "#222",
    color: "#fff",
    cursor: "pointer",
  },
  score: { fontSize: 18 },
  feedback: { fontSize: 16, minHeight: 24 },
})

const SET = {
  leftLabel: "Fruit",
  rightLabel: "Vegetable",
  items: [
    { label: "Apple", side: "left" },
    { label: "Carrot", side: "right" },
    { label: "Banana", side: "left" },
    { label: "Broccoli", side: "right" },
    { label: "Pear", side: "left" },
    { label: "Spinach", side: "right" },
    { label: "Grapes", side: "left" },
    { label: "Lettuce", side: "right" },
    { label: "Mango", side: "left" },
    { label: "Pepper", side: "right" },
  ],
}

export default function SortGame({ onComplete }) {
  const css = useStyles()
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [pair, setPair] = useState([])

  const MAX_ROUNDS = 3 // how many pairs you want before finishing

  useEffect(() => {
    newRound()
  }, [])

  function newRound() {
    const shuffled = [...SET.items].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 2)
    setPair(selected)
  }

  const currentItem = useMemo(() => {
    if (!pair.length) return null
    return pair[Math.floor(Math.random() * pair.length)]
  }, [pair, round])

  function pick(side) {
    if (!currentItem) return
    const correct = side === currentItem.side
    if (correct) {
      const bonus = streak >= 2 ? 2 : 1
      setScore(s => s + bonus)
      setStreak(s => s + 1)
      setFeedback(`Correct (+${bonus})`)
    } else {
      setScore(s => s - 1)
      setStreak(0)
      setFeedback("Incorrect (-1)")
    }

    if (round + 1 >= MAX_ROUNDS) {
      setTimeout(() => onComplete?.({ score }), 800)
    } else {
      setTimeout(() => {
        setRound(r => r + 1)
        setFeedback("")
        newRound()
      }, 600)
    }
  }

  function handleCheck() {}
  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div className={css.wrap}>
      <h2>Sort the Item</h2>
      <p>Fruit or vegetable?</p>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <div className={css.card}>{currentItem?.label || "..."}</div>

      <div className={css.row}>
        <button className={css.zone} onClick={() => pick("left")}>
          {SET.leftLabel}
        </button>
        <button className={css.zone} onClick={() => pick("right")}>
          {SET.rightLabel}
        </button>
      </div>

      <div className={css.feedback} aria-live="polite">
        {feedback}
      </div>

      <div className={css.score}>
        Round {round + 1}/{MAX_ROUNDS}
      </div>
    </div>
  )
}
