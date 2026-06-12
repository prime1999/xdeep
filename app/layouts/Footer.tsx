"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import logo from "@/public/images/logo.png";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden py-2">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Upper layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-8 border-b border-white/5">
          <p className="text-center text-xs text-gray-500 italic max-w-xs md:text-center">
            "We do not need hype. When confused, we look for clarity and honest
            truths."
          </p>
        </div>
        <button
          onClick={handleScrollToTop}
          className="absolute z-50 bg-primary-blue rounded-full right-10 bottom-30 flex items-centertext-[11px] p-2 text-white/[0.8] hover:text-white transition group cursor-pointer"
        >
          <ArrowUp className="h-3 w-3 transition group-hover:-translate-y-0.5" />
        </button>

        {/* Lower layout with copy and credits */}
        <div className="flex flex-col md:flex-row items-center justify-between backdrop-blur-3xl gap-4 text-[10px] text-gray-600">
          {/* Main host indicator */}
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Uprix-logo"
            placeholder="blur"
            className="object-contain"
          />

          {/* Copyrights */}
          <p>Copyright © 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
