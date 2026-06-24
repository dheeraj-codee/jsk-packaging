import CountUp from "@/components/CountUp";
import {
  Package,
  ShieldCheck,
  Truck,
  Award,
  Boxes,
  Sparkles,
} from "lucide-react";

export default function TrustedBrands() {
  const features = [
    {
      icon: Package,
      title: "Custom Packaging",
      desc: "Tailor-made packaging solutions for every product category.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      desc: "High-quality materials with luxury finishing options.",
    },
    {
      icon: Boxes,
      title: "Bulk Production",
      desc: "Efficient manufacturing for small and large-scale orders.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      desc: "Trusted by brands for consistent quality and timely delivery.",
    },
    {
      icon: Truck,
      title: "Fast Dispatch",
      desc: "Quick production and delivery across India.",
    },
    {
      icon: Sparkles,
      title: "Modern Printing",
      desc: "Advanced printing techniques with premium finishing.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
            Why Leading Brands Choose Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1E293B]">
            Trusted Packaging Partner For
            <span className="text-[#C9A227]"> Growing Brands</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
            We help businesses create premium packaging experiences through
            innovative design, superior materials and world-class printing
            solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-[#F8F7F3] rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#1E293B]">
  <CountUp end={150} suffix="+" />
</h3>
            <p className="mt-2 text-[#64748B]">
              Packaging Projects
            </p>
          </div>

          <div className="bg-[#F8F7F3] rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#1E293B]">
  <CountUp end={50} suffix="+" />
</h3>
            <p className="mt-2 text-[#64748B]">
              Happy Clients
            </p>
          </div>

          <div className="bg-[#F8F7F3] rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#1E293B]">
  <CountUp end={5} suffix="+" />
            </h3>
            <p className="mt-2 text-[#64748B]">
              Years Experience
            </p>
          </div>

          <div className="bg-[#F8F7F3] rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#1E293B]">
  <CountUp end={100} suffix="%" />
</h3>
            <p className="mt-2 text-[#64748B]">
              Quality Focused
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E5E7EB] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F7F3] flex items-center justify-center">
                <item.icon
                  size={30}
                  className="text-[#C9A227]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#1E293B]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#64748B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}