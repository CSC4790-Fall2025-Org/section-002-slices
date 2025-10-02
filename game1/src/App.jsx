import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import WordGame from "./games/WordDef/WordDef.jsx"
import { useGameStore } from "./store.jsx"

export default function App() {
  const score = useGameStore((s) => s.score)

  return (
    <Router>
      <div className="p-4">
        <h1>slices</h1>
        <div style={{ marginBottom: "1rem" }}>Total Score: {score}</div>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/word">Word-Definition Match</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word" element={<WordGame />} />
        </Routes>
      </div>
    </Router>
  )
}
