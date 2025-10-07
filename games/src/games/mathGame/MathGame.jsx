import { useState, useEffect } from "react"

export default function MathGame({ onComplete }) {
  const ops = ["+", "-", "*", "/"]

  const generateEquation = () => {
    const apply = (a, op, b) => {
      if (op === "+") return a + b
      if (op === "-") return a - b
    }

    while (true) {
      const x = Math.floor(Math.random() * 10) + 1
      const y = Math.floor(Math.random() * 10) + 1
      const z = Math.floor(Math.random() * 10) + 1
      const op1 = ops[Math.floor(Math.random() * ops.length)]
      const op2 = ops[Math.floor(Math.random() * ops.length)]

      const first = apply(x, op1, y)
      if (first == null) continue
      const result = apply(first, op2, z)
      if (result == null) continue

      // int & non-negative
      if (Number.isInteger(result) && result >= 0) {
        return { expr: `${x} ${op1} ${y} ${op2} ${z}`, answer: result }
      }
    }
  }

  const [equation, setEquation] = useState(null)
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    setEquation(generateEquation())
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!equation) return

    const val = parseInt(input)
    if (val === equation.answer) {
      setResult("Correct!")
      setTimeout(() => onComplete?.(), 500)
    } else {
      setResult("Try again")
    }
  }

  function handleReveal() {
    if (!equation) return
    setResult(`Answer: ${equation.answer}`)
    setTimeout(() => onComplete?.(), 500)
  }

  if (!equation) return <div className="centered">Loading...</div>

  return (
    <div className="centered">
      <h2>Solve the Equation:</h2>
      <p>{equation.expr} = ?</p>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          autoFocus
          style={{
            width: 100,
            fontSize: 20,
            textAlign: "center",
            marginRight: 8,
          }}
        />
        <button type="submit">Check</button>
      </form>

      <div className="button-row" style={{ marginTop: 8 }}>
        <button onClick={handleReveal}>Reveal</button>
      </div>

      {result && <h3>{result}</h3>}
    </div>
  )
}
