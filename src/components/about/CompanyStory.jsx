"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
            Our Story
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B]">
            Building Packaging That
            <span className="text-[#C9A227]"> Builds Brands</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
            At JSK Packaging, we believe packaging is more than protection.
            It is the first impression of a brand and a key part of the customer experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/factory.jpg"
              alt="JSK Packaging Factory"
              className="w-full h-[650px] object-cover rounded-[32px] shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-5xl font-bold text-[#C9A227]">
                10+
              </h3>
              <p className="text-[#64748B]">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-[#1E293B]">
              Delivering Premium Packaging Solutions Across India
            </h3>

            <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
              From luxury rigid boxes and mono cartons to labels,
              jewellery boxes and custom packaging solutions,
              we help businesses create premium brand experiences.
            </p>

            <p className="mt-5 text-lg text-[#64748B] leading-relaxed">
              With a strong focus on quality, innovation and customer
              satisfaction, our team works closely with brands to
              design packaging that enhances product value and
              strengthens market presence.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <CheckCircle2
                    size={20}
                    className="text-[#C9A227]"
                  />
                  <span className="text-[#334155]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Timeline */}
        <div className="mt-28">

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#1E293B]">
              Our Journey
            </h3>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8F7F3] rounded-3xl p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-5xl font-bold text-[#C9A227]/30">
                  {item.year}
                </h4>

                <h5 className="mt-4 text-2xl font-semibold text-[#1E293B]">
                  {item.title}
                </h5>

                <p className="mt-4 text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}