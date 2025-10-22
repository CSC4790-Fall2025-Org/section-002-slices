import { useState, useEffect } from "react"
import WordGame from "./games/WordDef/WordDef.jsx"
import MathGame from "./games/mathGame/MathGame.jsx"
import MemoryGame from "./games/memoryGame/MemoryGame.jsx"
import SportsTrivia from "./games/SportsTrivia/SportsTrivia.jsx"
import "./App.css"

const games = [WordGame, MathGame, MemoryGame, SportsTrivia]

export default function App() {
  const [gameIndex, setGameIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  function nextGame() {
    if (gameOver) return
    let next = gameIndex
    while (next === gameIndex && games.length > 1) {
      next = Math.floor(Math.random() * games.length)
    }
    setGameIndex(next)
  }

  if (gameOver) {
    return (
      <div className="p-4 centered">
        <h1>Time’s up!</h1>
        <p>You completed the challenge.</p>
        <button onClick={() => {
          setTimeLeft(60)
          setGameOver(false)
          setGameIndex(0)
        }}>
          Play Again
        </button>
      </div>
    )
  }

  const CurrentGame = games[gameIndex] || (() => <div>Loading...</div>)

  return (
    <div className="p-4 centered">
      <h1>The Daily Slice</h1>
      <p>Time left: {timeLeft}s</p>
      <CurrentGame key={gameIndex} onComplete={nextGame} />
    </div>
  )
}
