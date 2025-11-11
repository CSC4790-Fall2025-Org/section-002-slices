import { useState, useEffect, useRef } from "react"
import "./css/DefinitionGame.css"

export default function DefinitionGame({ onComplete }) {
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")
  const [locked, setLocked] = useState(Array(5).fill(null))
  const [current, setCurrent] = useState(Array(5).fill(null))
  const [result, setResult] = useState("")
  const [cursorIndex, setCursorIndex] = useState(0)
  const [solved, setSolved] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    loadWord()
  }, [])

  async function loadWord() {
    setDefinition("Loading...")
    setLocked(Array(5).fill(null))
    setCurrent(Array(5).fill(null))
    setResult("")
    setCursorIndex(0)
    setSolved(false)

    try {
      const text = await fetch("/words.txt").then(r => r.text())
      const lines = text.trim().split("\n").filter(Boolean)
      const randomLine = lines[Math.floor(Math.random() * lines.length)]
      const [w, def] = randomLine.split(";").map(s => s.trim())

      if (!w || w.length !== 5 || !def) throw new Error("Invalid format")

      setWord(w.toLowerCase())
      setDefinition(def)
      setTimeout(() => containerRef.current?.focus(), 0)
    } catch {
      setDefinition("Failed to load word list")
    }
  }

  function updateLetter(value, index) {
    if (locked[index] || solved) return
    const updated = [...current]
    updated[index] = value.toUpperCase()
    setCurrent(updated)
  }

  function nextUnlockedIndex(from) {
    for (let i = from + 1; i < locked.length; i++) if (!locked[i]) return i
    return from
  }

  function prevUnlockedIndex(from) {
    for (let i = from - 1; i >= 0; i--) if (!locked[i]) return i
    return from
  }

  function handleKeyDown(e) {
    if (solved) return
    const key = e.key.toUpperCase()

    if (/^[A-Z]$/.test(key)) {
      if (!locked[cursorIndex]) {
        updateLetter(key, cursorIndex)
        setCursorIndex(nextUnlockedIndex(cursorIndex))
      }
    } else if (e.key === "Backspace") {
      let index = cursorIndex
      if (current[index]) {
        updateLetter("", index)
      } else {
        const prev = prevUnlockedIndex(index)
        updateLetter("", prev)
        index = prev
      }
      setCursorIndex(index)
    } else if (e.key === "ArrowLeft") {
      setCursorIndex(prevUnlockedIndex(cursorIndex))
    } else if (e.key === "ArrowRight") {
      setCursorIndex(nextUnlockedIndex(cursorIndex))
    } else if (e.key === "Enter") {
      handleCheck()
    }
  }

  function handleClick(i) {
    if (!locked[i] && !solved) setCursorIndex(i)
  }

  function handleCheck() {
    if (solved) return
    const newLocked = [...locked]
    for (let i = 0; i < 5; i++) {
      const guessLetter = current[i]?.toLowerCase()
      if (!locked[i] && guessLetter === word[i]) {
        newLocked[i] = word[i].toUpperCase()
      }
    }

    const isCorrect = newLocked.every((l, i) => l?.toLowerCase() === word[i])
    setLocked(newLocked)
    setResult(isCorrect ? "Correct!" : "")

    if (isCorrect) {
      setSolved(true)
      setTimeout(() => onComplete?.({ correct: true }), 400)
    }
  }

  useEffect(() => {
    if (!solved && current.every(c => /^[A-Z]$/.test(c || ""))) {
      handleCheck()
    }
  }, [current])

  return (
    <div className="definition-game">
      <h2>Define the Word:</h2>

      <p className="definition-text">{definition}</p>

      <div
        id="word-input-container"
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="word-input-container"
      >
        {locked.map((l, i) => (
          <input
            key={i}
            readOnly
            value={l || current[i] || ""}
            onClick={() => handleClick(i)}
            className={`letter-box ${
              i === cursorIndex
                ? "active"
                : l
                ? "locked"
                : ""
            }`}
          />
        ))}
      </div>

      {result && <h3 className="result-text">{result}</h3>}
    </div>
  )
}
