import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DailyLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/game", { state: { from: "daily" } });
    }, 3000);

    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>Get Ready!</h2>
      <h5>Complete as many games as you can in 1 minute!</h5>
      <p>Loading...</p>
    </div>
  );
}
