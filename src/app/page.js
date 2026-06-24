import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProducts />
        <IndustriesWeServe />
        <TrustedBrands />
        <AboutSection />
        <WhyChooseUs />
        <ManufacturingProcess />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
    </>
  );
}