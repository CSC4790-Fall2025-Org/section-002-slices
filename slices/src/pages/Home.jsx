import { useNavigate } from "react-router-dom";
import "../index.css";
import "./css/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="phone start-page" role="main">
      <img src="../assets/logo.png" alt="SLICES logo" className="main-logo" />

      <h1 className="title">
        THE DAILY<br />SLICE
      </h1>

      <button
        className="btn btn--primary"
        type="button"
        onClick={() => navigate("/game")}
      >
        BEGIN
      </button>
    </main>
  );
}
