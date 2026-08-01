"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Box,
  Maximize2,
  Printer,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  Leaf,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  X,
  CheckCircle2,
  Truck,
  Award,
  Layers3,
} from "lucide-react";

const specIcons = [Package, Box, Maximize2, Printer, Sparkles, ShoppingBag];

const highlights = [
  { icon: Award, title: "Premium Finish", subtitle: "Luxury Packaging" },
  { icon: Truck, title: "Fast Delivery", subtitle: "Pan India Supply" },
  { icon: Layers3, title: "Custom Sizes", subtitle: "As Per Requirement" },
  { icon: Leaf, title: "Eco Friendly", subtitle: "Sustainable Material" },
];

const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Top grade packaging material" },
  { icon: SlidersHorizontal, title: "Custom Design", subtitle: "Any size & printing" },
  { icon: Leaf, title: "Eco Friendly", subtitle: "Sustainable packaging" },
  { icon: ShieldCheck, title: "Strong Protection", subtitle: "Maximum product safety" },
];

const applications = [
  "Cosmetics",
  "Jewellery",
  "Electronics",
  "Gift Items",
  "Fashion",
  "Food Products",
];

const whyChoose = [
  "Premium Materials",
  "Latest Printing Technology",
  "Fully Custom Packaging",
  "Competitive Pricing",
  "Fast Turnaround",
  "Bulk Manufacturing",
  "Quality Assurance",
  "Trusted Support",
];

export default function ProductDetail({ product }) {
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const [zoom, setZoom] = useState(false);

  return (
<section className="bg-[#F8F7F3] pt-28 pb-14 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#C9A227] transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        {/* Hero Card */}
        <div className="bg-white rounded-[28px] shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-5 sm:p-8 lg:p-10">
            {/* LEFT — Gallery + Overview */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                        activeImage === img
                          ? "border-[#C9A227]"
                          : "border-gray-200 hover:border-[#C9A227]/60"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative flex-1 group">
                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#F8F7F3]">
                    <img
                      src={activeImage}
                      alt={product.title}
                      className="w-full aspect-square object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <button
                    onClick={() => setZoom(true)}
                    className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-[#C9A227] shadow-lg flex items-center justify-center hover:bg-white hover:text-[#C9A227] transition"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>

              {/* Product Overview — fills the space below the image */}
              <div className="rounded-2xl bg-[#F8F7F3] p-5">
                <h2 className="text-2xl font-bold text-[#1E293B]">Product Overview</h2>
                <p className="mt-2.5 text-md text-slate-600 leading-6">
                  {product.title} is manufactured using premium quality materials to provide
                  excellent durability, elegant presentation and superior protection. Designed
                  for modern brands, our packaging solutions combine attractive aesthetics with
                  outstanding structural strength.
                </p>
                <p className="mt-2.5 text-md text-slate-600 leading-6">
                  At JSK Packaging, every box is produced with advanced printing, precision
                  finishing and strict quality control. We offer complete customization
                  including size, material, lamination, UV coating, foil stamping, embossing
                  and unique branding solutions to match your business requirements.
                </p>
              </div>
            </div>

            {/* RIGHT — Info */}
            <div>
              <span className="inline-flex px-4 py-1.5 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium text-sm">
                {product.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-3 leading-tight">
                {product.title}
              </h1>

              <p className="text-[#64748B] mt-4 leading-7">{product.description}</p>

              {/* Highlights — uniform cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-[#E8E5DC] bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C9A227]/40 transition"
                    >
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-[#C9A227]/10 flex items-center justify-center">
                        <Icon className="text-[#C9A227]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#1E293B] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Specifications */}
              <div className="mt-7 rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-[#F8F7F3] px-5 py-3.5 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-[#1E293B]">Product Specifications</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {product.specs.map((spec, i) => {
                    const Icon = specIcons[i % specIcons.length];
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[#F8F7F3] transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-[#C9A227]" />
                          </div>
                          <span className="text-slate-600 text-sm">{spec.label}</span>
                        </div>
                        <span className="font-semibold text-[#1E293B] text-sm text-right">
                          {spec.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link
                  href="/contact"
                  className="flex-1 h-13 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#b8941f] transition text-white font-semibold flex items-center justify-center gap-2"
                >
                  <ExternalLink size={17} />
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 py-3.5 rounded-xl border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition font-semibold flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      
      </div>

      {/* Zoom Modal */}
      {zoom && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-5"
          onClick={() => setZoom(false)}
        >
          <button
            onClick={() => setZoom(false)}
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white text-[#1E293B] flex items-center justify-center"
          >
            <X size={20} />
          </button>
          <img
            src={activeImage}
            alt={product.title}
            className="max-w-full max-h-[90vh] rounded-3xl object-contain"
          />
        </div>
      )}
    </section>
  );
}