import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Profile from "./pages/Profile.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import EditAccount from "./pages/EditAccount.jsx";
import GameHub from "./pages/GameHub.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import BottomNav from "./components/BottomNav.jsx";
import "./App.css";
import "./index.css";
import DailyLoading from "./pages/DailyLoading.jsx";

function BodyClassController() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    body.classList.remove(
      "home-bg",
      "explore-bg",
      "profile-bg",
      "game-bg",
      "no-scroll"
    );

    if (location.pathname === "/") body.classList.add("home-bg", "no-scroll");
    else if (location.pathname.startsWith("/explore"))
      body.classList.add("explore-bg", "no-scroll");
    else if (location.pathname.startsWith("/profile"))
      body.classList.add("profile-bg");
    else if (location.pathname.startsWith("/game"))
      body.classList.add("game-bg", "no-scroll");
  }, [location.pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith("/game");

  return (
    <div className="app-container">
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/explore" element={<Explore />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/auth" element={<AuthPage />} />
  <Route path="/edit-account" element={<EditAccount />} />
  <Route path="/ForgotPassword" element={<ForgotPassword />} />
  
  {/* Game routes */}
  <Route path="/daily-loading" element={<DailyLoading />} />
  <Route path="/game/:category" element={<GameHub />} />
  <Route path="/game" element={<GameHub />} />
</Routes>


      {!hideNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <BodyClassController />
      <Layout />
    </BrowserRouter>
  );
}
