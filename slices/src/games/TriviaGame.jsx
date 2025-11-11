import { useState, useEffect } from "react"
import "./css/TriviaGames.css"

export default function TriviaGame({ category, random = false, onComplete }) {
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [rightAnswer, setRightAnswer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [activeCategory, setActiveCategory] = useState(category)

  async function loadTrivia() {
    setLoading(true)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setRightAnswer(null)

    try {
      // Pick category: either the provided one or a random one if random=true
      const chosen = random
        ? ["sports", "geography"][Math.floor(Math.random() * 2)]
        : category

      setActiveCategory(chosen)

      const text = await fetch(`/${chosen}-trivia.txt`).then(r => r.text())
      const lines = text.trim().split("\n").filter(Boolean)
      const randomLine = lines[Math.floor(Math.random() * lines.length)]
      const parts = randomLine.split(";").map(p => p.trim())
      if (parts.length < 3) throw new Error("Invalid line format")

      const [questionText, correct, ...wrong] = parts
      const allAnswers = [correct, ...wrong].sort(() => Math.random() - 0.5)

      setQuestion(questionText)
      setRightAnswer(correct)
      setAnswers(allAnswers)
    } catch (err) {
      console.warn("Failed to load trivia:", err.message)
      onComplete?.({ autoSkip: true })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTrivia()
  }, [category, random])

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer)
    const correct = answer === rightAnswer
    setIsCorrect(correct)

    if (correct) {
      const t = setTimeout(() => onComplete?.({ correct: true }), 600)
      return () => clearTimeout(t)
    } else {
      setAnswers(prev => prev.filter(a => a !== answer))
      setSelectedAnswer(null)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!question) return null

  const heading =
    activeCategory === "sports" ? "Sports Trivia" : "Geography Trivia"

  return (
    <div className="trivia-container">
      <h2>{heading}</h2>

      <p>{question}</p>

      <div className="trivia-answers">
        {answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleAnswerClick(answer)}
            disabled={isCorrect}
            className={`trivia-btn ${selectedAnswer === answer ? "selected" : ""}`}
          >
            {answer}
          </button>
        ))}
      </div>

      {isCorrect !== null && (
        <div className="trivia-result">
          <h3>{isCorrect ? "Correct!" : "Incorrect! Try again."}</h3>
        </div>
      )}
    </div>
  )
}
