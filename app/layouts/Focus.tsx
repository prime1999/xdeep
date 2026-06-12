"use client";

// react-imports
import { useEffect, useRef } from "react";
// icons-imports
import {
  MessageCircle,
  Compass,
  Sparkles,
  MessageSquareText,
} from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Focus = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      title: "Real Stories, Messy Realities",
      desc: "Move past idealized social media profiles. We dive into the true story loops—including failed projects, confusion periods, and the exact steps taken to bounce back.",
      icon: Compass,
      color: "text-indigo-400",
    },
    {
      title: "Ask Private Questions",
      desc: "Anonymously or openly submit the questions weighing heavy on your heart. No inquiries are judged or avoided; we break down real dilemmas with concrete support.",
      icon: MessageSquareText,
      color: "text-purple-400",
    },
    {
      title: "Actionable Mindset Shifts",
      desc: "Get practical roadmaps to guide day-to-day decision making, transition planning, and find true internal peace of mind concerning your life's custom trajectory.",
      icon: Sparkles,
      color: "text-amber-400",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Fires when the top of the section is 75% down the viewport
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    // 1. Title block fade and slide up
    if (headerRef.current) {
      tl.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
      );
    }

    // 2. 3-Card Grid staggered layout entrance
    if (gridRef.current) {
      tl.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.5", // Overlap slightly with header animation
      );
    }

    // 3. Premium Quote Box scaling pop
    if (quoteRef.current) {
      tl.fromTo(
        quoteRef.current,
        { opacity: 0, y: 25, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.1)",
        },
        "-=0.4",
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="the-focus"
      className="relative py-20 overflow-hidden"
    >
      {/* Aurora spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Group */}
        <div
          ref={headerRef}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-semibold text-center">
              Core Session Strategy
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Real Conversations. <span>No Fluff.</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            X-Deep is a special monthly session designed for deep, unfiltered
            conversations about life, personal growth, and navigating the real
            world.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div
          ref={gridRef}
          className="w-11/12 mx-auto mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xs p-6 space-y-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] flex flex-col justify-between"
              >
                {/* Background numbers indicator - Elegant translucent design style */}
                <span className="absolute top-4 right-6 font-mono font-extrabold text-white/[0.03] text-5xl select-none leading-none z-0 transition-colors group-hover:text-white/[0.06]">
                  {`0${idx + 1}`}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ${item.color} shadow-sm border border-white/5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </span>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-white text-lg mt-4 transition-colors group-hover:text-indigo-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Layout with premium frosted card styling */}
        <div
          ref={quoteRef}
          className="mt-12 max-w-4xl mx-auto rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center space-y-4 relative shadow-2xl"
        >
          <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-indigo-500/5 blur-2xl" />
          <p className="text-sm text-gray-200 leading-relaxed italic">
            "We created this space specifically to move past surface-level
            advice and explore the actual, messy realities of building a
            successful life. In this session, you will get to listen to real
            stories, ask the questions weighing on your heart, and engage in
            discussions that will genuinely shift your mindset and give you
            peace of mind."
          </p>
          <div className="flex flex-col items-center justify-center gap-1.5 text-xs text-gray-500 font-mono uppercase tracking-wider">
            <span>UPRIX CREATIVE DIRECTIVES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
