import PortfolioHero from "./components/PortfolioHero";
import FeaturedWork from "./components/FeaturedWork";
import AboutSection from "./components/AboutSection";

export default function PortfolioHome() {
  return (
    <main className="bg-[var(--color-pf-dark)]">
      <PortfolioHero />
      <FeaturedWork />
      <AboutSection />
    </main>
  );
}
