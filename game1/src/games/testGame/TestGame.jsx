import { useState, useEffect } from "react"

export default function TestGame({ onComplete }) {
  const [count, setCount] = useState(0)


  return (
    <div className="centered">
      <h2>Click Test</h2>
      <p>Click 5 times to finish!</p>
      <h3>{count}</h3>
      <button onClick={() => {
        const newCount = count + 1
        setCount(newCount)
        if (newCount >= 5) onComplete?.()
      }}>
        Click me
      </button>
    </div>
  )
}
