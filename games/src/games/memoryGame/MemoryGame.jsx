import { useState, useEffect } from "react"

export default function MemoryGame({ onComplete }) {
  const allCards = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍"]
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])

  // Shuffle and initialize deck
  useEffect(() => {
    const shuffled = [...allCards, ...allCards]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }))
    setCards(shuffled)
  }, [])

  // Handle flip logic
  function handleFlip(id) {
    if (flipped.includes(id) || matched.includes(id)) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(i => cards[i])
      if (first.emoji === second.emoji) {
        // Match found
        setMatched([...matched, first.id, second.id])
        setFlipped([])
      } else {
        // Flip back after short delay
        setTimeout(() => setFlipped([]), 800)
      }
    }
  }

  // When all pairs are matched
  useEffect(() => {
  if (matched.length === cards.length && cards.length > 0) {
    const t = setTimeout(() => onComplete?.(), 800)
    return () => clearTimeout(t)
  }
}, [matched, cards])


  return (
    <div className="centered">
      <h2>Memory Match</h2>
      <p>Find all the pairs!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 60px)",
          gap: "10px",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        {cards.map((card) => {
          const isFlipped =
            flipped.includes(card.id) || matched.includes(card.id)
          return (
            <button
              key={card.id}
              onClick={() => handleFlip(card.id)}
              style={{
                width: 60,
                height: 60,
                fontSize: 24,
                borderRadius: 10,
                border: "2px solid #999",
                backgroundColor: isFlipped ? "#fef08a" : "#e5e7eb",
                transition: "background-color 0.3s ease",
              }}
            >
              {isFlipped ? card.emoji : "?"}
            </button>
          )
        })}
      </div>

      <p style={{ marginTop: 8 }}>
        {matched.length / 2} / {cards.length / 2} pairs matched
      </p>
    </div>
  )
}
