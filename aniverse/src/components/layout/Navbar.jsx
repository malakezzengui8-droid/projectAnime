import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <h2 className="logo">AniVerse</h2>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/anime">Anime</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/my-library">Library</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;