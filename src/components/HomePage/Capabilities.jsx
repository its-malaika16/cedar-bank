import { useEffect, useRef, useState } from "react";
import "./Capabilities.css";

const CARD_W = 320;
const GAP = 40;
const AUTO_MS = 3000;

const DATA = [
  {
    title: "Global Payment Solutions",
    body: "Process international payments quickly and securely through trusted global networks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    title: "Real-Time FX Services",
    body: "Access live exchange rates and automate currency conversions globally.",
    icon: (


      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 16l6-6 4 4 6-6"></path>
        <path d="M14 8h6v6"></path>
      </svg>


    )
  },
  {
    title: "Compliance & Risk Monitoring",
    body: "Built-in KYC, AML and fraud monitoring infrastructure.",
    icon: (


      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22s7-4 7-10V6l-7-3-7 3v6c0 6 7 10 7 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>


    )
  },
  {
    title: "API & System Integrations",
    body: "Connect banking services into applications with powerful APIs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: "Digital Account Management",
    body: "Create and manage accounts with secure onboarding flows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: "Multi-currency banking",
    body: "Hold, manage, and transfer funds across multiple currencies with instant internal transfers and real-time balance tracking.",
    icon: (



      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">

        {/* wallet body */}
        <rect x="3" y="7" width="18" height="12" rx="3"></rect>

        {/* top flap line (subtle detail like image) */}
        <path d="M3 10h18"></path>

        {/* right side card pocket */}
        <path d="M15 11h4"></path>

        {/* small circle (button) */}
        <circle cx="17.5" cy="11" r="1"></circle>

      </svg>



    )
  }
];

export default function Capabilities() {
  const [active, setActive] = useState(2);
  const [width, setWidth] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef(null);
  const startX = useRef(0);

  /* ✅ WIDTH */
  useEffect(() => {
    const update = () => setWidth(ref.current?.clientWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ✅ AUTO SCROLL */
  useEffect(() => {
    if (isDragging || isHovering) return;

    const t = setInterval(() => {
      setActive((a) => (a + 1) % DATA.length);
    }, AUTO_MS);

    return () => clearInterval(t);
  }, [isDragging, isHovering]);

  /* ✅ DRAG */
  const onPointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setDragX(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    if (!isDragging) return;

    const threshold = 70;

    if (dragX < -threshold) {
      setActive((a) => (a + 1) % DATA.length);
    } else if (dragX > threshold) {
      setActive((a) => (a - 1 + DATA.length) % DATA.length);
    }

    setDragX(0);
    setIsDragging(false);
  };

  const step = CARD_W + GAP;
  const base = width / 2 - CARD_W / 2;

  return (
    <section className="banking-section">

      <div className="banking-header">
        <span className="banking-tag">CAPABILITIES</span>
        <h2 className="banking-title">
          One platform, <span className="title-highlight">Unlimited Banking Possibilities</span>
        </h2>
      </div>

      <div
        className="carousel-wrapper"
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}

        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {DATA.map((item, i) => {

          let offset = i - active;

          if (offset > DATA.length / 2) offset -= DATA.length;
          if (offset < -DATA.length / 2) offset += DATA.length;

          const dist = Math.abs(offset);

          const scale = Math.max(0.85, 1 - dist * 0.08);
          const opacity = Math.max(0.25, 1 - dist * 0.25);

          const x = base + offset * step + dragX * 0.6;
          const y = -offset * 60;

          const isActive = offset === 0;

          return (
            <div
              key={i}
              className={`lovable-card ${isActive ? "active" : ""}`}
              onClick={() => !isDragging && setActive(i)}

              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}

              style={{
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity,
                zIndex: 50 - dist,
                transition: isDragging
                  ? "none"
                  : "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms",
              }}
            >
              <div className="card-inner">
                <div className="cap-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="line-divider" />
                <p>{item.body}</p>
                <div className="corner top" />
                <div className="corner bottom" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}