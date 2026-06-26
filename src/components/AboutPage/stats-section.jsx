import "./stats-section.css";

export default function AboutStatsSection() {
  return (
    <section className="about-stats">
      <div className="container">

      <div className="about-container">

        {/* ✅ LEFT TEXT */}
        <div className="about-left">

          <p>
            We didn't start as a traditional software vendor — the platform was shaped
            through real-world financial operations, designed to handle complex banking
            workflows, high-volume transactions, and regulatory requirements from day one.
          </p>

          <p>
            Today, Cedar Capital Bank supports financial institutions, fintech companies,
            and global organizations across multiple regions, enabling them to launch and
            operate banking services with speed, control, and confidence.
          </p>

          <p>
            Our teams span engineering, financial systems, compliance, and product design,
            working across major global hubs including London, Dubai, and Singapore. Every
            layer of the platform is built with precision — from transaction processing and
            reconciliation to security, uptime, and regulatory alignment.
          </p>

          <p>
            We believe the future of banking infrastructure belongs to systems that are
            flexible, resilient, and built for constant evolution. That is the foundation we
            continue to build on.
          </p>

        </div>

        {/* ✅ RIGHT STATS */}
        <div className="about-right">

          <div className="stat">
            <h3>10K+</h3>
            <span>Transactions Processed Monthly</span>
          </div>

          <div className="stat">
            <h3>1000+</h3>
            <span>Active Users</span>
          </div>

          <div className="stat">
            <h3>97.9%</h3>
            <span>Platform Uptime Reliability</span>
          </div>

        </div>

      </div>
</div>
    </section>
  );
}