import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DefinitionGame from "../games/DefinitionGame.jsx";
import MathGame from "../games/MathGame.jsx";
import MemoryGame from "../games/MemoryGame.jsx";
import ColorNameGame from "../games/ColorNameGame.jsx";
import SortGame from "../games/SortGame.jsx";
import TriviaGame from "../games/TriviaGame.jsx";
import BubbleGame from "../games/BubbleGame.jsx";
import DifferentEmoji from "../games/DifferentEmoji.jsx";
import "./css/GameHub.css";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../scripts/firebase.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SportsTrivia = props => <TriviaGame category="sports" {...props} />;
const GeographyTrivia = props => <TriviaGame category="geography" {...props} />;
const RandomTrivia = props => <TriviaGame random {...props} />;

const categoryGames = {
  memory: [MemoryGame],
  math: [MathGame],
  vocabulary: [DefinitionGame, SortGame],
  sports: [SportsTrivia],
  geography: [GeographyTrivia],
  trivia: [RandomTrivia],
  reaction: [BubbleGame, DifferentEmoji, ColorNameGame],
  debug: [DifferentEmoji],
};

export default function GameHub() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const duration = location.state?.duration || 60;

  const [games, setGames] = useState([]);
  const [gamesCompleted, setGamesCompleted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [gameOver, setGameOver] = useState(false);
  const [penaltyCountdown, setPenaltyCountdown] = useState(null);
  const [gameIndex, setGameIndex] = useState(0);
  const [fromDaily, setFromDaily] = useState(false);

  const nodeRefMap = useRef({});

  useEffect(() => {
    const lower = category?.toLowerCase();
    const all = Object.values(categoryGames).flat();

    if (lower && categoryGames[lower]) {
      setGames(categoryGames[lower]);
    } else if (location.state?.from === "daily") {
      setFromDaily(true);
      setGames([...all].sort(() => Math.random() - 0.5));
    } else {
      setGames([...all].sort(() => Math.random() - 0.5));
    }
  }, [category, location.state]);

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
    if (!auth.currentUser) return null;
    if(!fromDaily) {
      console.log("Not from daily, score not recorded.");
      return;
    }
    const user = auth.currentUser;
    console.log("Recording score for user:", user.uid);
    setDoc(doc(db, "UserAccounts", user.uid), {
      Score: gamesCompleted * 10,
    }, { merge: true });
    console.log(user.Score, user.highestScore)
    if(user.Score > user.highestScore) {
      console.log("New highest score!", user.Score)
      setDoc(doc(db, "UserAccounts", user.uid), {
        highestScore: user.Score,
      }, { merge: true });
    }
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
        {!auth.currentUser && location.state?.from !== "/explore" ? (
          <>
        <p> Sign in to save your score!</p>
        <button onClick={() => navigate("/auth")}>Sign In</button>
        </>
        ) : null}
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  }

  if (penaltyCountdown != null) {
    return (
      <div className="gamehub">
        <h2 className="penalty-timer">{penaltyCountdown}</h2>
      </div>
    );
  }

  const CurrentGame = games[gameIndex];
  const cardKey = `${gameIndex}-${gamesCompleted}`;
  const nodeRef =
    nodeRefMap.current[cardKey] ||
    (nodeRefMap.current[cardKey] = { current: null });

  return (
    <div className="gamehub">
      <button className="back-button" onClick={handleBack} aria-label="Back">
        ❮
      </button>
      <button className="skip-button" onClick={handleSkip}>
          SKIP
        </button>

      <div className="timer-top-right">{timeLeft}</div>

      <div className="main-content">
        

        <TransitionGroup className="card-stack">
          <CSSTransition
            key={cardKey}
            nodeRef={nodeRef}
            timeout={500}
            classNames="game-card"
          >
            <div ref={nodeRef} className="game-card">
              {CurrentGame ? (
                <CurrentGame
                  onComplete={handleGameComplete}
                  onSkip={handleSkip}
                />
              ) : (
                <div style={{ textAlign: "center", opacity: 0.65 }}>
                  Loading game...
                </div>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
