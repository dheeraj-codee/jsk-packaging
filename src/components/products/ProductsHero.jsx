"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import Link from "next/link";

export default function ProductsHero() {
  return (
<section className="relative overflow-hidden bg-[#F8F7F3] pt-28 sm:pt-30 md:pt-32 lg:pt-30 pb-12 sm:pb-14 md:pb-16 lg:pb-16">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#1E293B]/5 blur-3xl" />

      {/* Decorative Boxes */}
      <div className="absolute left-10 top-32 hidden xl:block h-28 w-28 rounded-3xl border border-[#C9A227]/20 bg-white/70 rotate-12 shadow-xl" />
      <div className="absolute right-16 bottom-24 hidden xl:block h-36 w-36 rounded-[40px] border border-[#C9A227]/20 bg-white/70 -rotate-12 shadow-xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
           <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-[#C9A227]/20 text-sm text-[#C9A227] font-semibold shadow-sm">
            Premium Packaging Solutions
          </span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl  md:text-3xl lg:text-4xl font-bold leading-[1.15] text-[#1E293B]"
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
            className="mt-5 max-w-2xl mx-auto px-2 text-[15px] sm:text-base text-md leading-7 md:leading-8 text-[#64748B]"
          >
            Explore our premium collection of rigid boxes,
            mono cartons, labels, jewellery boxes,
            gift boxes and customized packaging solutions
            crafted with precision, innovation and unmatched quality.
          </motion.p>

         

          {/* Stats */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

            {[
              ["1000+", "Projects"],
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