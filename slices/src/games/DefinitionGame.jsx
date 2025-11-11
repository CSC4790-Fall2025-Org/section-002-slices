import { useState, useEffect } from "react"
import "./css/DefinitionGame.css"

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
    for (let i = 0; i < from; i++) if (!locked[i]) return i
    return from
  }

  function handleButtonClick(letter) {
    if (solved) return
    updateLetter(letter, cursorIndex)
    setCursorIndex(nextUnlockedIndex(cursorIndex))
  }

  function handleClear() {
    if (solved) return
    const updated = [...current]
    updated[cursorIndex] = null
    setCurrent(updated)
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

  // QWERTY rows
  const rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split("")
  ]

  return (
    <div className="definition-game">
      <h2>Define the Word:</h2>
      <p className="definition-text">{definition}</p>

      <div className="letter-display">
        {locked.map((l, i) => (
          <div
            key={i}
            className={`letter-box ${l ? "locked" : i === cursorIndex ? "active" : ""}`}
          >
            {l || current[i] || "-"}
          </div>
        ))}
      </div>

      <div className="letter-pad">
        <div className="keyboard-row row-1">
          {rows[0].map(letter => (
            <button
              key={letter}
              className="letter-btn"
              onClick={() => handleButtonClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="keyboard-row row-2">
          {rows[1].map(letter => (
            <button
              key={letter}
              className="letter-btn"
              onClick={() => handleButtonClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="keyboard-row row-3">
          <button className="letter-btn enter" onClick={handleCheck}>
            Enter
          </button>
          {rows[2].map(letter => (
            <button
              key={letter}
              className="letter-btn"
              onClick={() => handleButtonClick(letter)}
            >
              {letter}
            </button>
          ))}
          <button className="letter-btn backspace" onClick={handleClear}>
            ⌫
          </button>
        </div>
      </div>

      {result && <h3 className="result-text">{result}</h3>}
    </div>
  )
}
