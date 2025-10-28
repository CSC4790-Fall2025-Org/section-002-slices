import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./css/Explore.css";

// Map categories to routes or game types
const categories = [
  { name: "MEMORY", color: "cat-purple", route: "/game/memory" },
  { name: "MATH", color: "cat-green", route: "/game/math" },
  { name: "VOCABULARY", color: "cat-yellow", route: "/game/vocabulary" },
  { name: "TRIVIA", color: "cat-pink", route: "/game/trivia" },
  // { name: "SPORTS", color: "cat-green", route: "/game/sports" },
  { name: "GEOGRAPHY", color: "cat-purple", route: "/game/geography" },
  { name: "REACTION", color: "cat-green", route: "/game/reaction" },
  //{ name: "debug", color: "cat-green", route: "/game/debug" },
];


export default function Explore() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleCategoryClick = (cat) => {
  const state = { duration: 60 };
  if (cat.name === "TRIVIA") {
    state.games = ["/game/geography", "/game/sports"];
  }
  navigate(cat.route, { state });
};


  return (
    <main className="phone phone--white">
      {/* Search bar */}
      <div className="search-wrap">
        <div className="search-bar">
          <input
            type="text"
            placeholder="SEARCH"
            aria-label="Search categories"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src="/assets/search.png"
            alt=""
            className="search-icon-inline"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scrollable content area */}
      <div className="explore-scroll">
        {!search && <h2 className="explore-header">FEATURED</h2>}
        <section className="category-grid" aria-label="Featured categories">
          {filteredCategories.map((cat) => (
            <button
              key={cat.name}
              className={`category-card ${cat.color}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.name}
            </button>
          ))}
        </section>
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </main>
  );
}
