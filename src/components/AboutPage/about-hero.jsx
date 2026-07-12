import "./about-hero.css";

export default function AboutHero() {
  return (
    <section className="platform-hero">
<div className="container">
      <div className="hero-content">

        {/* TOP TAG */}
        <span className="platform-hero-tag subheading">About Us</span>

        {/* HEADING */}
        <h1 className="hero-title">
          Engineering the Next Generation of  <span className="yellow-text">Banking Infrastructure</span> 
        </h1>

        {/* TEXT */}
        <p className="hero-desc">
          Cedar Capital Bank is built as a modern financial operating system designed to simplify how money moves, how institutions operate, and how global finance scales.
        </p>

      </div>
      </div>

    </section>
  );
}
