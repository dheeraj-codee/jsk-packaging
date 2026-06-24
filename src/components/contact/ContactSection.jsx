
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="bg-[#1E293B] rounded-[32px] p-10 lg:p-12 text-white relative overflow-hidden">

  <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A227]/20 blur-[120px]" />

  <span className="text-[#C9A227] font-semibold">
    Contact Information
  </span>

  <h2 className="text-4xl font-bold mt-4">
    Let's Discuss Your Packaging Project
  </h2>

  <p className="text-slate-300 mt-5 leading-relaxed">
    Whether you need rigid boxes, mono cartons,
    labels or luxury packaging, our team is ready
    to provide the perfect solution.
  </p>

  <div className="mt-12 space-y-8">

    {/* Phone */}

    <div className="flex gap-5 items-start">

      <div className="w-14 h-14 rounded-2xl bg-[#C9A227] flex items-center justify-center shrink-0">
        <Phone size={24} />
      </div>

      <div>
        <a
          href="tel:+919828411787"
          className="block text-lg text-slate-300 hover:text-[#C9A227] transition"
        >
          +91 98284 11787
        </a>

        <a
          href="tel:+919314235578"
          className="block text-lg text-slate-300 hover:text-[#C9A227] transition"
        >
          +91 93142 35578
        </a>
      </div>

    </div>

    {/* Email */}

    <div className="flex gap-5 items-start">

      <div className="w-14 h-14 rounded-2xl bg-[#C9A227] flex items-center justify-center shrink-0">
        <Mail size={24} />
      </div>

      <div>
        <a
          href="mailto:jskpackaging22@gmail.com"
          className="text-lg text-slate-300 hover:text-[#C9A227] transition break-all"
        >
          jskpackaging22@gmail.com
        </a>
      </div>

    </div>

    {/* Address */}

    <div className="flex gap-5 items-start">

      <div className="w-14 h-14 rounded-2xl bg-[#C9A227] flex items-center justify-center shrink-0">
        <MapPin size={24} />
      </div>

      <a
        href="https://maps.google.com/?q=D-25 Sudarshanpura Industrial Area Jaipur"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-slate-300 hover:text-[#C9A227] transition leading-relaxed"
      >
        D-25, Sudarshanpura Industrial Area,
        22 Godam, Jaipur, Rajasthan
      </a>

    </div>

  </div>

  {/* Social Icons */}

  <div className="mt-12">

    <p className="text-[#C9A227] font-medium mb-5">
      Follow Us
    </p>

    <div className="flex gap-4">

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300"
      >
        <FaFacebookF size={18} />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300"
      >
        <FaInstagram size={18} />
      </a>

    </div>

  </div>

</div>

          {/* RIGHT FORM */}

          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

  <span className="text-[#C9A227] font-semibold">
    Request A Quote
  </span>

  <h3 className="text-3xl font-bold text-[#1E293B] mt-2">
    Let's Discuss Your Project
  </h3>

  <p className="text-[#64748B] mt-3">
    Fill out the form and our team will get back to you shortly.
  </p>

  <form className="mt-8">

    <div className="grid md:grid-cols-2 gap-5">

      <input
        type="text"
        placeholder="Full Name"
        className="h-14 px-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="h-14 px-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="h-14 px-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
      />

      <input
        type="text"
        placeholder="Company Name"
        className="h-14 px-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
      />

    </div>

    <input
      type="text"
      placeholder="Packaging Requirement"
      className="w-full h-14 px-5 mt-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
    />

    <textarea
      rows="6"
      placeholder="Tell us about your packaging requirements..."
      className="w-full px-5 py-4 mt-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none resize-none"
    />

    <button
      type="submit"
      className="w-full mt-6 h-14 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#D8B54A] text-white font-semibold shadow-lg shadow-[#C9A227]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A227]/40 transition-all duration-300"
    >
      Request A Quote
    </button>

  </form>

</div>

        </div>

      </div>
    </section>
  );
}