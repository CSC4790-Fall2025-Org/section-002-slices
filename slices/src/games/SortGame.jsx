import React, { useState, useMemo, useEffect } from "react"
import GameControls from "../components/GameControls.jsx"
import "./css//SortGame.css"

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
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [pair, setPair] = useState([])

  const MAX_ROUNDS = 3

  useEffect(() => {
    newRound()
  }, [])

  function newRound() {
    const shuffled = [...SET.items].sort(() => Math.random() - 0.5)
    setPair(shuffled.slice(0, 2))
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
      setFeedback("Correct!")
    } else {
      setScore(s => s - 1)
      setStreak(0)
      setFeedback("Incorrect")
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

  return (
    <div className="wrap">
      <h2>Sort the Item</h2>
      <GameControls onSkip={() => onComplete?.({ skipped: true })} />

      <div className="card">{currentItem?.label || "..."}</div>

      <div className="row">
        <button className="zone" onClick={() => pick("left")}>
          {SET.leftLabel}
        </button>
        <button className="zone" onClick={() => pick("right")}>
          {SET.rightLabel}
        </button>
      </div>

      <div className="feedback" aria-live="polite">
        {feedback}
      </div>

      <div className="score">
        Round {round + 1}/{MAX_ROUNDS}
      </div>
    </div>
  )
}
