import "./cookie-rules.css";

export default function CookieRules() {
    return (
        <section className="privacy-section">

            <div className="privacy-card">

                <p className="last-updated">Last updated: 13 May 2026</p>

                {/* 1 */}
                <h2>1. What Are Cookies?</h2>
                <p>
                    Cookies are small text files stored on your device when you use our
                    banking website or mobile application. They help provide secure access,
                    remember your preferences, improve functionality, and enhance your
                    overall banking experience.
                </p>

                {/* 2 */}
                <h2>2. How We Use Cookies</h2>
                <ul>
                    <li>Essential cookies — required for secure login, authentication, session management, and core banking functionality.</li>
                    <li>Security cookies — help detect suspicious activity, prevent fraud, and protect your account from unauthorized access.</li>
                    <li>Performance cookies — allow us to understand how customers use our services so we can improve performance and reliability.</li>
                    <li>Functional cookies — remember your preferences, such as language, accessibility settings, and other personalized options.</li>
                </ul>

                {/* 3 */}
                <h2>3. Third-Party Cookies</h2>
                <p>
                    We may use trusted third-party service providers, such as analytics,
                    security, and fraud detection partners, that may place cookies on your
                    device. These providers process information in accordance with their
                    own privacy policies and applicable data protection laws.
                </p>

                {/* 4 */}
                <h2>4. Managing Cookies</h2>
                <p>
                    You can manage or disable cookies through your browser or device
                    settings at any time. However, disabling essential or security cookies
                    may prevent you from accessing certain banking features or securely
                    using your account.
                </p>

                {/* 5 */}
                <h2>5. Updates to This Policy</h2>
                <p>
                    We may update this Cookie Policy from time to time to reflect changes
                    in technology, legal requirements, or our services. Any updates will
                    be published on this page with the revised "Last updated" date.
                </p>

                {/* 6 */}
                <h2>6. Contact</h2>
                <p>
                    If you have any questions about our use of cookies, please contact us
                    at <span className="highlight">info@cedarcapitalbank.com</span>.
                </p>

            </div>

        </section>
    );
}