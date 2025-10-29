import { useState, useEffect } from "react"
import { fetchTriviaQuestions } from "../scripts/geo-api.js"
import GameControls from "../components/GameControls.jsx"

export default function GeographyTrivia({ onComplete }) {
  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [rightAnswer, setRightAnswer] = useState(null)
  const [answers, setAnswers] = useState([])

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
      setAnswers(q.answers)
    } catch (err) {
      console.warn("Auto-skipping bad question:", err.message)
      onComplete?.({ autoSkip: true })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer)
    const correct = answer === question.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      const t = setTimeout(() => onComplete?.({ correct: true }), 600)
      return () => clearTimeout(t)
    } else {
      // remove the wrong answer from available options
      setAnswers(prev => prev.filter(a => a !== answer))
      setSelectedAnswer(null)
    }
  }

  function handleCheck() {
    if (isCorrect) onComplete?.({ checked: true })
  }

  function handleSkip() {
    onComplete?.({ skipped: true })
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
        {answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleAnswerClick(answer)}
            disabled={isCorrect}
            style={{
              margin: 4,
              padding: "8px 16px",
              borderRadius: 8,
              background:
                selectedAnswer === answer
                  ? "#006f16"
                  : "#626262ff",
            }}
          >
            {answer}
          </button>
        ))}
      </div>

      {isCorrect !== null && (
        <div style={{ marginTop: 12 }}>
          <h3>
            {isCorrect
              ? "Correct!"
              : "Incorrect! Try again."}
          </h3>
        </div>
      )}
    </div>
  )
}
