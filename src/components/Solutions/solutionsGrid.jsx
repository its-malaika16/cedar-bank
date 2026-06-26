import "./SolutionsGrid.css";

export default function SolutionsGrid() {
  return (
    <section className="solutions-section">
<div className="container">
      <div className="solutions-grid">

        {/* CARD 1 */}
        <div className="solution-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l4 7-4 3-4-3 4-7z"/>
            </svg>
          </div>

          <h3>Digital Bank Launch Platform</h3>

          <p>
            Turn banking ideas into live, regulated financial products with a fully integrated
            infrastructure designed for speed, compliance, and scalability.
          </p>

          <div className="tags">
            <span>Core banking engine</span>
            <span>Ledger & transaction system</span>
            <span>Developer SDKs & APIs</span>
            <span>Compliance-ready templates</span>
          </div>

          <a href="#">Talk to an expert →</a>
        </div>

        {/* CARD 2 */}
        <div className="solution-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <rect x="7" y="7" width="10" height="10"/>
              <path d="M3 12h18"/>
            </svg>
          </div>

          <h3>Global Payroll Infrastructure</h3>

          <p>
            Run international payroll with precision, supporting distributed teams
            across multiple currencies and jurisdictions.
          </p>

          <div className="tags">
            <span>Automated payroll processing</span>
            <span>Approval workflows</span>
            <span>Instant local payouts</span>
            <span>Multi-entity support</span>
          </div>

          <a href="#">Talk to an expert →</a>
        </div>

        {/* CARD 3 */}
        <div className="solution-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12h18"/>
            </svg>
          </div>

          <h3>Treasury & FX Management</h3>

          <p>
            Manage global liquidity, optimize currency exposure, and move capital efficiently
            across subsidiaries and markets.
          </p>

          <div className="tags">
            <span>Multi-currency accounts</span>
            <span>FX rate locking</span>
            <span>Hedging control</span>
            <span>Real-time reconciliation</span>
          </div>

          <a href="#">Talk to an expert →</a>
        </div>

        {/* CARD 4 */}
        <div className="solution-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="4" width="6" height="6"/>
              <rect x="14" y="4" width="6" height="6"/>
              <rect x="4" y="14" width="6" height="6"/>
              <rect x="14" y="14" width="6" height="6"/>
            </svg>
          </div>

          <h3>Financial Operations Control Center</h3>

          <p>
            A unified system for managing banking operations, providing full visibility,
            control, and governance over financial activity.
          </p>

          <div className="tags">
            <span>Operational dashboards</span>
            <span>Role-based access</span>
            <span>Advanced reporting</span>
            <span>Transaction oversight</span>
          </div>

          <a href="#">Talk to an expert →</a>
        </div>

      </div>
</div>
    </section>
  );
}