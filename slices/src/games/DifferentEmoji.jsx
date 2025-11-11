import React, { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"

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
    transition: "transform 0.14s ease, background 0.14s ease",
    "&:active": { transform: "scale(0.96)" },
  },
  flash: {
    background: "#ef4444 !important",
    color: "#fff",
  },
  success: {
    background: "#10b981 !important",
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
  const total = rows * cols
  const [grid, setGrid] = useState([])
  const [oddIndex, setOddIndex] = useState(null)
  const [score, setScore] = useState(0)
  const [flashIndex, setFlashIndex] = useState(null)
  const [round, setRound] = useState(1)
  const [solved, setSolved] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())

  useEffect(() => {
    generateGrid()
  }, [])

  function generateGrid() {
    const emojis = ["🙂", "😎", "🥶", "🤓", "😬", "😇", "🤠", "🥳"]
    const normal = emojis[Math.floor(Math.random() * emojis.length)]
    let diff
    do diff = emojis[Math.floor(Math.random() * emojis.length)]
    while (diff === normal)

    const cells = Array(total).fill(normal)
    const oddPos = Math.floor(Math.random() * total)
    cells[oddPos] = diff

    setGrid(cells)
    setOddIndex(oddPos)
    setFlashIndex(null)
    setSolved(false)
    setStartTime(Date.now())
  }

  function handleTap(index) {
    if (solved || flashIndex !== null) return

    if (index === oddIndex) {
      const newScore = score + 1
      setScore(newScore)
      setSolved(true)
      setFlashIndex(index)
      const elapsed = (Date.now() - startTime) / 1000

      setTimeout(() => {
        onComplete?.({ score: newScore, round, elapsed })
      }, 400)
    } else {
      setScore(prev => Math.max(0, prev - 1))
      setFlashIndex(index)
      setTimeout(() => setFlashIndex(null), 300)
    }
  }

  function handleSkip() {
    onComplete?.({ skipped: true })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find the Different Emoji</h2>

      <div className={css.stage}>
        {grid.map((emoji, i) => {
          const className = [
            css.cell,
            flashIndex === i ? css.flash : "",
            solved && i === oddIndex ? css.success : "",
          ].join(" ")
          return (
            <div key={i} className={className} onClick={() => handleTap(i)}>
              {emoji}
            </div>
          )
        })}
      </div>
    </div>
  )
}
