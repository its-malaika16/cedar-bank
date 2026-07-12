import { useState } from "react";
import "./TechSection.css";

const CARDS = [
  {
    title: "Global scalability",
    desc: "Operate across 40+ currencies and jurisdictions on a single, unified infrastructure.",
    type: "rocket"
  },
  {
    title: "Flexible solutions",
    desc: "Configure modules, workflows and limits to fit the way your bank actually runs.",
    type: "plus"
  },
  {
    title: "Speed with excellence",
    desc: "Launch faster with a streamlined, pre-integrated banking core and frictionless onboarding.",
    type: "bolt"
  },
  {
    title: "Next-gen tech",
    desc: "API-first, cloud-native architecture engineered for real-time, 24/7 reliability.",
    type: "chip"
  }
];

export default function TechSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="tech">

      {/* LEFT */}
      <div className="left">
        <span className="tag subheading">KEY PLATFORM CAPABILITIES</span>

        <h2>
          Technology <br />
          built to <span className="yellow-text">scale.</span>
        </h2>

        <p>
          Everything you need to run and scale a modern digital bank
          on one unified platform.
        </p>

        {/* ✅ LOVABLE GLOBE */}
        <div className={`globe ${active !== null ? "active" : ""}`}>
          <div className="sphere">

            {/* Horizontal rings */}
            <div className="ring h1"></div>
            <div className="ring h2"></div>
            <div className="ring h3"></div>

            {/* Vertical rings */}
            <div className="ring v1"></div>
            <div className="ring v2"></div>

            {/* center lines */}
            <div className="axis x"></div>
            <div className="axis y"></div>

            {/* dots */}
            <span className="dot d1" />
            <span className="dot d2" />
            <span className="dot d3" />
            <span className="dot d4" />

          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">

        <div className="divider horizontal" />
        <div className="divider vertical" />

        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="icon">

              {card.type === "rocket" && (

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M14 3c4 0 7 3 7 7 0 4-3 7-7 7-1.5 0-3-.5-4-1.5L6 18l2.5-4c-1-1-1.5-2.5-1.5-4 0-4 3-7 7-7z" />
                  <path d="M7 17l-3 3" />
                  <path d="M10 6l4 4" />
                </svg>

              )}

              {card.type === "plus" && (

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M9 3h3a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-2v2h2a2 2 0 1 1 0 4h-2v2a2 2 0 0 1-2 2H9v-2a2 2 0 1 0-4 0v2H3v-3a2 2 0 1 1 0-4h2v-2H3a2 2 0 1 1 0-4h2V7a2 2 0 0 1 2-2h2V3z" />
                </svg>

              )}

              {card.type === "bolt" && (

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>

              )}

              {card.type === "chip" && (

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="7" y="7" width="10" height="10" rx="2" />
                  <path d="M12 1v4M12 19v4M4 12h4M16 12h4" />
                  <path d="M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
                </svg>

              )}

            </div>

            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}