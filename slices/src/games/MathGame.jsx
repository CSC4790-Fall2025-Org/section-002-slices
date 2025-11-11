import { useState, useEffect } from "react"
import GameControls from "../components/GameControls.jsx"

export default function MathGame({ onComplete }) {
  const ops = ["+", "-"]

  const generateEquation = () => {
    const apply = (a, op, b) => (op === "+" ? a + b : a - b)

    while (true) {
      const x = Math.floor(Math.random() * 10) + 1
      const y = Math.floor(Math.random() * 10) + 1
      const z = Math.floor(Math.random() * 10) + 1
      const op1 = ops[Math.floor(Math.random() * ops.length)]
      const op2 = ops[Math.floor(Math.random() * ops.length)]

      const first = apply(x, op1, y)
      const result = apply(first, op2, z)

      if (Number.isInteger(result) && result >= 0)
        return { expr: `${x} ${op1} ${y} ${op2} ${z}`, answer: result }
    }
  }

  const [equation, setEquation] = useState(null)
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    setEquation(generateEquation())
  }, [])

  function handleCheck() {
    if (!equation) return
    const val = parseInt(input)
    if (val === equation.answer) {
      setResult("Correct!")
      setTimeout(() => onComplete?.(), 500)
    } else {
      setResult("Try again")
    }
  }

  function handleSkip() {
    setResult(`Answer: ${equation.answer}`)
    setTimeout(() => onComplete?.({ skipped: true }), 500)
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  if (!equation) return <div className="centered">Loading...</div>
=======
=======
>>>>>>> Stashed changes
  function handleButtonClick(num) {
    const newVal = input + num
    setInput(newVal)
    handleCheck(newVal)
  }

  function handleClear() {
    setInput("")
    setResult("")
  }

  if (!equation) return <div className="math-game">Loading...</div>
>>>>>>> Stashed changes

  return (
    <div className="centered">
      <h2>Math Challenge</h2>
      <p>Solve the equation below.</p>
<<<<<<< Updated upstream
<<<<<<< Updated upstream

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <p>{equation.expr} = ?</p>

      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") handleCheck()
        }}
        autoFocus
        style={{
          width: 100,
          fontSize: 20,
          textAlign: "center",
          marginTop: 12,
          marginBottom: 8,
        }}
      />

<<<<<<< Updated upstream
<<<<<<< Updated upstream
      {result && <h3>{result}</h3>}
=======
=======
>>>>>>> Stashed changes
      <div className="number-pad">
        {[1,2,3,4,5,6,7,8,9,0].map(n => (
          <button key={n} onClick={() => handleButtonClick(n)} className="num-btn">
            {n}
          </button>
        ))}
        <button onClick={handleClear} className="num-btn clear">Clear</button>
      </div>

      {result && (
        <h3 className={result.includes("Correct") ? "correct" : "error"}>
          {result}
        </h3>
      )}
>>>>>>> Stashed changes
    </div>
  )
}
