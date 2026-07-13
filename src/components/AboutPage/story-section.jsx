import "./story-section.css";

export default function StorySection() {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-container">

          {/* LEFT CONTENT */}
          <div className="story-left">
            <span className="tag subheading">OUR STORY</span>

            <h2>
              Built on trust, <span className="yellow-text">driven by precision.</span>
            </h2>

            <p>
              Cedar Capital was founded with a simple belief: businesses deserve
              better banking. Too many companies were stuck with outdated
              systems, compliance headaches, and constant uncertainty.
            </p>

            <p>
              With decades of experience in financial infrastructure and payroll
              management, we built a system designed to remove friction from
              global finance combining deep expertise with modern technology.
            </p>

            <p>
              Today, we serve businesses worldwide, delivering consistent,
              reliable, and scalable financial services.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="story-right">
            <div className="founder-card">
              <div className="avatar">
                <img src="assets/images/Ali_Sir2.jpeg"
                  alt="Ali A Hammoud"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <h3>Ali A Hammoud</h3>

              <p className="role">
                Founder · Chief Executive Officer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}