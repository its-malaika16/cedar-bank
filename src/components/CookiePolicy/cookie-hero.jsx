import "./cookie-hero.css";

export default function CookieHero() {
    return (
        <section className="services-hero">

            {/* ✅ TOP TAG */}
            <div className="hero-tag">
                <span>● LEGAL</span>
            </div>

            {/* ✅ MAIN CARD */}
            <div className="hero-card">

                <h1>
                    Cookie<br />
                    <span>Policy</span>
                </h1>

                {/* divider */}
                <div className="divider">
                    <span></span>
                    <span className="diamond"></span>
                    <span></span>
                </div>

                <p>
                    How and why Cedar Capital Payroll uses cookies and similar technologies on this website.
                </p>

            </div>

            {/* ✅ BREADCRUMB */}
            <div className="breadcrumb">
                HOME <span>›</span> <span className="active">COOKIE POLICY</span>
            </div>

        </section>
    );
}