import { useState, useEffect } from "react"
import "./css/math.css"

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

  function handleCheck(val) {
    if (!equation) return
    const parsed = parseInt(val)
    if (parsed === equation.answer) {
      setResult("Correct!")
      setTimeout(() => onComplete?.({ correct: true }), 400)
    } else {
      setResult("")
    }
  }

  function handleSkip() {
    if (!equation) return
    setResult(`Answer: ${equation.answer}`)
    setTimeout(() => onComplete?.({ skipped: true }), 500)
  }

  if (!equation) return <div className="math-game">Loading...</div>

  return (
    <div className="math-game">
      <h2>Math Challenge</h2>
      <p>Solve the equation below.</p>

      <p>{equation.expr} = ?</p>

      <input
        type="number"
        className="math-input"
        value={input}
        onChange={e => {
          const val = e.target.value
          setInput(val)
          handleCheck(val)
        }}
        autoFocus
      />

      {result && (
        <h3 className={result.includes("Correct") ? "correct" : "error"}>
          {result}
        </h3>
      )}
    </div>
  )
}
