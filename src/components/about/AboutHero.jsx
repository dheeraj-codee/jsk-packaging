"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] min-h-[90vh] flex items-center">

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1E293B]/10 rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-10 py-24 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#C9A227] font-medium">
              About JSK Packaging
            </span>

            <h1 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#1E293B]">
              Premium Packaging
              <br />
              Solutions Built To
              <span className="text-[#C9A227]">
                {" "}Elevate Brands
              </span>
            </h1>

            <p className="mt-8 text-base text-[#64748B] textmd leading-relaxed max-w-xl">
              Founded in 2021 by <span className="font-semibold text-[#1E293B]">Amit Khandelwal</span> and{" "}
              <span className="font-semibold text-[#1E293B]">Jatin Khandelwal</span>,
              JSK Packaging specializes in rigid boxes, jewellery boxes,
              sweet boxes, gift boxes and end packaging solutions designed
              to enhance product presentation and strengthen brand value.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#E5E7EB] px-5 py-3 shadow-sm">
                <span className="text-xl font-bold text-[#C9A227]">1000+</span>
                <span className="text-sm text-[#64748B]">Boxes Supplied</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#E5E7EB] px-5 py-3 shadow-sm">
                <span className="text-xl font-bold text-[#C9A227]">50+</span>
                <span className="text-sm text-[#64748B]">Happy Customers</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Link
                href="/products"
                className="px-7 py-4 rounded-xl bg-[#C9A227] text-white font-semibold hover:scale-105 transition flex items-center gap-2"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl border border-[#1E293B] text-[#1E293B] font-semibold hover:bg-[#1E293B] hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="absolute -inset-6 bg-[#C9A227]/10 blur-3xl rounded-[40px]" />

            <img
              src="/images/about/about-hero-2.png"
              alt="JSK Packaging"
              className="relative rounded-[32px] shadow-2xl w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}