"use client";

import Link from "next/link";
import { ArrowRight, Package, Award, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E293B]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-[#1E293B] text-sm font-medium">
              Premium Packaging Manufacturer in Jaipur
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1E293B] text-center lg:text-left">
              Premium
              <span className="text-[#C9A227]"> Packaging </span>
              Solutions For Modern Brands
            </h1>

            <p className="mt-6 text-lg text-[#334155] leading-relaxed max-w-xl text-center lg:text-left">
              JSK Packaging specializes in premium rigid boxes,
              mono cartons, product labels, jewellery boxes,
              gift boxes and custom packaging solutions that
              elevate your brand presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-[#C9A227] text-white font-semibold hover:scale-105 transition"
              >
                Get Free Quote
              </Link>

              <Link
                href="/products"
                className="px-7 py-4 rounded-xl border border-[#1E293B] text-[#1E293B] font-semibold hover:bg-[#1E293B] hover:text-white transition flex items-center gap-2"
              >
                View Products
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 w-full text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold text-[#1E293B]">
                  150+
                </h3>
                <p className="text-[#64748B]">
                  Projects Delivered
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold text-[#1E293B]">
                  50+
                </h3>
                <p className="text-[#64748B]">
                  Happy Clients
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold text-[#1E293B]">
                  5+
                </h3>
                <p className="text-[#64748B]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#E5E7EB]">
              <img
                src="/hero-packaging.jpg"
                alt="Premium Packaging Boxes"
                className="rounded-2xl w-full h-[500px] object-cover"
              />

              <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="bg-[#F8F7F3] rounded-xl p-4 text-center">
                  <Package className="mx-auto text-[#C9A227]" />
                  <p className="text-sm mt-2 text-[#334155]">
                    Custom Boxes
                  </p>
                </div>

                <div className="bg-[#F8F7F3] rounded-xl p-4 text-center">
                  <Award className="mx-auto text-[#C9A227]" />
                  <p className="text-sm mt-2 text-[#334155]">
                    Premium Quality
                  </p>
                </div>

                <div className="bg-[#F8F7F3] rounded-xl p-4 text-center">
                  <Truck className="mx-auto text-[#C9A227]" />
                  <p className="text-sm mt-2 text-[#334155]">
                    Fast Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}