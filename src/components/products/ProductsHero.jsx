"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#1E293B]/5 blur-3xl" />

      {/* Decorative Boxes */}
      <div className="absolute left-10 top-32 hidden xl:block h-28 w-28 rounded-3xl border border-[#C9A227]/20 bg-white/70 rotate-12 shadow-xl" />
      <div className="absolute right-16 bottom-24 hidden xl:block h-36 w-36 rounded-[40px] border border-[#C9A227]/20 bg-white/70 -rotate-12 shadow-xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white px-4 py-2 md:px-6 md:py-3 shadow-md"
          >
            <PackageCheck className="w-4 h-4 md:w-5 md:h-5 text-[#C9A227]" />

            <span className="text-sm md:text-base font-semibold text-[#C9A227]">
              Premium Packaging Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl  md:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#1E293B]"
          >
            Packaging That{" "}
            <span className="text-[#C9A227]">
              Elevates Your Brand
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-2xl mx-auto px-2 text-[15px] sm:text-base md:text-lg leading-7 md:leading-8 text-[#64748B]"
          >
            Explore our premium collection of rigid boxes,
            mono cartons, labels, jewellery boxes,
            gift boxes and customized packaging solutions
            crafted with precision, innovation and unmatched quality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 md:px-8 md:py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#B8921F]"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full border-2 border-[#1E293B] px-7 py-3.5 md:px-8 md:py-4 font-semibold text-[#1E293B] transition-all duration-300 hover:bg-[#1E293B] hover:text-white"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

            {[
              ["500+", "Projects"],
              ["100%", "Custom Design"],
              ["Premium", "Quality"],
              ["Fast", "Delivery"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl md:rounded-3xl border border-white bg-white/80 backdrop-blur-md p-4 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#C9A227]">
                  {value}
                </h3>

                <p className="mt-1 text-sm md:text-base text-[#64748B]">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}