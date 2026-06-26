import "./ReviewSection.css";

export default function ReviewSection() {
  return (
    <section className="review-section">

      <div className="review-container">

        {/* TOP LABEL */}
        <span className="review-tag">REVIEWS</span>

        {/* CARD */}
        <div className="review-card">

          {/* QUOTE ICON */}
          <div className="quote">“</div>

          {/* TEXT */}
          <p className="review-text">
            Cedar Capital Bank's platform provided the robust infrastructure and
            agility we needed to launch our digital banking vision on an
            accelerated timeline.
          </p>

          {/* USER */}
          <div className="review-user">
            <strong>Anonymous</strong>
            <span>Our Customer</span>
          </div>

          {/* ARROW */}
          <div className="arrow">→</div>

          {/* DIVIDER */}
          <div className="divider" />

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>10K+</h3>
              <p>Transactions Processed Monthly</p>
            </div>
            <div>
              <h3>1000+</h3>
              <p>Active Users</p>
            </div>
            <div>
              <h3>97.9%</h3>
              <p>Platform Uptime Reliability</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}