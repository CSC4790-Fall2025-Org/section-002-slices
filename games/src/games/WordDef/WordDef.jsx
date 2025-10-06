import { useState, useEffect } from "react"
import { getWordWithDefinition, checkGuess } from "./logic.js"

export default function WordGame({ onComplete }) {
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")
  const [locked, setLocked] = useState(Array(5).fill(null))
  const [current, setCurrent] = useState(Array(5).fill(null))
  const [result, setResult] = useState("")
  const [cursorIndex, setCursorIndex] = useState(0)

  useEffect(() => {
    fetchWord()
  }, [])

  async function fetchWord() {
    setDefinition("Loading...")
    setLocked(Array(5).fill(null))
    setCurrent(Array(5).fill(null))
    setResult("")
    setCursorIndex(0)

    try {
      const { word, definition } = await getWordWithDefinition()
      setWord(word.toLowerCase())
      setDefinition(definition)
    } catch {
      setDefinition("Could not fetch a word")
    }
  }

  function updateLetter(value, index) {
    if (locked[index]) return
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
    if (!locked[i]) setCursorIndex(i)
  }

  function handleCheck() {
    const { newLocked, newCurrent, isCorrect } = checkGuess(word, current, locked)
    setLocked(newLocked)
    setCurrent(newCurrent)
    setResult(isCorrect ? "Correct!" : "Try again")

    if (isCorrect) {
      setTimeout(() => onComplete?.(), 500) 
    } else {
      setCursorIndex(nextUnlockedIndex(-1))
    }
  }

  function handleReveal() {
    setResult(`The word was: ${word}`)
    setTimeout(() => onComplete?.(), 500) 
  }


  return (
    <div className="centered">
      <h2>Define the Word:</h2>
      <p>{definition}</p>

      <div
        id="word-input-container"
        tabIndex={0}
        onKeyDown={handleKeyDown}
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
              borderColor:
                i === cursorIndex ? "#3b82f6" : l ? "#10b981" : "#aaa",
              borderRadius: 8,
              backgroundColor: l ? "#a7f3d0" : "white",
              color: "black",
            }}
          />
        ))}
      </div>

      <div className="button-row">
        <button onClick={handleCheck} style={{ marginRight: 8 }}>
          Check
        </button>
        <button onClick={handleReveal}>Reveal</button>
      </div>

      {result && <h3>{result}</h3>}
    </div>
  )
}
