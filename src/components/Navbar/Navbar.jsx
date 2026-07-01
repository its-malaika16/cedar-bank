import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <NavLink to="/" className="logo" onClick={closeMenu}>

          <div className="logo-box">
            <img src="/assets/logo/cedar-bank.png" alt="Cedar Bank" />
          </div>

          <div className="logo-text">
            <p className="top">CEDAR CAPITAL</p>
            <p className="bottom">BANK</p>
          </div>

        </NavLink>
      </div>

      {/* HAMBURGER */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/platform" onClick={closeMenu}>
          Platform
        </NavLink>

        <NavLink to="/features" onClick={closeMenu}>
          Features
        </NavLink>

        <NavLink to="/solutions" onClick={closeMenu}>
          Solutions
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <NavLink
          to="/contact"
          className="mobile-btn"
          onClick={closeMenu}
        >
          Get Started →
        </NavLink>
      </div>

      {/* DESKTOP BUTTON */}
      <div className="nav-right">
        <NavLink to="/contact" className="nav-btn">
          Get Started →
        </NavLink>
      </div>

    </nav>
  );
}