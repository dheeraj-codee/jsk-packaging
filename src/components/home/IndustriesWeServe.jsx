import {
  Pill,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  Gift,
  Store,
} from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: ShoppingBag,
      title: "FMCG",
      desc: "Packaging solutions for consumer goods, personal care and daily essentials.",
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      desc: "Mono cartons, labels and custom packaging for medicines and healthcare products.",
    },
    {
      icon: Sparkles,
      title: "Cosmetics",
      desc: "Luxury packaging for skincare, beauty and cosmetic brands.",
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Beverage",
      desc: "Custom packaging for sweets, snacks, juices and food products.",
    },
    {
      icon: Store,
      title: "Retail Brands",
      desc: "Premium retail packaging designed to elevate product presentation.",
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      desc: "Elegant gift boxes and premium packaging for corporate gifting.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]">
            Packaging Solutions Across
            <span className="text-[#C9A227]"> Multiple Industries</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B]">
            From FMCG and cosmetics to pharmaceuticals and corporate gifting,
            we create packaging solutions tailored to industry-specific needs.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:mx-0 md:px-0 md:pb-0 lg:grid-cols-3 mt-16">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group min-w-[80%] snap-center md:min-w-0 bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-md shadow-black/5 text-center flex flex-col items-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#C9A227]/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F7F3] flex items-center justify-center transition-all duration-500 group-hover:bg-[#C9A227] group-hover:scale-110">
                <item.icon
                  size={30}
                  className="text-[#C9A227] transition-colors duration-500 group-hover:text-white"
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