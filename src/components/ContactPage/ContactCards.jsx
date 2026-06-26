import "./ContactCards.css";

/* ✅ SVG ICONS */
const icons = {
  phone: (
    <svg viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.06 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.9.36 1.78.7 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.16a2 2 0 012.11-.45c.82.34 1.7.58 2.6.7A2 2 0 0122 16.92z" />
    </svg>
  ),

  email: (
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16v16H4z" />
      <path d="M4 4l8 8 8-8" />
    </svg>
  ),

  location: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),

  time: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
};

const cards = [
  {
    title: "Phone",
    main: "+971 50 429 4194",
    sub: "Mon–Fri 9am–5pm",
    icon: icons.phone
  },
  {
    title: "Email",
    main: "support@cedarpayroll.com",
    sub: "We’ll respond within 24 hours",
    icon: icons.email
  },
  {
    title: "Offices",
    main: "Manchester · Delaware · Beirut · Dubai",
    sub: "Four global locations",
    icon: icons.location
  },
  {
    title: "Business Hours",
    main: "Monday – Friday",
    sub: "9:00 AM – 5:00 PM",
    icon: icons.time
  }
];

export default function ContactCards() {
  return (
    <section className="contact-section">

      <div className="contact-grid">

        {cards.map((item, i) => (
          <div key={i} className="contact-card">

            <div className="icon-box">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p className="main">{item.main}</p>
            <span className="sub">{item.sub}</span>

          </div>
        ))}

      </div>

    </section>
  );
}
