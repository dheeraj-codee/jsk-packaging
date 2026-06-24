"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-28 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-[#C9A227] font-medium">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1E293B]">
            Driven By Purpose,
            <span className="text-[#C9A227]"> Focused On Excellence</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B]">
            Our commitment is to help brands create exceptional
            packaging experiences through innovation, quality and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-white rounded-[32px] p-10 border border-[#E5E7EB] shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-3xl bg-[#F8F7F3] flex items-center justify-center">
              <Target
                size={40}
                className="text-[#C9A227]"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#1E293B]">
              Our Mission
            </h3>

            <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
              To provide innovative and premium packaging solutions
              that help businesses strengthen their brand identity,
              enhance customer experience and improve product presentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
            className="bg-[#1E293B] rounded-[32px] p-10 border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center">
              <Eye
                size={40}
                className="text-[#C9A227]"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              To become one of India's most trusted packaging
              manufacturers by continuously delivering quality,
              innovation and long-term value to our clients.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}