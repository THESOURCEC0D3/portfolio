import PortfolioNaviagtion from "./components/PortfolioNavigation";
import PortfolioHero from "./components/PortfolioHero";
import FeaturedWork from "./components/FeaturedWork";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import MotionProvider from "./components/motion/MotionProvider";

export default function PortfolioHome() {
  return (
    <main className="bg-pf-dark">
      {/* Scroll reveals start hidden and need JS to play; without JS, show
          everything immediately */}
      <noscript>
        <style>
          {`[data-reveal]{opacity:1!important;transform:none!important}`}
        </style>
      </noscript>
      <MotionProvider>
        <PortfolioNaviagtion />
        <PortfolioHero />
        <FeaturedWork />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </MotionProvider>
    </main>
  );
}
