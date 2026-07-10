import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-packaging.jpg"
                alt="JSK Packaging Manufacturing"
                className="w-full h-[600px] object-cover"
              />
            </div>

           
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
              About JSK Packaging
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
              Crafting Premium Packaging
              Solutions For Modern Brands
            </h2>

            <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
              JSK Packaging is a trusted packaging manufacturer based in Jaipur,
              specializing in premium rigid boxes, mono cartons, labels,
              jewellery boxes, sweet boxes and custom packaging solutions.
            </p>

            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              We help businesses create memorable unboxing experiences through
              innovative packaging designs, superior materials and high-quality
              printing technologies.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C9A227]" />
                <span className="text-[#334155]">
                  Premium Quality Materials
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C9A227]" />
                <span className="text-[#334155]">
                  Custom Packaging Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C9A227]" />
                <span className="text-[#334155]">
                  Modern Printing Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C9A227]" />
                <span className="text-[#334155]">
                  Bulk Manufacturing Support
                </span>
              </div>

            </div>

            {/* Stats */}
            

            <button className="mt-10 px-8 py-4 bg-[#C9A227] text-white rounded-xl font-medium hover:scale-105 transition">
              Explore Our Products
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}