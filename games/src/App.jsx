import { useState } from "react"
import WordGame from "./games/WordDef/WordDef.jsx"
import MathGame from "./games/mathGame/MathGame.jsx"
import MemoryGame from "./games/memoryGame/MemoryGame.jsx"
import "./App.css"

const games = [WordGame, MathGame, MemoryGame]

export default function App() {
  const [gameIndex, setGameIndex] = useState(0)

  function nextGame() {
    let next = gameIndex
    while (next === gameIndex && games.length > 1) {
      next = Math.floor(Math.random() * games.length)
    }
    setGameIndex(next)
  }

  const CurrentGame = games[gameIndex] || (() => <div>Loading next game...</div>)

  return (
    <div className="p-4 centered">
      <h1>The Daily Slice</h1>
      <CurrentGame key={gameIndex} onComplete={nextGame} />
    </div>
  )
}
