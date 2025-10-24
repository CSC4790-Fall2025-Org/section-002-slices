import { useState, useEffect } from "react"
import { fetchTriviaQuestions } from "../scripts/geo-api.js"
import GameControls from "../components/GameControls.jsx"

export default function GeographyTrivia({ onComplete }) {
  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [rightAnswer, setRightAnswer] = useState(null)

  async function fetchQuestion() {
    setLoading(true)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setRightAnswer(null)

    try {
      const q = await fetchTriviaQuestions()
      if (!q || !q.answers || !q.correctAnswer) throw new Error("Invalid question format")
      setQuestion(q)
      setRightAnswer(q.correctAnswer)
    } catch (err) {
      console.warn("Auto-skipping bad question:", err.message)
      onComplete?.({ autoSkip: true }) // not a user skip
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  useEffect(() => {
    if (selectedAnswer !== null) {
      const t = setTimeout(() => onComplete?.(), 1000)
      return () => clearTimeout(t)
    }
  }, [selectedAnswer, onComplete])

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer)
    setIsCorrect(answer === question.correctAnswer)
  }

  function handleCheck() {
    if (selectedAnswer === null) return
    onComplete?.({ checked: true })
  }

  function handleSkip() {
    onComplete?.({ skipped: true }) // this one triggers penalty
  }

  if (loading) return <div>Loading...</div>
  if (!question) return null

  return (
    <div className="centered">
      <h2>Geography Trivia</h2>
      <p>Test your knowledge of places and countries.</p>

      <GameControls onCheck={handleCheck} onSkip={handleSkip} />

      <p>{question.Questions}</p>

      <div>
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
            style={{
              margin: 4,
              padding: "8px 16px",
              borderRadius: 8,
              background: selectedAnswer === answer ? "#006f16" : "#626262ff",
            }}
          >
            {answer}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div style={{ marginTop: 12 }}>
          <h3>
            {isCorrect
              ? "Correct!"
              : `Incorrect! The correct answer was ${rightAnswer}`}
          </h3>
        </div>
      )}
    </div>
  )
}
