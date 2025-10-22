import React, { useState, useMemo } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrap: { display: "grid", placeItems: "center", gap: 24, padding: 32 },
  card: { fontSize: 36, fontWeight: 700, padding: "20px 40px", border: "2px solid #ccc", borderRadius: 12 },
  row: { display: "flex", gap: 40, justifyContent: "center" },
  zone: {
    padding: "16px 24px",
    fontSize: 18,
    borderRadius: 10,
    border: "1px solid #999",
    background: "#222",
    cursor: "pointer"
  },
  score: { fontSize: 18 },
  feedback: { fontSize: 16, minHeight: 24 }
});

// Fruit vs Vegetable set
const SET = {
  leftLabel: "Fruit",
  rightLabel: "Vegetable",
  items: [
    { label: "Apple", side: "left" },
    { label: "Carrot", side: "right" },
    { label: "Banana", side: "left" },
    { label: "Broccoli", side: "right" },
    { label: "Pear", side: "left" },
    { label: "Spinach", side: "right" }
  ]
};

export default function QuickSortGame({ onComplete }) {
  const css = useStyles();
  const [i, setI] = useState(0);           // Current round
  const [score, setScore] = useState(0);   // Total score
  const [streak, setStreak] = useState(0); // Correct streak
  const [feedback, setFeedback] = useState("");

  // Pick a new item each round
  const item = useMemo(() => SET.items[i], [i]);

  function pick(side) {
    if (side === item.side) {
      const bonus = streak >= 2 ? 2 : 1;
      setScore(s => s + bonus);
      setStreak(s => s + 1);
      setFeedback(`Correct (+${bonus})`);
    } else {
      setScore(s => s - 1);
      setStreak(0);
      setFeedback("Incorrect (−1)");
    }

    // Advance to next round
    if (i + 1 >= SET.items.length) {
      onComplete?.({ score });
    } else {
      setTimeout(() => {
        setI(n => n + 1);
        setFeedback("");
      }, 600);
    }
  }

  return (
    <div className={css.wrap}>
      <div className={css.card}>{item.label}</div>
      <div className={css.row}>
        <button className={css.zone} onClick={() => pick("left")}>{SET.leftLabel}</button>
        <button className={css.zone} onClick={() => pick("right")}>{SET.rightLabel}</button>
      </div>
      <div className={css.feedback} aria-live="polite">{feedback}</div>
      <div className={css.score}>Score: {score}</div>
    </div>
  );
}
