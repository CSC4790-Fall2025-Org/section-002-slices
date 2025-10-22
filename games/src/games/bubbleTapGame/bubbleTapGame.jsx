import React, { useEffect, useState, useMemo } from "react";
import { createUseStyles } from "react-jss";

// Basic styling for stage and bubbles
const useStyles = createUseStyles({
  stage: {
    position: "relative",
    width: 320,
    height: 480,
    border: "2px solid #ccc",
    borderRadius: 12,
    overflow: "hidden",
    margin: "0 auto",
    background: "#f9f9f9",
  },
  bubble: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: "50%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  flash: {
    background: "#ef4444 !important", // red flash on wrong tap
  },
  info: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 18,
  },
});

export default function BubbleOrderGame({ onComplete }) {
  const css = useStyles();
  const [count, setCount] = useState(8); // number of bubbles this round
  const [bubbles, setBubbles] = useState([]); // bubble positions and states
  const [expected, setExpected] = useState(1); // next number to tap
  const [score, setScore] = useState(0); // current score
  const [startTime, setStartTime] = useState(Date.now()); // round start time

  // Generate new bubbles when count changes
  useEffect(() => {
    const newBubbles = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 260,
      y: Math.random() * 420,
      flash: false,
    })).sort(() => Math.random() - 0.5); // shuffle order
    setBubbles(newBubbles);
    setExpected(1);
    setStartTime(Date.now());
  }, [count]);

  // Handle bubble tap
  function handleTap(id) {
    if (id === expected) {
      setScore(prev => prev + 1);
      if (id === count) {
        // round complete — add time bonus
        const elapsed = Date.now() - startTime;
        const bonus = Math.max(0, 5000 - elapsed) / 1000;
        const finalScore = score + 1 + Math.floor(bonus);
        setScore(finalScore);
        if (count >= 12) {
          onComplete?.({ score: finalScore }); // game complete
        } else {
          setCount(prev => prev + 1); // next round with more bubbles
        }
      } else {
        setExpected(prev => prev + 1); // wait for next number
      }
    } else {
      // wrong tap — flash red and subtract point
      setScore(prev => prev - 1);
      setBubbles(prev =>
        prev.map(b => (b.id === id ? { ...b, flash: true } : b))
      );
      setTimeout(() => {
        setBubbles(prev =>
          prev.map(b => (b.id === id ? { ...b, flash: false } : b))
        );
      }, 300);
    }
  }

  return (
    <>
      <div className={css.stage}>
        {bubbles.map(b => (
          <div
            key={b.id}
            className={`${css.bubble} ${b.flash ? css.flash : ""}`}
            style={{ left: b.x, top: b.y }}
            onClick={() => handleTap(b.id)}
          >
            {b.id}
          </div>
        ))}
      </div>
      <div className={css.info}>
        Score: {score} • Tap {expected}/{count}
      </div>
    </>
  );
}
