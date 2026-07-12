import "./CTASection.css";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="cta">
<div className="container">
      <div className="cta-card">

        {/* TITLE */}
        <h2>
          Ready to Build the{" "}
          <span className="yellow-text">Future of Banking?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="subtitle">
          From digital banking infrastructure to payroll and global payments,
          Cedar Capital Bank helps businesses scale with confidence.
        </p>

        {/* MID TEXT */}
        <h3>Lets Talk!</h3>

        <p className="desc">
          Get in touch with our team to explore how Cedar Capital Bank can
          support your growth and transformation goals.
        </p>

        {/* BUTTONS */}
        <div className="cta-buttons">
          <Link to="/contact">
            <button className="primary">
              Get in touch →
            </button>
          </Link>

          <Link to="/features">
            <button className="secondary">
              Explore the platform
            </button>
          </Link>
        </div>

      </div>
</div>
    </section>
  );
}
