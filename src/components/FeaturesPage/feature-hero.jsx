import "./feature-hero.css";

export default function FeatureHero() {
  return (
    <section className="platform-hero">
      <div className="container">

      <div className="hero-content">

        {/* TOP TAG */}
        <span className="platform-hero-tag subheading">APP FEATURES</span>

        {/* HEADING */}
        <h1 className="hero-title">
          All-in-One <span className="yellow-text">Financial</span> Control
        </h1>

        {/* TEXT */}
        <p className="hero-desc">
          Manage accounts, send payments, handle payroll, and monitor activity without switching between tools or platforms
        </p>

      </div>
</div>
    </section>
  );
}
