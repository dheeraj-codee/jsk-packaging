"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Cog,
  ShieldCheck,
  Users,
  Package,
} from "lucide-react";

export default function Infrastructure() {
  const features = [
    {
      icon: Cog,
      title: "Advanced Machinery",
      desc: "Modern equipment for precision manufacturing and premium finishing.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      desc: "Strict quality checks at every stage of production.",
    },
    {
      icon: Package,
      title: "Production Capacity",
      desc: "Efficient handling of both small and bulk packaging orders.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      desc: "Experienced professionals ensuring excellence in every project.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
            Infrastructure
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]">
            Built For Quality &
            <span className="text-[#C9A227]"> Scale</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <img
              src="/infrastructure.jpg"
              alt="Infrastructure"
              className="w-full h-[700px] object-cover rounded-[32px] shadow-2xl"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .1 }}
                className="bg-[#F8F7F3] p-8 rounded-3xl border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <item.icon
                    size={26}
                    className="text-[#C9A227]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#1E293B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#64748B]">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}