"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/93142 35578"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-24 right-5 z-[999] flex items-center"
    >
      {/* Slide-out label (premium dark) */}
      <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-[#1E293B] py-2.5 text-sm font-medium text-white opacity-0 shadow-xl ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:mr-3 group-hover:max-w-[180px] group-hover:px-4 group-hover:opacity-100">
        Chat with us
      </span>

      {/* Icon + animated rings */}
      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* pulsing glow rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <span
          className="absolute inline-flex h-11 w-11 animate-ping rounded-full bg-[#25D366] opacity-20"
          style={{ animationDelay: "0.7s" }}
        />

        {/* premium green button */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/40 ring-2 ring-white/60 transition-all duration-300 group-hover:scale-110 group-hover:ring-white group-hover:shadow-[#25D366]/50">
          <FaWhatsapp className="text-[30px] transition-transform duration-300 group-hover:rotate-[8deg]" />

          {/* online status dot */}
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
          </span>
        </span>
      </span>
    </a>
  );
}
