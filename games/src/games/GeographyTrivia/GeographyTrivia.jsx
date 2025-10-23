import { useState, useEffect} from "react";
import { fetchTriviaQuestions } from "../SportsTrivia/api.js";

export default function GeographyTrivia({onComplete}){
    const[question , setquestion] = useState(null);
    const[loading , setLoading] = useState(true);
    const[error , setError] = useState(null);
    const[selectedAnswer , setSelectedAnswer] = useState(null);
    const[isCorrect , setIsCorrect] = useState(null);
    const[RightAnswer , setRightAnswer] = useState(null);

    async function fetchQuestion() {
        setLoading(true);
        setError(null);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setRightAnswer(null);

        try{
            const q = await fetchTriviaQuestions("https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple");
            setquestion (q);
            setRightAnswer (q.correctAnswer);
            console.log("Fetched Question:", q);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch question switching games...");
        } finally {
            setLoading(false);
        }
    }
        useEffect(() => {
            fetchQuestion();
        }, []);
        useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => onComplete?.(), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, onComplete]);
          useEffect(() => {
    if (error) {
      const timer = setTimeout(() => onComplete?.(), 1000);
      return () => clearTimeout(timer);
    }
  }, [error, onComplete]);

    function handleAnswerClick(answer) {
        setSelectedAnswer(answer);
        setIsCorrect(answer === question.correctAnswer);
        console.log("Selected Answer:", answer);
    }
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            console.log("could not fetch geography question changing games...");
            return <div>{error}</div>;
        }
        return(
        <div>
            <h2>Geography Trivia</h2>
            <p>{question.Questions}</p>
            <div>
                {question.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            {selectedAnswer && (
                <div>
                    <h3>{isCorrect ? "Correct!" : "Incorrect! the Correct answer was " + RightAnswer}</h3>
                </div>
            )}
        </div>
    );
}

                
                  