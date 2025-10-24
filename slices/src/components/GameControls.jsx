import '../index.css';
import './GameControls.css';
export default function GameControls({ onCheck, onSkip }) {
  return (
    <div
      className="game-controls"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        margin: "12px 0 16px",
      }}
    >
      <button onClick={onCheck}>Check</button>
      <button onClick={onSkip}>Skip</button>
    </div>
  )
}
