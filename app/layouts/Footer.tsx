"use client";

// react-imports
import { useEffect, useRef } from "react";
// next-imports
import Image from "next/image";
// icons-imports
import { ArrowUp } from "lucide-react";
import logo from "@/public/images/logo.png";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bounceBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // 1. Reveal Footer blocks cleanly on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%", // Fires right when the footer edge skims the viewport bottom
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    if (containerRef.current) {
      tl.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
      );
    }

    // 2. Playful infinite physics bounce sequence for the back-to-top trigger
    if (bounceBtnRef.current) {
      // Entry pop
      tl.fromTo(
        bounceBtnRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" },
        "-=0.3",
      );

      // Loop sequence
      gsap.to(bounceBtnRef.current, {
        y: -6,
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden py-6">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-3xl opacity-30 pointer-events-none z-0" />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Upper layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-8 border-b border-white/5">
          <p className="text-center text-xs text-gray-500 italic max-w-xs md:text-center">
            "We do not need hype. When confused, we look for clarity and honest
            truths."
          </p>
        </div>

        {/* Bouncy Action Target */}
        <button
          ref={bounceBtnRef}
          onClick={handleScrollToTop}
          className="absolute z-50 bg-primary-blue rounded-full right-6 bottom-16 sm:right-10 sm:bottom-20 flex items-center justify-center p-2.5 text-white shadow-lg shadow-primary-blue/20 hover:bg-primary-blue/80 active:scale-90 transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>

        {/* Lower layout with copy and credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between backdrop-blur-3xl gap-4 mt-6 text-[10px] text-gray-600">
          {/* Main host indicator */}
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              width={70}
              height={70}
              alt="Uprix-logo"
              placeholder="blur"
              className="object-contain"
            />
          </div>

          {/* Copyrights */}
          <div className="flex flex-col items-center sm:items-end justify-center text-center sm:text-right gap-0.5">
            <p>Copyright © 2026. All rights reserved.</p>
            <p className="tracking-wider">developed by priime.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
