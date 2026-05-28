import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import ServicesPreview from "./components/ServicesPreview";
import FeaturedGallery from "./components/FeaturedGallery";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function ShutterStudiosHome() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedGallery />
      <ContactCTA />
      <Footer />
    </main>
  );
}
