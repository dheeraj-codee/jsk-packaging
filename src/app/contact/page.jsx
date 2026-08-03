import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import GoogleMap from "@/components/contact/GoogleMap";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with JSK Packaging in Jaipur for custom rigid boxes, mono cartons and packaging solutions. Call +91 93142 35578 or email info@jskpackaging.in.",
  alternates: {
    canonical: "https://jskpackaging.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <GoogleMap />
    </>
  );
}