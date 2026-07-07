import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ✅ COLUMN 1 - LOGO */}
        <div className="footer-col">

          <div className="logo">
            <div className="logo-box">
              <img src="/assets/logo/cedar-bank.png" alt="Logo" />
            </div>

            <div className="logo-text">
              <span>CEDAR CAPITAL</span>
              <strong>BANK</strong>
            </div>
          </div>

          <p className="footer-desc">
            Modern banking designed to simplify finance, strengthen businesses, and support global success.
          </p>

        </div>

        {/* ✅ COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/services">Solutions</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ✅ COLUMN 3 */}
        <div className="footer-col">
          <h4>Legal</h4>

          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* ✅ COLUMN 4 - CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          {/* 📍 LOCATION */}
          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
            </span>
            <p><span className="cityname">Manchester:</span> The Point Building, 173-175 Cheetham Hill Rd</p>
          </div>

          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
            </span>
            <p><span className="cityname">Delaware:</span> 501 Silverside Rd, Wilmington</p>
          </div>

          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
            </span>
            <p><span className="cityname">Beirut:</span> Gauche Rive Tower</p>
          </div>

          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
            </span>
            <p><span className="cityname">Dubai:</span> Blue Bay Tower, Business Bay</p>
          </div>

          {/* 📞 PHONE */}
          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h4l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v4c0 1-1 2-2 2a17 17 0 0 1-17-17c0-1 1-2 2-2z"/>
              </svg>
            </span>
            <p>+971 741 281 8641</p>
          </div>

          {/* ✉️ EMAIL */}
          <div className="contact-row">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18v12H3z"/>
                <path d="M3 6l9 7 9-7"/>
              </svg>
            </span>
            <p>info@cedarcapitalbank.com</p>
          </div>

        </div>

      </div>

      {/* ✅ BOTTOM */}
      <div className="footer-bottom">
        © 2026 Cedar Capital Bank. All rights reserved.
        <br />
        UK · USA · LEBANON · UAE
      </div>

    </footer>
  );
}
