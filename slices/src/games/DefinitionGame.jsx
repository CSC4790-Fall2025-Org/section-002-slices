import { useState, useEffect } from "react"
import GameControls from "../components/GameControls.jsx"

export default function DefinitionGame({ onComplete }) {
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")
  const [locked, setLocked] = useState(Array(5).fill(null))
  const [current, setCurrent] = useState(Array(5).fill(null))
  const [result, setResult] = useState("")
  const [cursorIndex, setCursorIndex] = useState(0)
  const [solved, setSolved] = useState(false)

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
      setTimeout(() => onComplete?.(), 400)
    }
  }

  function handleSkip() {
    setResult(`The word was: ${word}`)
    setTimeout(() => onComplete?.({ skipped: true }), 400)
  }

  // Auto-check only when not solved and all letters are filled
  useEffect(() => {
    if (solved) return
    const allLetters = locked.map((l, i) => l || current[i])
    if (allLetters.every(c => /^[A-Z]$/.test(c))) handleCheck()
  }, [current, locked, solved])

  return (
    <div className="centered">
      <h2>Define the Word:</h2>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <p>{definition}</p>
      <input
        id="mobile-input"
        type="text"
        autoCapitalize="characters"
        autoFocus
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
        }}
        onChange={(e) => {
          const letter = e.target.value.slice(-1).toUpperCase()
          e.target.value = ""
          if (/^[A-Z]$/.test(letter)) {
            updateLetter(letter, cursorIndex)
            setCursorIndex(nextUnlockedIndex(cursorIndex))
          }
        }}
      />

      <div
        id="word-input-container"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => document.getElementById("mobile-input")?.focus()}
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 16,
          outline: "none",
        }}
      >
        {locked.map((l, i) => (
          <input
            key={i}
            readOnly
            value={l || current[i] || ""}
            onClick={() => handleClick(i)}
            style={{
              width: 50,
              fontSize: 20,
              textAlign: "center",
              border: "2px solid",
              borderColor: i === cursorIndex ? "#3b82f6" : l ? "#10b981" : "#aaa",
              borderRadius: 8,
              backgroundColor: l ? "#a7f3d0" : "white",
              color: "black",
            }}
          />
        ))}
      </div>

      {result && <h3>{result}</h3>}
    </div>
  )
}
