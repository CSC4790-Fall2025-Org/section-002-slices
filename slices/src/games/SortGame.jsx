import React, { useState, useEffect } from "react"
import "./css/SortGame.css"

const SET = {
  leftLabel: "Fruit",
  rightLabel: "Vegetable",
  items: [
    { label: "Apple", side: "left" },
    { label: "Carrot", side: "right" },
    { label: "Banana", side: "left" },
    { label: "Broccoli", side: "right" },
    { label: "Pear", side: "left" },
    { label: "Avocado", side: "left" }, 
    { label: "Spinach", side: "right" },
    { label: "Grapes", side: "left" },
    { label: "Lettuce", side: "right" },
    { label: "Mango", side: "left" },
    { label: "Pepper", side: "right" },
    { label: "Orange", side: "left" },
    { label: "Tomato", side: "left" },
    { label: "Cucumber", side: "right" }, 
  ],
}

export default function SortGame({ onComplete, onSkip }) {
  const [item, setItem] = useState(null)
  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    const randomItem = SET.items[Math.floor(Math.random() * SET.items.length)]
    setItem(randomItem)
  }, [])

  function pick(side) {
    if (!item) return
    const correct = side === item.side
    if (correct) {
      setFeedback("Correct!")
      setTimeout(() => onComplete?.({ correct: true }), 800)
    } else {
      setFeedback("Incorrect")
    }
  }

  return (
    <div className="wrap">
      <h2>Sort the Item</h2>

      <div className="card">{item?.label || "..."}</div>

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
    </div>
  )
}
