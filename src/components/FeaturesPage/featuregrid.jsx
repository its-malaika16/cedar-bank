import "./featuregrid.css";

export default function FeatureCardsGrid() {
  return (
    <section className="cards-section">
      <div className="container">

      <div className="cards-grid">

        {/* 1 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="10" rx="2"/>
              <path d="M3 11h18"/>
            </svg>
          </div>
          <h4>Instant Funding</h4>
          <p>
            Add money to your account instantly using bank transfer,
            debit card, or open banking. Fast, seamless, and always available when needed.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 2 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 11l18-6-6 18-3-7-9-5z"/>
            </svg>
          </div>
          <h4>Smart Payments</h4>
          <p>
            Send money to individuals or businesses in seconds.
            Save beneficiaries for faster repeat payments.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 3 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M17 1l4 4-4 4"/>
              <path d="M7 23l-4-4 4-4"/>
              <path d="M3 7h18"/>
              <path d="M3 17h18"/>
            </svg>
          </div>
          <h4>Global Currency Exchange</h4>
          <p>
            Convert and manage currencies at real-time
            mid-market rates with full transparency.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 4 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 10h18M5 10V5h14v5M4 19h16"/>
            </svg>
          </div>
          <h4>Dedicated UK Account Details</h4>
          <p>
            Get a UK sort code and account number to receive GBP payments globally.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 5 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12h18"/>
            </svg>
          </div>
          <h4>Multi-currency Wallet</h4>
          <p>
            Hold, send, and spend multiple currencies from one account without conversions.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 6 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 1v22M5 12h14"/>
            </svg>
          </div>
          <h4>International Transfers</h4>
          <p>
            Move money globally via SWIFT or local rails with full transparency.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 7 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M7 13l3 3 7-7"/>
            </svg>
          </div>
          <h4>Automated Payments</h4>
          <p>
            Set recurring payments for subscriptions and expenses with full control.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 8 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M18 8a6 6 0 0 0-12 0v8h12z"/>
            </svg>
          </div>
          <h4>Always-On Support</h4>
          <p>
            Access real human support via chat, email, or phone — anytime.
          </p>
          <a href="#">Description</a>
        </div>

        {/* 9 */}
        <div className="card">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <rect x="7" y="7" width="10" height="10"/>
              <path d="M12 7v10"/>
            </svg>
          </div>
          <h4>Referral Rewards</h4>
          <p>
            Invite others and earn rewards when they successfully onboard.
          </p>
          <a href="#">Description</a>
        </div>

      </div>
</div>
    </section>
  );
}