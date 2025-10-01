import { useState, useEffect } from "react"
import { getWordWithDefinition, checkGuess } from "./logic.js"

export default function WordGame() {
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")
  const [locked, setLocked] = useState(Array(5).fill(null))
  const [current, setCurrent] = useState(Array(5).fill(null))
  const [result, setResult] = useState("")

  async function fetchWord() {
    setDefinition("Loading...")
    setLocked(Array(5).fill(null))
    setCurrent(Array(5).fill(null))
    setResult("")
    try {
      const { word, definition } = await getWordWithDefinition()
      setWord(word.toLowerCase())
      setDefinition(definition)
    } catch {
      setDefinition("Could not fetch a word")
    }
  }

  useEffect(() => {
    fetchWord()
  }, [])

  function updateLetter(value, index) {
    if (locked[index]) return
    const newCurrent = [...current]
    newCurrent[index] = value.toUpperCase()
    setCurrent(newCurrent)
  }

  function handleCheck() {
    const { newLocked, newCurrent, isCorrect } = checkGuess(word, current, locked)
    setLocked(newLocked)
    setCurrent(newCurrent)
    setResult(isCorrect ? "Correct!" : "Try again")
  }

  function handleReveal() {
    setResult(`The word was: ${word}`)
    setTimeout(() => {
      fetchWord()
    }, 1000) // moves to next word after 2 seconds
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Word-Definition Match</h2>
      <p>{definition}</p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {locked.map((l, i) => (
          <input
            key={i}
            maxLength={1}
            value={l || current[i] || ""}
            onChange={(e) => updateLetter(e.target.value, i)}
            style={{
              width: 50,
              fontSize: 20,
              textAlign: "center",
              border: "1px solid #aaa",
              borderRadius: 8,
              backgroundColor: l ? "#a7f3d0" : "white",
              borderColor: l ? "#10b981" : "#aaa",
              color: "black",
            }}
          />
        ))}
      </div>

      <button onClick={handleCheck} style={{ marginRight: 8 }}>
        Check
      </button>
      <button onClick={handleReveal} style={{ marginRight: 8 }}>
        Reveal
      </button>
      <button onClick={fetchWord}>Next Word</button>

      {result && <h3>{result}</h3>}
    </div>
  )
}
