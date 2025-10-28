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
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: 8,
    alignItems: "center",
    justifyItems: "center",
    fontSize: 32,
    cursor: "pointer",
  },
  cell: {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: 8,
    transition: "transform 0.2s ease",
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  flash: {
    background: "#ef4444 !important",
    color: "#fff",
  },
  info: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 18,
  },
})

export default function DifferentEmoji({ onComplete }) {
  const css = useStyles()
  const rows = 3
  const cols = 4
  const [grid, setGrid] = useState([])
  const [score, setScore] = useState(0)
  const [flashIndex, setFlashIndex] = useState(null)
  const [round, setRound] = useState(0)

  useEffect(() => {
    generateGrid()
  }, [])

  function generateGrid() {
    const emojis = ["🙂", "😎", "🥶", "🤓", "😬", "😇", "🤠", "🥳"]
    const normal = emojis[Math.floor(Math.random() * emojis.length)]
    let diff
    do {
      diff = emojis[Math.floor(Math.random() * emojis.length)]
    } while (diff === normal)

    const cells = Array(rows * cols).fill(normal)
    const oddIndex = Math.floor(Math.random() * cells.length)
    cells[oddIndex] = diff
    setGrid(cells)
    setFlashIndex(null)
    setRound(prev => prev + 1)
  }

  function handleTap(index) {
    const odd = grid.findIndex(e => e !== grid[0])
    if (index === odd) {
      setScore(prev => prev + 1)
      generateGrid()
    } else {
      setScore(prev => Math.max(0, prev - 1))
      setFlashIndex(index)
      setTimeout(() => setFlashIndex(null), 300)
    }
  }

  function handleCheck() {}

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find the Different Emoji</h2>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <div className={css.stage}>
        {grid.map((emoji, i) => (
          <div
            key={i}
            className={`${css.cell} ${flashIndex === i ? css.flash : ""}`}
            onClick={() => handleTap(i)}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className={css.info}>
        Score: {score} • Round {round}
      </div>
    </div>
  )
}
