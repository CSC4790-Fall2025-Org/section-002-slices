import { useState, useEffect } from "react"

export default function MemoryGame({ onComplete }) {
  // Use only 5 items to create 5 matching pairs (10 cards total)
  const allCards = ["🍎", "🍌", "🍇", "🍓", "🍒"].slice(0, 5)

  const [cards, setCards] = useState([])       // Full deck of shuffled cards
  const [flipped, setFlipped] = useState([])   // Currently flipped card IDs
  const [matched, setMatched] = useState([])   // IDs of matched cards

  // Shuffle and initialize the deck on first render
  useEffect(() => {
    const shuffled = [...allCards, ...allCards] // Duplicate for pairs
      .sort(() => Math.random() - 0.5)          // Shuffle randomly
      .map((emoji, index) => ({ id: index, emoji })) // Assign unique IDs
    setCards(shuffled)
  }, [])

  // Handle card flip logic
  function handleFlip(id) {
    // Ignore clicks on already flipped or matched cards
    if (flipped.includes(id) || matched.includes(id)) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(i => cards[i])
      if (first.emoji === second.emoji) {
        // Match found
        setMatched([...matched, first.id, second.id])
        setFlipped([])
      } else {
        // No match — flip back after short delay
        setTimeout(() => setFlipped([]), 800)
      }
    }
  }

  // Trigger completion callback when all pairs are matched
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

      {/* Grid of cards */}
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
                display: "flex",              // Center content horizontally
                alignItems: "center",         // Center content vertically
                justifyContent: "center",     // Center content horizontally
              }}
            >
              {isFlipped ? card.emoji : "?"}
            </button>
          )
        })}
      </div>

      {/* Match progress */}
      <p style={{ marginTop: 8 }}>
        {matched.length / 2} / {cards.length / 2} pairs matched
      </p>
    </div>
  )
}
