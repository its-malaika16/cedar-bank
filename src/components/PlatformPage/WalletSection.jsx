import "./WalletSection.css";

export default function WalletSection() {
  return (
    <section className="wallet-section">
<div className="container">
      <div className="wallet-container">

        {/* LEFT SIDE */}
        <div className="wallet-left">

          <h4 className="wallet-title">GBP Wallet</h4>

          {/* CIRCLE */}
          <div className="balance-circle">
            <div className="circle-inner">
              <span className="label">BANK BALANCE</span>
              <h2>£ 30,000</h2>
            </div>
          </div>

          {/* STATS */}
          <div className="wallet-stats">
            <p>
              Current Week total in:
              <span>£ 50,000</span>
            </p>
            <p>
              Current Week total out:
              <span>£ 20,000</span>
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="wallet-right">

          <div className="payroll-header">
            <h4>Recent payroll</h4>
            <span>5 employees · 4 currencies</span>
          </div>

          {/* LIST */}
          <div className="payroll-list">

            <div className="item">
              <div>
                <strong>Amelia Carter</strong>
                <p>Designer · London</p>
              </div>
              <span>£4,200</span>
            </div>

            <div className="item">
              <div>
                <strong>Sophie Müller</strong>
                <p>Engineer · Berlin</p>
              </div>
              <span>€5,800</span>
            </div>

            <div className="item">
              <div>
                <strong>Yusuf Al-Mansoori</strong>
                <p>Director · Dubai</p>
              </div>
              <span>22,000 د.إ</span>
            </div>

            <div className="item">
              <div>
                <strong>Hana Tanaka</strong>
                <p>Analyst · Tokyo</p>
              </div>
              <span>¥580,000</span>
            </div>

          </div>

        </div>

      </div>
</div>
    </section>
  );
}