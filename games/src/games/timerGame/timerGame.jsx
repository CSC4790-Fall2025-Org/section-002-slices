import React, { useEffect, useMemo, useState } from "react";
import { createUseStyles } from "react-jss";
import { useInterval } from "../hooks/useInterval";

// Basic styling using JSS
const useStyles = createUseStyles({
  wrap: { display: "grid", placeItems: "center", gap: 16, padding: 24 },
  big: { fontSize: 48, fontWeight: 700, letterSpacing: 1 },
  target: { fontSize: 18, opacity: 0.8 },
  btn: {
    padding: "12px 18px",
    fontSize: 18,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.12)",
    background: "#222",
    cursor: "pointer"
  },
  row: { display: "flex", gap: 12, alignItems: "center", justifyContent: "center" },
});

export default function StopTimerGame({ rounds = 5, onComplete }) {
  const css = useStyles();

  // Track whether the timer is running
  const [running, setRunning] = useState(false);

  // Current elapsed time in milliseconds
  const [ms, setMs] = useState(0);

  // Current round number
  const [round, setRound] = useState(1);

  // Target time for this round (between 2.00s and 4.00s)
  const target = useMemo(() => (Math.floor(Math.random() * 201) + 200) * 10, [round]);

  // Timer updates every 10ms while running
  useInterval(() => running && setMs(v => v + 10), running ? 10 : null);

  // Start the timer
  function start() {
    setMs(0);
    setRunning(true);
  }

  // Stop the timer and advance to next round
  function stop() {
    if (!running) return;
    setRunning(false);

    if (round >= rounds) {
      // Final round completed
      onComplete?.();
    } else {
      // Move to next round
      setRound(r => r + 1);
    }
  }

  // Reset display when round changes
  useEffect(() => {
    if (!running) setMs(0);
  }, [round]);

  return (
    <div className={css.wrap} role="group" aria-label="Stop the Timer">
      {/* Show target time and round info */}
      <div className={css.target}>
        Stop at {(target / 1000).toFixed(2)} s • Round {round}/{rounds}
      </div>

      {/* Show current timer value */}
      <div className={css.big} aria-live="polite">
        {(ms / 1000).toFixed(2)} s
      </div>

      {/* Start/Stop button */}
      <div className={css.row}>
        {!running ? (
          <button className={css.btn} onClick={start}>Start</button>
        ) : (
          <button className={css.btn} onClick={stop}>Stop</button>
        )}
      </div>
    </div>
  );
}
