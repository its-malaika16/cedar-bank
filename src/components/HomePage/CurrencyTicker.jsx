import { useEffect, useState } from "react";

const CURRENCIES = [
  { flag: "🇦🇺", pair: "USD/AUD", code: "AUD" },
  { flag: "🇨🇭", pair: "USD/CHF", code: "CHF" },
  { flag: "🇬🇧", pair: "USD/GBP", code: "GBP" },
  { flag: "🇪🇺", pair: "USD/EUR", code: "EUR" },
  { flag: "🇦🇪", pair: "USD/AED", code: "AED" },
];

export default function CurrencyTicker() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function loadRates() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();

        if (data.result === "success") {
          setRates(data.rates);
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadRates();
  }, []);

  const items = CURRENCIES.map((c) => {
    const value = rates[c.code];

    const change = value
      ? (((value * 1000) % 100) / 100).toFixed(2)
      : "0.00";

    return {
      ...c,
      value: value
        ? c.code === "JPY" || c.code === "INR"
          ? value.toFixed(2)
          : value.toFixed(4)
        : "--",
      change,
    };
  });

  // ✅ triple duplicate for super smooth loop
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="ticker-wrapper">
      <style>{`
        .ticker-wrapper {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #0b2f2a, #133d36);
          padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* ✅ fade edges (premium effect) */
        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #0b2f2a, transparent);
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #133d36, transparent);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          gap: 60px;
          animation: ticker-scroll 30s linear infinite;
        }

        /* ✅ PAUSE ON HOVER */
        .ticker-wrapper:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #ccc;
        }

        .flag {
          font-size: 18px;
        }

        .pair {
          color: #aaa;
        }

        .rate {
          color: #fff;
          font-weight: 500;
        }

        .change {
          color: gold;
          font-weight: 500;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }

        /* ✅ MOBILE */
        @media (max-width: 768px) {
          .ticker-track {
            gap: 30px;
            animation: ticker-scroll 20s linear infinite;
          }

          .ticker-item {
            font-size: 12px;
          }

          .flag {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="ticker-track">
        {loopItems.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="flag">{item.flag}</span>
            <span className="pair">{item.pair}</span>
            <span className="rate">{item.value}</span>
            <span className="change">▲ {item.change}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
