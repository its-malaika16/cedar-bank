import "./FloatingCards.css";

export default function FloatingCards() {
  return (
    <div className="floating-wrap">

      {/* TOP CARD */}
      <div className="card top">
        <div className="card-content">
          <span>VISA •••• 2352</span>
          <h4>$12,500</h4>
        </div>
      </div>

      {/* MIDDLE CARD */}
      <div className="card middle">
        <div className="card-content">
          <span>Transactions</span>
          <div className="bar"></div>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="card bottom">
        <div className="card-content">
          <span>Account</span>
          <p>Active</p>
        </div>
      </div>

    </div>
  );
}