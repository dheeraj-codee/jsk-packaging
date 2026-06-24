"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    "Rigid Boxes",
    "Mono Cartons",
    "Labels",
    "Jewellery Boxes",
    "Gift Boxes",
    "Sweet Boxes",
  ];

  const navClass =
    "relative text-[#334155] font-medium transition-all duration-300 hover:text-[#C9A227] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/">
            <h2 className="text-2xl font-bold text-[#1E293B] cursor-pointer">
              JSK
              <span className="text-[#C9A227]"> Packaging</span>
            </h2>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/" className={navClass}>
              Home
            </Link>

            <Link href="/about" className={navClass}>
              About
            </Link>

            {/* Products Dropdown */}

            <div className="group relative">

              <button className="flex items-center gap-1 text-[#334155] font-medium hover:text-[#C9A227] transition">
                Products
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition"
                />
              </button>

              <div className="absolute top-12 left-0 bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] p-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                {products.map((item) => (
                  <Link
                    key={item}
                    href="/products"
                    className="block px-4 py-3 text-[#334155] rounded-xl hover:bg-[#F8F7F3] hover:text-[#C9A227] transition"
                  >
                    {item}
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
              href="/catalogue/JSK-Catalogue.pdf"
              download
              className="bg-[#C9A227] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              E-Catalogue
            </a>
          </div>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden text-[#1E293B]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-[#E5E7EB] shadow-lg rounded-b-2xl">

            <div className="flex flex-col py-4">

              <Link
                href="/"
                className="px-4 py-3 text-[#334155]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="px-4 py-3 text-[#334155]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/products"
                className="px-4 py-3 text-[#334155]"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 text-[#334155]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <a
                href="/catalogue/JSK-Catalogue.pdf"
                download
                className="mx-4 mt-3 bg-[#C9A227] text-white py-3 rounded-xl text-center font-medium"
              >
                Download E-Catalogue
              </a>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}