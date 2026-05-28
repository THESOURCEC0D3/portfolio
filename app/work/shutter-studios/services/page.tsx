import ServicesHero from "./components/ServicesHero";
import ServicePackages from "./components/ServicePackages";
import ServiceFaq from "./components/ServiceFaq";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-[var(--color-dark)]">
      <ServicesHero />
      <ServicePackages />
      <ServiceFaq />
      <ContactCTA />
      <Footer />
    </main>
  );
}
