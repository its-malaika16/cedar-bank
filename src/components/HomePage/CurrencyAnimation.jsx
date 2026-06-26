import { useEffect, useState } from "react";

const orbs = [
  { s: "$", size: 78, x: 18, y: 18 },
  { s: "€", size: 72, x: 50, y: 14 },
  { s: "฿", size: 70, x: 82, y: 20 },
  { s: "د.إ", size: 80, x: 70, y: 46 },
  { s: "₹", size: 84, x: 38, y: 44 },
  { s: "£", size: 66, x: 12, y: 50 },
  { s: "₺", size: 70, x: 22, y: 78 },
  { s: "¥", size: 88, x: 54, y: 76 },
  { s: "₽", size: 74, x: 84, y: 74 },
];

const sequence = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [5, 6], [6, 7], [7, 8], [8, 4], [4, 0],
];

const STEP_MS = 2200;
const DRAW_MS = 1100;

export default function CurrencyAnimation() {
  const [step, setStep] = useState(0);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    setDrawn(false);

    const t1 = setTimeout(() => setDrawn(true), 30);
    const t2 = setTimeout(() => {
      setStep((s) => (s + 1) % sequence.length);
    }, STEP_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [step]);

  const [aIdx, bIdx] = sequence[step];
  const a = orbs[aIdx];
  const b = orbs[bIdx];

  const VBW = 100;
  const VBH = 80;

  const ax = a.x;
  const ay = a.y * (VBH / 100);
  const bx = b.x;
  const by = b.y * (VBH / 100);

  const dx = bx - ax;
  const dy = by - ay;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;

  const rA = (a.size / 600) * 100 * 0.5;
  const rB = (b.size / 600) * 100 * 0.5;

  const sx = ax + (dx / dist) * rA;
  const sy = ay + (dy / dist) * rA;
  const ex = bx - (dx / dist) * rB;
  const ey = by - (dy / dist) * rB;

  const mx = (sx + ex) / 2 + -dy * 0.12;
  const my = (sy + ey) / 2 + dx * 0.12;

  const pathD = `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;

  return (
    <div className="currency-container">
      <div className="container">

      {/* ✅ INLINE CSS (self-contained) */}
      <style>{`
        .currency-container {
          position: relative;
          width: 100%;
          aspect-ratio: 5 / 4;
          overflow: hidden;
        }

        .orb {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0,0,0,0.65);
          color: #fff;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201,162,39,0.4);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        /* ✅ Mobile responsiveness */
        @media (max-width: 768px) {
          .currency-container {
            aspect-ratio: 1 / 1;
          }
        }
      `}</style>

      {/* ✅ SVG LINE */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c9a227" stopOpacity="1" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.2" />
          </linearGradient>

          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          key={step}
          d={pathD}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="0.4"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: drawn ? 0 : 200,
            transition: `stroke-dashoffset ${DRAW_MS}ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms ease`,
            opacity: drawn ? 1 : 0,
          }}
        />
      </svg>

      {/* ✅ ORBS */}
      {orbs.map((o, i) => {
        const active = i === aIdx || i === bIdx;

        // ✅ responsive size scaling
        const responsiveSize = `clamp(${o.size * 0.6}px, ${o.size * 0.12}vw, ${o.size}px)`;

        return (
          <span
            key={i}
            className="orb"
            style={{
              width: responsiveSize,
              height: responsiveSize,
              top: `calc(${o.y}% - (${responsiveSize} / 2))`,
              left: `calc(${o.x}% - (${responsiveSize} / 2))`,
              fontSize: `calc(${responsiveSize} * 0.42)`,

              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,

              transition:
                "box-shadow 600ms ease, transform 600ms ease, border-color 600ms ease",

              boxShadow: active
                ? "0 0 32px 4px rgba(201,162,39,0.55), inset 0 0 24px rgba(201,162,39,0.35)"
                : "inset 0 0 24px rgba(201,162,39,0.12), 0 10px 30px -10px rgba(0,0,0,0.5)",

              borderColor: active
                ? "rgba(201,162,39,0.9)"
                : "rgba(201,162,39,0.35)",

              transform: active ? "scale(1.08)" : "scale(1)",
            }}
          >
            {o.s}
          </span>
        );
      })}
    </div>
    </div>
  );
}