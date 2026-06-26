import Hero from "../components/HomePage/home-hero";
import CurrencyTicker from "../components/HomePage/CurrencyTicker";
import WhyCedarSection from "../components/HomePage/WhyCedarSection";
import Capabilities from "../components/HomePage/Capabilities";
import TechSection from "../components/HomePage/TechSection";
import ReviewSection from "../components/HomePage/ReviewSection";
import CtaSection from "../components/CTASection";

export default function Home() {
  return (
    <>
    <Hero />
    <CurrencyTicker/>
    <WhyCedarSection />
    <Capabilities />
    <TechSection />
    <ReviewSection />
    <CtaSection />
    </>
  );
}

    
