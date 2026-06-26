import "./platform-hero.css";

export default function PlatformHero() {
  return (
    <section className="platform-hero">
      <div className="container hero-layout">

        {/* ✅ LEFT CONTENT */}
        <div className="hero-content">

          <span className="platform-hero-tag">PLATFORM</span>

          <h1 className="hero-title">
            A Unified <span>Banking</span> Operating System
          </h1>

          <p className="hero-desc">
            Cedar Capital Bank replaces fragmented financial tools with one
            connected platform where accounts, payments, compliance, and reporting
            all work together in real time.
          </p>

        </div>

        {/* ✅ RIGHT IMAGE */}
        <div className="hero-image">

          <img
            src="/assets/images/platform-bkg.png"
            alt="Platform Background"
          />

        </div>

      </div>
    </section>
  );
}