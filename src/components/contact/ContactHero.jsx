import { Phone, ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E293B]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">

        <div className="flex flex-col items-center text-center">

          {/* Badge */}

          <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#1E293B] text-sm font-medium">
            Premium Packaging Manufacturer in Jaipur
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#1E293B]">
            Let's Create
            <span className="text-[#C9A227]"> Packaging </span>
            That Elevates Your Brand
          </h1>

          {/* Description */}

          <p className="mt-6 text-md text-[#334155] leading-relaxed max-w-3xl">
            Whether you need premium rigid boxes, mono cartons,
            product labels, jewellery boxes, gift boxes or fully
            customized packaging, our experts are ready to help
            bring your vision to life with high-quality packaging
            solutions.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="#contact-form"
              className="px-7 py-4 rounded-xl bg-[#C9A227] text-white font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+919314235578"
              className="px-7 py-4 rounded-xl border border-[#1E293B] text-[#1E293B] font-semibold hover:bg-[#1E293B] hover:text-white transition flex items-center gap-2"
            >
              <Phone size={18} />
              Call Our Expert
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}