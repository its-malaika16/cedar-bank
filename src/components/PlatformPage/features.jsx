import "./features.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        {/* HEADER */}
        <div className="features-header">
          <span className="tag">FEATURES</span>

          <h2>
            Enterprise Banking <span>Features</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="features-grid">

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="3" />
                <path d="M4 21v-2a4 4 0 0 1 8 0v2" />
                <path d="M17 11l2 2 3-3" />
              </svg>
            </div>
            <h4>Digital Account Management</h4>
            <p>
              Effortlessly create and manage customer and business accounts with secure onboarding,
              verification, and role-based access controls.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h4>Multi-Currency Banking</h4>
            <p>
              Hold, manage, and transfer funds across multiple currencies with instant internal transfers
              and real-time balance tracking.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
            </div>
            <h4>Global Payment Solutions</h4>
            <p>
              Process international payments quickly and securely through trusted global banking networks
              with full transaction visibility.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 16l6-6 4 4 6-6"></path>
        <path d="M14 8h6v6"></path>
      </svg>

            </div>
            <h4>Real-Time FX Services</h4>
            <p>
              Access live exchange rates, automate currency conversions, and manage international
              transactions with greater financial control.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s7-4 7-10V6l-7-3-7 3v6c0 6 7 10 7 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
            </div>
            <h4>Compliance & Risk Monitoring</h4>
            <p>
              Built-in KYC, AML, sanctions screening, fraud prevention, and audit systems to support
              regulatory compliance and operational security.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M8 16l-4-4 4-4M16 8l4 4-4 4" />
              </svg>
            </div>
            <h4>API & System Integrations</h4>
            <p>
              Connect banking services directly into your applications and workflows using powerful APIs,
              webhooks, and modern developer tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}