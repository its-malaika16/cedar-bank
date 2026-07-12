import "./officemap-section.css";

const offices = [
  {
    city: "Manchester",
    country: "UNITED KINGDOM",
    embed: "https://www.google.com/maps?q=Manchester&output=embed",
    link: "https://maps.google.com/?q=Manchester"
  },
  {
    city: "Delaware",
    country: "UNITED STATES",
    embed: "https://www.google.com/maps?q=Delaware&output=embed",
    link: "https://maps.google.com/?q=Delaware"
  },
  {
    city: "Beirut",
    country: "LEBANON",
    embed: "https://www.google.com/maps?q=Beirut&output=embed",
    link: "https://maps.apple.com/?q=Beirut"
  },
  {
    city: "Dubai",
    country: "UNITED ARAB EMIRATES",
    embed: "https://www.google.com/maps?q=Dubai&output=embed",
    link: "https://maps.apple.com/?q=Dubai"
  }
];

export default function OfficesSection() {
  return (
    <section className="offices">
      <div className="container">

      {/* HEADER */}
      <div className="header">
        <span className="subheading">OUR OFFICES</span>
        <h2>
          Find us <span className="gold yellow-text">around the world.</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="offices-grid">
        {offices.map((office, i) => (
          <div className="office-card" key={i}>

            {/* MAP */}
            <div className="map-wrap">
              <iframe
                src={office.embed}
                title={office.city}
                loading="lazy"
              />

              {/* BUTTON */}
              <a href={office.link} target="_blank" rel="noreferrer">
                Open in Maps ↗
              </a>
            </div>

            {/* INFO */}
            <div className="office-info">
              <h4>{office.city}</h4>
              <p>{office.country}</p>
            </div>

          </div>
        ))}
      </div>
</div>
    </section>
  );
}
``