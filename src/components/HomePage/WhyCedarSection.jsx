import "./WhyCedarSection.css";

export default function WhyCedarSection() {
  return (
    <section className="why-section">

      {/* HEADER */}
      <div className="why-header">
        <div className="why-tag">
          WHY CEDAR CAPITAL BANK
        </div>

        <h2>
          The Future of <span className="gold">Digital Banking</span> Starts Here
        </h2>

        <p>
          A pre-integrated banking platform built by bankers, for bankers — and the global teams they serve.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="why-grid">

        {/* CARD 1 */}
        <div className="why-card">
          <div className="card-header">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3L3 7l9 4 9-4-9-4z" />
                <path d="M3 11l9 4 9-4M3 15l9 4 9-4" />
              </svg>
            </div>
            <h4>Complete Banking Ecosystem</h4>
          </div>

          <p>
            Everything you need to launch, manage, and scale digital banking services from one unified platform — including payments, wallets, compliance, and customer management.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="why-card">
          <div className="card-header">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
              </svg>
            </div>
            <h4>Industry Expertise</h4>
          </div>

          <p>
            Built by financial technology specialists with deep experience in banking operations, regulatory compliance, and enterprise financial infrastructure.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="why-card">
          <div className="card-header">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </div>
            <h4>Reliable Cloud Infrastructure</h4>
          </div>

          <p>
            Modern cloud-native architecture engineered for high availability, real-time transaction processing, and secure global banking operations.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="why-card">
          <div className="card-header">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
                <path d="M5 15l.5 1.5L7 17l-1.5.5L5 19l-.5-1.5L3 17l1.5-.5L5 15z" />
              </svg>
            </div>
            <h4>Continuous Innovation</h4>
          </div>

          <p>
            A future-ready banking platform constantly enhanced with new technologies, smarter automation, and evolving financial capabilities.
          </p>
        </div>

      </div>
    </section>
  );
}
