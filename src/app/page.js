import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "JSK Packaging | Premium Rigid Boxes Manufacturer in Jaipur",
  description:
    "Deals in all kind of premium rigid boxes — mono cartons, jewellery boxes, gift boxes, sweet boxes, window boxes, labels and luxury packaging. Based in Jaipur, Rajasthan.",
  alternates: {
    canonical: "https://jskpackaging.in",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <IndustriesWeServe />
      <TrustedBrands />
      <WhyChooseUs />
      <ManufacturingProcess />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}