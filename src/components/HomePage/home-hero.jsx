import { useNavigate } from "react-router-dom";
import CurrencyAnimation from "./CurrencyAnimation";
import "./home-hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* LEFT */}
      <div className="hero-left">

        <span className="hero-tag">
          ● CEDAR CAPITAL BANK PLATFORM
        </span>

        <h1>
          Banking <br />
          <span className="gold">Infrastructure</span> Built <br />
          for Global Business
        </h1>

        <p>
          Cedar Capital Bank delivers a secure, scalable, and fully integrated
          banking platform designed to power modern financial institutions,
          fintech companies, and global payment operations.
        </p>

        {/* ✅ BUTTONS */}
        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Request a demo →
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/features")}
          >
            Explore the platform
          </button>
        </div>

        {/* ✅ FEATURES */}
        <div className="hero-features">

          {/* Globe */}
          <div className="feature-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"/>
                <path d="M3 12h18"/>
                <path d="M12 3a12 12 0 0 1 0 18"/>
                <path d="M12 3a12 12 0 0 0 0 18"/>
              </svg>
            </div>
            <div>
              <h4>40 Currencies</h4>
              <p>and more</p>
            </div>
          </div>

          {/* Shield */}
          <div className="feature-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h4>Secure</h4>
              <p>Transactions</p>
            </div>
          </div>

          {/* Users */}
          <div className="feature-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="3"/>
                <circle cx="17" cy="9" r="2.5"/>
                <path d="M2 21v-2a4 4 0 0 1 8 0v2"/>
                <path d="M14 21v-1.5a3.5 3.5 0 0 1 7 0V21"/>
              </svg>
            </div>
            <div>
              <h4>Personalized</h4>
              <p>service</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <CurrencyAnimation />
      </div>

    </section>
  );
}
``