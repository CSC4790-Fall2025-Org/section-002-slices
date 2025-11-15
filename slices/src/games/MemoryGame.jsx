import { useEffect, useState } from "react"
import "./css/DifferentEmoji.css"

export default function DifferentEmoji({ onComplete }) {
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
  const [canTap, setCanTap] = useState(false)

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
    setCanTap(false)

    setTimeout(() => setCanTap(true), 800)
  }

  function handleTap(index) {
    if (!canTap || solved || flashIndex !== null) return

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
    <div className="different-emoji-container">
      <h2>Find the Different Emoji</h2>

      <div className="stage">
        {grid.map((emoji, i) => {
          const className = [
            "cell",
            flashIndex === i ? "flash" : "",
            solved && i === oddIndex ? "success" : ""
          ].filter(Boolean).join(" ")
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
