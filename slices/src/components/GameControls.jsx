import "../index.css"
import "./GameControls.css"

export default function GameControls({ onCheck, onSkip }) {
  return (
    <div className="game-controls top-controls">
      <button className="skip-button" onClick={onSkip}>
        SKIP
      </button>
    </div>
  )
}
