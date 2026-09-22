"use client";

// react-imports
import { useEffect, useRef } from "react";
// icons-imports
import {
  MessageCircle,
  Brain,
  CircleStop,
  Ban,
  Frown,
  MessageSquareText,
  Atom,
} from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Struggle = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      title: "The Low-Pay Trap",
      desc: "You put your heart into the work, but you are afraid to state your real price because you think the client will run away",
      icon: Brain,
      color: "text-indigo-400",
    },
    {
      title: "The Dry Month Panic",
      desc: " You make a little money this week, but by next week, your account is dry again because you don't know where the next client is coming from.",
      icon: CircleStop,
      color: "text-red-500",
    },
    {
      title: "The Free Advice Trap",
      desc: " People enter your DMs to ask for help, praise your work, and take your ideas, but nobody is actually paying you.",
      icon: Ban,
      color: "text-red-900",
    },
    {
      title: "The Quiet Frustration",
      desc: "You look at your phone, tired and stressed, wondering if you are even good enough to succeed.",
      icon: Frown,
      color: "text-black",
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
      id="the-struggle"
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
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-yellow">
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-semibold text-center">The Struggle</span>
          </div>
          <h2 className="font-display text-xl font-bold tracking-tight text-white md:text-3xl">
            The Daily Struggle Keeping You Broke
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            Does your daily life look like this?
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div
          ref={gridRef}
          className="w-11/12 mx-auto mt-16 flex flex-col gap-6 items-center justify-center md:flex-row"
        >
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="relative w-[330px] md:w-56 h-56 rounded-[14px] p-5 flex flex-col justify-between overflow-hidden"
                style={{
                  background:
                    "linear-gradient(155deg, #07017b 0%, #07017b 60%, #07017b 100%)",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* soft corner glow */}
                <div
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-30 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, #ffffff 0%, transparent 70%)",
                  }}
                />

                {/* icon badge */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(160deg,#0907d7,#111 70%)",
                    boxShadow:
                      "0 6px 14px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15)",
                  }}
                >
                  <IconComponent
                    size={26}
                    strokeWidth={1.75}
                    className="text-white/90"
                  />
                </div>

                <h3 className="font-display font-bold text-white text-lg mt-4 transition-colors group-hover:text-indigo-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Layout with premium frosted card styling */}
        <div
          ref={quoteRef}
          className="mt-12 max-w-4xl mx-auto text-center space-y-4 relative shadow-2xl"
        >
          <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-indigo-500/5 blur-2xl" />
          <p className="text-sm text-gray-200 leading-relaxed italic">
            "Making your first ₦1,000,000 is not luck. It is simply clear math
            and a simple process that brings in paying clients."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Struggle;
