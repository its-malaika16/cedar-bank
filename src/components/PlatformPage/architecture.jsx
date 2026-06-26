import "./architecture.css";

export default function ArchitectureSection() {
  return (
    <section className="architecture">
<div className="container">
      {/* HEADER */}
      <div className="architecture-header">
        <span className="tag">ARCHITECTURE</span>

        <h2>
          Built for Modern <span>Financial Infrastructure</span>
        </h2>

        <p>
          Cedar Capital Bank runs on a highly secure, distributed architecture designed for performance,
          resilience, and continuous availability at global scale.
        </p>
      </div>

      {/* CARDS */}
      <div className="architecture-grid">

        {/* CARD 1 */}
        <div className="arch-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M7 17h10a4 4 0 0 0 0-8 5 5 0 0 0-9-2 4 4 0 1 0-1 10z"/>
            </svg>
          </div>

          <h4>Cloud Infrastructure Layer</h4>
          <p>
            A distributed, multi-region system designed to automatically balance traffic,
            scale resources on demand, and maintain uninterrupted service across all banking operations.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="arch-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="12" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M7 14h4"/>
            </svg>
          </div>

          <h4>Core Transaction Ledger</h4>
          <p>
            A high-integrity financial recording engine that synchronizes all account activity instantly,
            ensuring consistent, auditable, and tamper-resistant transaction data across the platform.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="arch-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="10" width="14" height="9" rx="2"/>
              <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
            </svg>
          </div>

          <h4>Security & Access Framework</h4>
          <p>
            A continuously verified security environment where every interaction is authenticated,
            encrypted, and monitored using advanced identity controls and real-time risk detection systems.
          </p>
        </div>

      </div>
</div>
    </section>
  );
}