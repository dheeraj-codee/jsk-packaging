"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-[#C9A227]/20 text-sm text-[#C9A227] font-semibold shadow-sm">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] leading-tight">
            Driven By Purpose,
            <span className="text-[#C9A227]"> Focused On Excellence</span>
          </h2>

          <p className="mt-6 text-md text-[#64748B] leading-8">
            Every package we create reflects our commitment to quality,
            innovation and customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[32px] bg-white border border-[#ECECEC] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C9A227]/5 group-hover:scale-110 transition duration-700" />

            {/* Top Border */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#C9A227] via-[#F5D76E] to-[#C9A227]" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-[#FFF7E5] flex items-center justify-center shadow-md">
                <Target size={40} className="text-[#C9A227]" />
              </div>

              <span className="inline-block mt-8 text-sm uppercase tracking-[4px] font-semibold text-[#C9A227]">
                Our Mission
              </span>

              <h3 className="mt-3 text-3xl font-bold text-[#1E293B]">
                Creating Packaging
                <br />
                That Builds Brands
              </h3>

              <p className="mt-6 text-md text-[#64748B] leading-8">
                We provide innovative and premium packaging solutions
                that strengthen brand identity, improve product
                presentation and create memorable customer experiences
                with uncompromising quality.
              </p>

            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="group relative overflow-hidden rounded-[32px] bg-[#1E293B] border border-white/10 p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 group-hover:scale-110 transition duration-700" />

            {/* Top Border */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#C9A227] via-[#F5D76E] to-[#C9A227]" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
                <Eye size={40} className="text-[#C9A227]" />
              </div>

              <span className="inline-block mt-8 text-sm uppercase tracking-[4px] font-semibold text-[#C9A227]">
                Our Vision
              </span>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Becoming India's
                <br />
                Trusted Packaging Partner
              </h3>

              <p className="mt-6 text-md text-gray-300 leading-8">
                Our vision is to become one of India's most trusted
                packaging manufacturers by delivering exceptional
                quality, continuous innovation and sustainable value
                that helps businesses grow with confidence.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}