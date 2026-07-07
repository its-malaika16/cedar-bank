import "./policy-rules.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-section">

      <div className="privacy-card">

        <p className="last-updated">Last updated: 13 May 2026</p>

        {/* 1 */}
        <h2>1. Introduction</h2>
        <p>
          Welcome to Cedar Capital Bank. We ("we", "us", "our") are committed to protecting
          your privacy and safeguarding your personal information. This Privacy Policy
          explains how we collect, use, store, and protect the information you provide
          while using our banking application and related financial services.
        </p>

        {/* 2 */}
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal information such as your full name, email address, phone number, and residential address.</li>
          <li>Identity verification documents required for account creation and regulatory compliance.</li>
          <li>Bank account information, transaction history, and payment details.</li>
          <li>Device information including IP address, browser type, operating system, and device identifiers.</li>
          <li>Login activity, security logs, and app usage information.</li>
        </ul>

        {/* 3 */}
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your banking account.</li>
          <li>To process payments, transfers, deposits, and withdrawals.</li>
          <li>To verify your identity and prevent fraud or unauthorized access.</li>
          <li>To provide customer support and respond to your enquiries.</li>
          <li>To comply with financial regulations and legal obligations.</li>
          <li>To improve our banking services, mobile application, and customer experience.</li>
        </ul>

        {/* 4 */}
        <h2>4. Lawful Basis for Processing</h2>
        <p>
          We process your personal information in accordance with applicable data
          protection laws. Processing is necessary for providing banking services,
          fulfilling contractual obligations, complying with legal and regulatory
          requirements, protecting against fraud, and where applicable, with your
          consent.
        </p>

        {/* 5 */}
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share your data with
          regulatory authorities, payment networks, identity verification providers,
          fraud prevention services, and trusted technology partners only when
          necessary to provide secure banking services or comply with legal obligations.
        </p>

        {/* 6 */}
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to provide
          our banking services, maintain your account, resolve disputes, and comply
          with applicable financial, tax, and regulatory record-keeping requirements.
        </p>

        {/* 7 */}
        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, update,
          correct, delete, or restrict the processing of your personal information,
          request data portability, or object to certain processing activities. To
          exercise your rights, contact us at{" "}
          <span className="highlight">info@cedarcapitalbank.com</span>.
        </p>

        {/* 8 */}
        <h2>8. Security</h2>
        <p>
          We implement industry-standard security measures, including encryption,
          multi-factor authentication, secure servers, access controls, continuous
          monitoring, and fraud detection systems to protect your information from
          unauthorized access, disclosure, alteration, or loss.
        </p>

        {/* 9 */}
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or how your personal
          information is handled, please contact us at{" "}
          <span className="highlight">info@cedarcapitalbank.com</span> or{" "}
          <span className="highlight">+44 741 281 8641</span>.
        </p>

      </div>

    </section>
  );
}