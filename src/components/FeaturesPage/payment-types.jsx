import "./Payment-types.css";

export default function PaymentTypes() {
  return (
    <section className="payment-section">
      <div className="container">

      {/* HEADER */}
      <div className="payment-header">
        <span className="tag">PAYMENT TYPES</span>

        <h2>
          Two ways to send. <span>Both transparent.</span>
        </h2>

        <p>
          Choose the rail that fits the payment — we'll always show the fee,
          the rate and the expected arrival time before you confirm.
        </p>
      </div>

      {/* CARDS */}
      <div className="payment-grid">

        {/* CARD 1 */}
        <div className="payment-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
            </svg>
          </div>

          <h4>Regular</h4>
          <p>
            Fast, low-cost transfers via local payment networks like Faster Payments,
            SEPA and ACH. Best for everyday payments.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="payment-card">
          <div className="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M4 10v10h16V10"/>
              <path d="M12 4l4 6H8l4-6z"/>
            </svg>
          </div>

          <h4>SWIFT</h4>
          <p>
            Worldwide reach to 200+ countries via the SWIFT network.
            Best for large, less time-sensitive transfers.
          </p>
        </div>

      </div>
</div>
    </section>
  );
}