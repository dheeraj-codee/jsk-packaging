"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirement: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
try {
  await emailjs.send(
    "service_p7xwcpa",
    "template_ea784is",
    {
      from_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      company: formData.company || "N/A",
      requirement: formData.requirement || "N/A",
      message: formData.message || "N/A",
    },
    "eMvSxC-Onr7GMqQ2R"
  );

  setShowSuccess(true);

  setFormData({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirement: "",
    message: "",
  });

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);
} catch (err) {
  console.error("EmailJS Error:", err);
  setError("Something went wrong. Please try again.");
} finally {
  setIsSubmitting(false);
}
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="bg-[#1E293B] rounded-[32px] p-10 lg:p-12 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A227]/20 blur-[120px]" />

            <span className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider">
              Contact Information
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
              Let's Discuss Your Packaging Project
            </h2>

            <p className="text-[15px] text-slate-300 mt-4 leading-7">
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

                  
                   <a href="tel:+919314235578"
                    className="block text-[15px] text-slate-300 hover:text-[#C9A227] transition"
                  >
                    +91 93142 35578
                  </a>
                  
                   <a href="tel:+919828411787"
                    className="block text-[15px] text-slate-300 hover:text-[#C9A227] transition"
                  >
                    +91 98284 11787
                  </a>


                </div>

              </div>

              {/* Email */}

              <div className="flex gap-5 items-start">

                <div className="w-14 h-14 rounded-2xl bg-[#C9A227] flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>

                <div className="flex flex-col">
                  
                   <a
  href="mailto:info@jskpackaging.in"
  className="text-[15px] text-slate-300 hover:text-[#C9A227] transition break-all"
>
  info@jskpackaging.in
</a>

<a
  href="mailto:jskpackaging22@gmail.com"
  className="text-[15px] text-slate-300 hover:text-[#C9A227] transition break-all"
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
  className="text-[15px] text-slate-300 hover:text-[#C9A227] transition leading-7"
>
  D-25, Sudarshanpura Industrial Area,
  <br />
  22 Godam, Jaipur, Rajasthan
</a>

              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-12">

              <p className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider mb-5">
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
  href="https://www.instagram.com/jsk.packaging/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300"
>
  <FaInstagram size={18} />
</a>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <span className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider">
              Request A Quote
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-[#1E293B] mt-2 leading-tight">
              Let's Discuss Your Project
            </h3>

            <p className="text-[15px] text-[#64748B] mt-3 leading-7">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="h-12 px-4 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="h-12 px-4 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="h-12 px-4 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="h-12 px-4 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
                />

              </div>

              <input
                type="text"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Packaging Requirement"
                className="w-full h-12 px-4 mt-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your packaging requirements..."
                className="w-full px-4 py-3 mt-5 rounded-xl bg-white text-[#1E293B] placeholder:text-slate-500 border border-slate-200 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 transition-all outline-none resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 h-12 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#D8B54A] text-white font-semibold shadow-lg shadow-[#C9A227]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A227]/40 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Submitting..." : "Request A Quote"}
              </button>

              {showSuccess && (
                <p className="mt-4 text-center text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="mt-4 text-center text-red-600 font-medium">
                  {error}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}