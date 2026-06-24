import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactSection";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <GoogleMap />
    </>
  );
}