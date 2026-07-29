"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of packaging products do you manufacture?",
      answer:
        "We manufacture premium rigid boxes, mono cartons, labels, jewellery boxes, gift boxes, sweet boxes, window boxes and custom packaging solutions.",
    },
    {
      question: "Do you provide custom packaging solutions?",
      answer:
        "Yes, we provide fully customized packaging solutions based on your product, branding and business requirements.",
    },
    {
      question: "Can you handle bulk packaging orders?",
      answer:
        "Absolutely. We have the capability to handle both small and large-volume manufacturing requirements efficiently.",
    },
    {
      question: "Do you provide design and printing services?",
      answer:
        "Yes, we offer packaging design, printing and premium finishing solutions to help brands create a strong market presence.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve FMCG, pharmaceutical, cosmetics, food & beverage, retail, corporate gifting and many other industries.",
    },
    {
      question: "How can I get a quotation?",
      answer:
        "Simply contact our team with your packaging requirements and we will provide a customized quotation.",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F7F3]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-sm text-[#C9A227] font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            Got Questions?
            <span className="text-[#C9A227]"> We've Got Answers</span>
          </h2>

          <p className="mt-6 text-md text-[#64748B]">
            Find answers to common questions about our packaging products,
            customization options and manufacturing process.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-[#1E293B]">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="text-sm text-[#C9A227]" />
                  ) : (
                    <Plus className="text-sm text-[#C9A227]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#64748B] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}