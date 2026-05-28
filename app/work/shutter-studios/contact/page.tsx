import ContactHero from "./components/ContactHero";
import ContactMethods from "./components/ContactMethods";
import InquiryForm from "./components/InquiryForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-dark)]">
      <ContactHero />
      <ContactMethods />
      <InquiryForm />
      <Footer />
    </main>
  );
}
