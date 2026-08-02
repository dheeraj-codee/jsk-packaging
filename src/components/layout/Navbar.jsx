"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Download, Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while the mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const products = [
    { name: "Rigid Boxes", slug: "rigid-boxes" },
    { name: "Mono Cartons", slug: "mono-cartons" },
    { name: "Labels", slug: "labels" },
    { name: "Jewellery Boxes", slug: "jewellery-boxes" },
    { name: "Gift Boxes", slug: "gift-boxes" },
    { name: "Sweet Boxes", slug: "sweet-boxes" },
    { name: "Window Boxes", slug: "window-boxes" },
    { name: "Luxury Packaging", slug: "luxury-packaging" },
  ];

  // 3x3 dotted menu icon — mix of brand gold + navy dots
  const menuDots = [
    "bg-[#1E293B]", "bg-[#C9A227]", "bg-[#C9A227]",
    "bg-[#C9A227]", "bg-[#C9A227]", "bg-[#1E293B]",
    "bg-[#1E293B]", "bg-[#C9A227]", "bg-[#1E293B]",
  ];

  const navClass =
    "relative text-[#334155] font-medium transition-all duration-300 hover:text-[#C9A227] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18">

          {/* Logo */}

         <Link href="/" className="flex items-center">
  <Image
    src="/images/logo/logo.jpg"
    alt="JSK Packaging"
    width={170}
    height={55}
    priority
    className="w-auto h-10 lg:h-12"
  />
</Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-7">

            <Link href="/" className={navClass}>
              Home
            </Link>

            <Link href="/about" className={navClass}>
              About
            </Link>

            {/* Products Dropdown - hover to open, click text to go to page */}

            <div className="group relative flex items-center gap-1">

              <Link
                href="/products"
                className="flex items-center gap-1 text-[#334155] font-medium hover:text-[#C9A227] transition"
              >
                Products
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition"
                />
              </Link>

              <div className="absolute top-10 left-0 bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] p-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                {products.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="block px-4 py-2.5 text-[#334155] rounded-lg hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </div>

            <Link href="/contact" className={navClass}>
              Contact
            </Link>

          </nav>

          {/* E-Catalogue Button */}

       <div className="hidden lg:block">
  <a
  href="/images/catalog/JSK-Packaging-E-Catalog.pdf"
  download="JSK-Packaging-E-Catalog.pdf"
  className="bg-[#C9A227] text-white px-5 py-2.5 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
>
  E-Catalogue
</a>
</div>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden text-[#1E293B]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <span className="grid grid-cols-3 gap-1">
                {menuDots.map((c, i) => (
                  <span key={i} className={`h-1.5 w-1.5 rounded-full ${c}`} />
                ))}
              </span>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Sidebar Drawer */}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-[100dvh] w-[82%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#E5E7EB] shrink-0">
          <h2 className="text-xl font-bold text-[#1E293B]">
            JSK<span className="text-[#C9A227]"> Packaging</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-[#1E293B]"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links (scrollable) */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col">
          <Link
            href="/"
            className="px-4 py-2.5 rounded-xl font-semibold text-[#334155] hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-4 py-2.5 rounded-xl font-semibold text-[#334155] hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Products - text goes to page, arrow toggles dropdown */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/products"
                className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-[#334155] hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>

              <button
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="p-3 text-[#1E293B]"
                aria-label="Toggle products dropdown"
              >
                {mobileProductsOpen ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>
            </div>

            {mobileProductsOpen && (
              <div className="flex flex-col bg-[#F8F7F3] mx-2 rounded-xl mb-2">
                {products.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="px-4 py-2.5 text-[#334155] hover:text-[#C9A227]"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileProductsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-4 py-2.5 rounded-xl font-semibold text-[#334155] hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>

        {/* Download button pinned to bottom */}
        <div className="p-4 border-t border-[#E5E7EB] shrink-0">
          <a
  href="/images/catalog/JSK-Packaging-E-Catalog.pdf"
            download
            className="flex items-center justify-center gap-2 w-full bg-[#C9A227] text-white py-2.5 rounded-lg text-center font-medium hover:bg-[#b8911f] transition"
          >
            <Download size={18} />
            Download E-Catalogue
          </a>
        </div>
      </aside>

    </header>
  );
}