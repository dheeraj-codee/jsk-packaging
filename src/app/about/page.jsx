import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Infrastructure from "@/components/about/Infrastructure";

import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About JSK Packaging | Premium Packaging Manufacturer",
  description:
    "Learn about JSK Packaging, a trusted manufacturer of premium rigid boxes, mono cartons, labels, jewellery boxes and custom packaging solutions.",
};

export default function AboutPage() {
  return (
    <>

      <main>
        <AboutHero />

        <CompanyStory />

        <MissionVision />

        <Infrastructure />


        <CTASection />
      </main>

    </>
  );
}