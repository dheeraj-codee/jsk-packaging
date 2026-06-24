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

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#C9A227] font-medium">
              About JSK Packaging
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-[#1E293B]">
              Premium Packaging
              <br />
              Solutions Built To
              <span className="text-[#C9A227]">
                {" "}Elevate Brands
              </span>
            </h1>

            <p className="mt-8 text-xl text-[#64748B] leading-relaxed max-w-xl">
              JSK Packaging specializes in rigid boxes,
              mono cartons, labels, jewellery boxes and
              luxury custom packaging designed to enhance
              product presentation and strengthen brand value.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-white rounded-xl font-medium hover:bg-[#b89220] transition"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-[#1E293B] text-[#1E293B] rounded-xl font-medium hover:bg-[#1E293B] hover:text-white transition"
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
            className="relative"
          >

            <div className="absolute -inset-6 bg-[#C9A227]/10 blur-3xl rounded-[40px]" />

            <img
              src="/about-hero.jpg"
              alt="JSK Packaging"
              className="relative rounded-[32px] shadow-2xl h-[650px] w-full object-cover"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}