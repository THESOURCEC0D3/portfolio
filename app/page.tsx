import PortfolioNaviagtion from "./components/PortfolioNavigation";
import PortfolioHero from "./components/PortfolioHero";
import FeaturedWork from "./components/FeaturedWork";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function PortfolioHome() {
  return (
    <main className="bg-[var(--color-pf-dark)]">
      <PortfolioNaviagtion />
      <PortfolioHero />
      <FeaturedWork />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
