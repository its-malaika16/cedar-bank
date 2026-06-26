import "./contact-section.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
<div className="container">
      <div className="contact-container">

        {/* ✅ LEFT SIDE */}
        <div className="contact-left">

          {/* EMAIL */}
          <div className="info-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18v12H3z"/>
                <path d="M3 6l9 7 9-7"/>
              </svg>
            </div>
            <div>
              <span className="label">EMAIL</span>
              <p>info@cedarcapitalbank.com</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="info-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h4l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v4c0 1-1 2-2 2a17 17 0 0 1-17-17c0-1 1-2 2-2z"/>
              </svg>
            </div>
            <div>
              <span className="label">PHONE</span>
              <p>+44 741 281 8641</p>
            </div>
          </div>

          {/* HQ */}
          <div className="info-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="10" r="3"/>
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z"/>
              </svg>
            </div>
            <div>
              <span className="label">HQ</span>
              <p>Manchester · Delaware · Beirut · Dubai</p>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="support-box">
            <h4>Already a customer?</h4>
            <p>
              Reach our 24/7 support desk at{" "}
              <span>info@cedarcapitalbank.com</span>
            </p>
          </div>

        </div>

        {/* ✅ RIGHT SIDE FORM */}
        <div className="contact-right">

          <form className="form">

            <div className="row">
              <input placeholder="First name" />
              <input placeholder="Last name" />
            </div>

            <div className="row">
              <input placeholder="Work email" />
              <input placeholder="Company" />
            </div>

            <div className="row">
              <select>
                <option>Select...</option>
                <option>Finance</option>
                <option>Tech</option>
                <option>Retail</option>
              </select>
              <input placeholder="Location" />
            </div>

            <textarea placeholder="Tell us about your project..." />

            <button type="submit">Send message</button>

            <small>
              By submitting, you agree to our privacy policy.
            </small>

          </form>

        </div>

      </div>
</div>
    </section>
  );
}