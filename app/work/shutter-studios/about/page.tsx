import AboutHero from "./components/AboutHero";
import FounderSection from "./components/FounderSection";
import ApproachSection from "./components/ApproachSection";
import StudioStats from "./components/StudioStats";
import AboutCTA from "./components/AboutCTA";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-dark)]">
      <AboutHero />
      <FounderSection />
      <ApproachSection />
      <StudioStats />
      <AboutCTA />
      <Footer />
    </main>
  );
}
