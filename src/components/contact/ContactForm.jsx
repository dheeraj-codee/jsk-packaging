"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
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
          from_email: formData.email,
          company: formData.company,
          requirement: formData.requirement,
          message: formData.message,
        },
        "eMvSxC-Onr7GMqQ2R"
      );

      setIsSubmitting(false);
      setShowSuccess(true);

      // reset form fields
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        requirement: "",
        message: "",
      });

      // hide success message after 3 sec
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsSubmitting(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#C9A227] font-semibold">
            Request A Quote
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            Tell Us About Your Packaging Requirement
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-sm border border-[#E5E7EB]"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

          </div>

          <input
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Packaging Requirement"
            className="w-full border border-[#E5E7EB] rounded-xl px-5 py-4 mt-6 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full border border-[#E5E7EB] rounded-xl px-5 py-4 mt-6 outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 bg-[#C9A227] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {showSuccess && (
            <p className="mt-4 text-green-600 font-medium">
              Message sent successfully!
            </p>
          )}

          {error && (
            <p className="mt-4 text-red-600 font-medium">
              {error}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}