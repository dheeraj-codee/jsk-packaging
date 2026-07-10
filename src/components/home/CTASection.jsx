import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
export default function CTASection() {
  return (
    <section className="py-16 bg-[#1E293B] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-10 lg:p-16 text-center">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#C9A227]/20 text-[#C9A227] font-medium">
            Let's Build Something Great
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready To Elevate Your
            <span className="text-[#C9A227]"> Packaging?</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-relaxed">
            Whether you need premium rigid boxes, mono cartons,
            labels, jewellery boxes or custom packaging solutions,
            our team is ready to help bring your vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <div className="flex flex-wrap justify-center gap-4 mt-10">
  <Link
    href="/products"
    className="px-8 py-4 bg-[#C9A227] text-white rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
  >
    View Products
    <ArrowRight size={18} />
  </Link>

  <Link
    href="/contact"
    className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-white hover:text-[#1E293B] transition"
  >
    <PhoneCall size={18} />
    Call Now
  </Link>
</div>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-[#C9A227]">
                150+
              </h3>
              <p className="text-gray-300 mt-2">
                Packaging Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A227]">
                50+
              </h3>
              <p className="text-gray-300 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A227]">
                5+
              </h3>
              <p className="text-gray-300 mt-2">
                Years Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
