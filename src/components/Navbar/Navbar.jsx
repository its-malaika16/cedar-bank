import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* ✅ LEFT - LOGO */}
      <div className="nav-left">

        <NavLink to="/" className="logo">

          {/* ICON IMAGE */}
          <div className="logo-box">
            <img src="assets/logo/cedar-bank.png" alt="Cedar Bank" />
          </div>

          {/* TEXT */}
          <div className="logo-text">
            <p className="top">CEDAR CAPITAL</p>
            <p className="bottom">BANK</p>
          </div>

        </NavLink>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/platform">Platform</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/solutions">Solutions</NavLink>
        <NavLink to="/about">About</NavLink>        
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <NavLink to="/contact" className="nav-btn">
          Get Started →
        </NavLink>
      </div>

    </nav>
  );
}