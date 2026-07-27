import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company Info */}

          <div>
            <h2 className="text-3xl font-bold">
              JSK <span className="text-[#C9A227]">Packaging</span>
            </h2>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Premium packaging solutions including rigid boxes,
              mono cartons, labels, jewellery boxes, gift boxes
              and custom packaging products for modern brands.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#C9A227]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#C9A227] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C9A227] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C9A227] transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#C9A227] transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#C9A227] transition"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* Products */}

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#C9A227]">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Premium Rigid Boxes
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Mono Carton Boxes
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Product Labels
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Jewellery Boxes
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Gift Boxes
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C9A227] transition"
                >
                  Sweet Boxes
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#C9A227]">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">

                <Phone
                  className="text-[#C9A227] shrink-0 mt-1"
                  size={24}
                />

                <div>

                   <a
                    href="tel:+919314235578"
                    className="block text-gray-300 hover:text-[#C9A227] transition"
                  >
                    +91 93142 35578
                  </a>

                  <a
                    href="tel:+919828411787"
                    className="block text-gray-300 hover:text-[#C9A227] transition"
                  >
                    +91 98284 11787
                  </a>

                 

                </div>

              </div>

              <div className="flex gap-4 items-start">

                <Mail
                  className="text-[#C9A227] shrink-0 mt-1"
                  size={24}
                />

                <a
                  href="mailto:jskpackaging22@gmail.com"
                  className="text-gray-300 hover:text-[#C9A227] transition break-all"
                >
                  jskpackaging22@gmail.com
                </a>

              </div>

              <div className="flex gap-4 items-start">

                <MapPin
                  className="text-[#C9A227] shrink-0 mt-1"
                  size={30}
                />

                <a
                  href="https://maps.google.com/?q=D-25 Sudarshanpura Industrial Area Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C9A227] transition leading-relaxed"
                >
                  D-25, Sudarshanpura Industrial Area,
                  22 Godam, Jaipur, Rajasthan
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}

<div className="border-t border-white/10 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-3">
  <p className="text-gray-400 text-center lg:text-left">
    © {new Date().getFullYear()} JSK Packaging. All Rights Reserved.
  </p>

  <p className="text-gray-400 text-center lg:text-right">
    Designed & Developed by{" "}
    <a
      href="https://www.brandingguide.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C9A227] font-medium hover:text-[#E5C158] transition-colors duration-300"
    >
      Branding Guide
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}