import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import WhyAtkool from "./components/WhyAtkool";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <WhyAtkool />
      <div className="section-divider" />
      <CTASection />
      <Footer />
    </main>
  );
}
