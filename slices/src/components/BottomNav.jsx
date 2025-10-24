import { NavLink } from 'react-router-dom'
import '../index.css';
import './BottomNav.css';
export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <NavLink to="/" end>
        {({ isActive }) => (
          <img
            src="../assets/polygon.png"
            alt="Home"
            className={`nav-icon home-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>

      <NavLink to="/explore">
        {({ isActive }) => (
          <img
            src="../assets/search.png"
            alt="Search"
            className={`nav-icon search-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>

      <NavLink to="/profile">
        {({ isActive }) => (
          <img
            src="../assets/icon.png"
            alt="Profile"
            className={`nav-icon profile-icon${isActive ? ' active' : ''}`}
          />
        )}
      </NavLink>
    </nav>
  )
}
