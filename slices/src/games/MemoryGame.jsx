import { useState, useEffect } from "react"
import GameControls from "../components/GameControls.jsx"
import "./css/memory.css"

export default function MemoryGame({ onComplete }) {
  const allCards = ["🍎", "🍌", "🍇"] 

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    const shuffled = [...allCards, ...allCards]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }))

    setCards(shuffled)
    setShowAll(true)

    const timer = setTimeout(() => setShowAll(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  function handleFlip(id) {
    if (showAll) return
    if (flipped.includes(id) || matched.includes(id)) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(i => cards[i])
      if (first.emoji === second.emoji) {
        setMatched(prev => [...prev, first.id, second.id])
        setFlipped([])
      } else {
        setTimeout(() => setFlipped([]), 800)
      }
    }
  }

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      const t = setTimeout(() => onComplete?.({ score: matched.length / 2 }), 800)
      return () => clearTimeout(t)
    }
  }, [matched, cards])

  function handleCheck() {}
  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div className="centered">
      <h2>Memory Match</h2>
      <p>{showAll ? "Memorize the cards..." : "Find all the pairs!"}</p>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <div className="grid">
        {cards.map(card => {
          const isFlipped = showAll || flipped.includes(card.id) || matched.includes(card.id)
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(card.id)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{card.emoji}</div>
              </div>
            </div>
          )
        })}
      </div>

      <p style={{ marginTop: 8 }}>
        {matched.length / 2} / {cards.length / 2} pairs matched
      </p>
    </div>
  )
}
