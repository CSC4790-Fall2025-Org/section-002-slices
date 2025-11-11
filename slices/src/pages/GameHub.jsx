import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DefinitionGame from "../games/DefinitionGame.jsx";
import MathGame from "../games/MathGame.jsx";
import MemoryGame from "../games/MemoryGame.jsx";
import ColorNameGame from "../games/ColorNameGame.jsx";
import SortGame from "../games/SortGame.jsx";
import SportsTrivia from "../games/SportsTrivia.jsx";
import GeographyTrivia from "../games/GeographyTrivia.jsx";
import BubbleGame from "../games/BubbleGame.jsx";
import DifferentEmoji from "../games/DifferentEmoji.jsx";
import "./css/GameHub.css";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../scripts/firebase.js";

const categoryGames = {
  memory: [MemoryGame],
  math: [MathGame],
  vocabulary: [DefinitionGame, SortGame],
  sports: [SportsTrivia],
  geography: [GeographyTrivia],
  trivia: [SportsTrivia, GeographyTrivia],
  reaction: [BubbleGame, DifferentEmoji, ColorNameGame],
  debug: [DifferentEmoji],
};

export default function GameHub() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const duration = location.state?.duration || 60;

  const [gamesCompleted, setGamesCompleted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [gameOver, setGameOver] = useState(false);
  const [penaltyCountdown, setPenaltyCountdown] = useState(null);
  const [gameIndex, setGameIndex] = useState(0);
  const [fromDaily, setFromDaily] = useState(false);

  const allGames = Object.values(categoryGames).flat();

  const [games] = useState(() => {
    if (category && categoryGames[category.toLowerCase()]) {
      return categoryGames[category.toLowerCase()];
    }
    return [...allGames].sort(() => Math.random() - 0.5);
  });

  useEffect(() => {
    if (gameOver || penaltyCountdown != null) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameOver, penaltyCountdown]);

  useEffect(() => {
    if (penaltyCountdown == null) return;
    if (penaltyCountdown === 0) {
      setPenaltyCountdown(null);
      setTimeLeft(t => Math.max(0, t - 5));
      nextGame(true);
      return;
    }
    const timer = setTimeout(() => setPenaltyCountdown(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [penaltyCountdown]);

  useEffect(() => {
    if (gameOver) getScore();
  }, [gameOver]);

  useEffect(() => {
    if (location.state?.from === "daily") setFromDaily(true);
  }, []);

  function nextGame(skipped = false) {
    if (gameOver) return;
    if (!skipped) setGamesCompleted(prev => prev + 1);
    setGameIndex(prev => (prev + 1) % games.length);
  }

  function handleSkip() {
    if (gameOver || penaltyCountdown != null) return;
    setPenaltyCountdown(5);
  }

  async function getScore() {
    if (!auth.currentUser || !fromDaily) return;
    setDoc(
      doc(db, "UserAccounts", auth.currentUser.uid),
      { Score: gamesCompleted * 10 },
      { merge: true }
    );
  }

  function handleGameComplete(data) {
    if (data?.skipped) setPenaltyCountdown(5);
    else if (data?.autoSkip) nextGame(true);
    else nextGame();
  }

  function handleBack() {
    if (window.confirm("Are you sure you want to quit? You'll lose your current progress.")) {
      const fromExplore = location.state?.from === "/explore";
      navigate(fromExplore ? "/explore" : "/");
    }
  }

  if (gameOver) {
    return (
      <div className="full-end-screen">
        <h1>Time's up!</h1>
        <p>
          {gamesCompleted} {gamesCompleted === 1 ? "game" : "games"} completed!
        </p>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  }

  if (penaltyCountdown != null) {
    return (
      <div className="gamehub centered">
        <h2 className="penalty-timer">{penaltyCountdown}</h2>
      </div>
    );
  }

  const CurrentGame = games[gameIndex];

  return (
    <div className="gamehub centered">
      <button className="back-button" onClick={handleBack} aria-label="Back">
        ⬅
      </button>

      <div className="timer-top-right">{timeLeft}</div>

      <div className="game-container">
        <CurrentGame
          key={`${gameIndex}-${gamesCompleted}`}
          onComplete={handleGameComplete}
          onSkip={handleSkip}
        />
      </div>

      <div className="top-controls">
        <button className="skip-button" onClick={handleSkip}>
          SKIP
        </button>
      </div>
    </div>
  );
}
