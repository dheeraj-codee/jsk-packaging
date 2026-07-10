import {
  Award,
  Package,
  Truck,
  Palette,
  BadgeCheck,
  Factory,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "High-quality materials and luxury finishing for a premium packaging experience.",
    },
    {
      icon: Palette,
      title: "Custom Design",
      desc: "Tailor-made packaging solutions designed specifically for your brand.",
    },
    {
      icon: Factory,
      title: "Modern Manufacturing",
      desc: "Advanced production techniques ensuring consistency and precision.",
    },
    {
      icon: Package,
      title: "Bulk Production",
      desc: "Efficient manufacturing capabilities for small and large-volume orders.",
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      desc: "Fast turnaround times and reliable delivery schedules.",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Partner",
      desc: "Preferred packaging partner for growing brands and businesses.",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-[#C9A227] font-medium">
            Why Choose JSK Packaging
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]">
            Packaging Excellence That
            <span className="text-[#C9A227]"> Builds Brands</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B]">
            We combine premium materials, innovative designs,
            and modern manufacturing to create packaging that
            enhances product value and brand perception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E5E7EB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
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