"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CompanyStory() {
  const features = [
    "Premium Packaging Solutions",
    "Advanced Manufacturing Facility",
    "Custom Design & Printing",
    "Reliable Bulk Production",
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      desc: "Started with a vision to deliver premium packaging solutions for growing businesses.",
    },
    {
      year: "2018",
      title: "Expansion",
      desc: "Expanded production capacity and introduced advanced printing technologies.",
    },
    {
      year: "2022",
      title: "Innovation",
      desc: "Added modern machinery and luxury finishing capabilities.",
    },
    {
      year: "2026",
      title: "Industry Leader",
      desc: "Serving brands across FMCG, cosmetics, pharma and gifting industries.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FCFBF8] to-[#F8F7F3] py-20">

      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-[450px] w-[450px] rounded-full bg-[#C9A227]/10 blur-[140px]" />

      <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-[#1E293B]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-white px-5 py-2 shadow-lg">

            <Sparkles
              size={16}
              className="text-[#C9A227]"
            />

            <span className="text-[#C9A227] font-semibold">
              Our Story
            </span>

          </span>

          <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1E293B]">

            Building Packaging That

            <span className="bg-gradient-to-r from-[#C9A227] via-[#E5C158] to-[#A67C00] bg-clip-text text-transparent">
              {" "}Builds Brands
            </span>

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#64748B]">

            At JSK Packaging, we believe packaging is much more than
            protection. It creates first impressions, strengthens
            customer trust, and transforms products into memorable
            brand experiences.

          </p>

        </div>

        {/* Story Section */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

           <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-5 shadow-2xl">
  <div className="overflow-hidden rounded-[28px]">
    <img
      src="/factory.jpg"
      alt="Factory"
      className="w-full h-[650px] object-cover transition duration-700 hover:scale-105"
    />
  </div>
</div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white/90 backdrop-blur-xl px-8 py-6 shadow-2xl">

              <h3 className="text-5xl font-bold text-[#C9A227]">
                10+
              </h3>

              <p className="mt-2 text-[#64748B]">
                Years of Excellence
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-4xl font-bold leading-tight text-[#1E293B]">

              Delivering Premium Packaging Solutions Across India

            </h3>

            <p className="mt-6 text-lg leading-relaxed text-[#64748B]">

              From luxury rigid boxes and mono cartons to labels,
              jewellery boxes and custom packaging, we create
              premium packaging experiences that elevate your
              products and strengthen your brand identity.

            </p>

            <p className="mt-5 text-lg leading-relaxed text-[#64748B]">

              Every box we manufacture reflects precision,
              craftsmanship and innovation, ensuring your products
              leave a lasting impression in today's competitive
              marketplace.

            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#C9A227]"
                  />

                  <span className="text-[#334155] font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* ===== Premium Journey Section Starts Here ===== */}

        <div className="mt-28">

          <div className="text-center">

            <span className="text-[#C9A227] font-semibold uppercase tracking-[3px]">
              Our Journey
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#1E293B]">
              Growing With Innovation
            </h3>

          </div>

          <div className="relative mt-20">

            {/* Desktop Timeline */}
            <div className="hidden lg:block">

              {/* Center Line */}
              <div className="absolute left-0 right-0 top-8 h-[2px] bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20" />

<div className="grid grid-cols-4 gap-8 relative items-stretch">
                {timeline.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="relative pt-16"
                  >

                    {/* Timeline Dot */}

                    <div className="absolute left-1/2 -translate-x-1/2 top-0">

                      <div className="relative">

                        <div className="h-5 w-5 rounded-full bg-[#C9A227] border-4 border-white shadow-xl" />

                        <div className="absolute inset-0 rounded-full bg-[#C9A227] animate-ping opacity-30" />

                      </div>

                    </div>

                    {/* Card */}

                    <div className="group h-full flex flex-col rounded-[28px] border border-[#E8E8E8] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">

                      <span className="inline-block rounded-full bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold text-[#C9A227]">
                        {item.year}
                      </span>

                      <h4 className="mt-5 text-2xl font-bold text-[#1E293B]">
                        {item.title}
                      </h4>

                     <p className="mt-4 leading-8 text-[#64748B] flex-1">
  {item.desc}
</p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Mobile Timeline */}

            <div className="lg:hidden relative mt-14">

              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#C9A227]/20" />

              <div className="space-y-10">

                {timeline.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="relative pl-14"
                  >

                    <div className="absolute left-0 top-3 h-9 w-9 rounded-full bg-white border-4 border-[#C9A227] shadow-lg" />

                    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-lg">

                      <span className="inline-block rounded-full bg-[#C9A227]/10 px-3 py-1 text-sm font-semibold text-[#C9A227]">
                        {item.year}
                      </span>

                      <h4 className="mt-4 text-2xl font-bold text-[#1E293B]">
                        {item.title}
                      </h4>

                      <p className="mt-3 leading-7 text-[#64748B]">
                        {item.desc}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}