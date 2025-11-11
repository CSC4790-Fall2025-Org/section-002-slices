import { useState, useEffect } from "react"

export default function GeographyTrivia({ onComplete }) {
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [rightAnswer, setRightAnswer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  async function loadTrivia() {
    setLoading(true)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setRightAnswer(null)

    try {
      const text = await fetch("/geography-trivia.txt").then(r => r.text())
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
      console.warn("Failed to load geography trivia:", err.message)
      onComplete?.({ autoSkip: true })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTrivia()
  }, [])

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

  return (
    <div className="centered">
      <h2>Geography Trivia</h2>
      <p>Test your knowledge of places and countries.</p>

      <p>{question}</p>

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
                selectedAnswer === answer ? "#006f16" : "#626262ff",
            }}
          >
            {answer}
          </button>
        ))}
      </div>

      {isCorrect !== null && (
        <div style={{ marginTop: 12 }}>
          <h3>{isCorrect ? "Correct!" : "Incorrect! Try again."}</h3>
        </div>
      )}
    </div>
  )
}
