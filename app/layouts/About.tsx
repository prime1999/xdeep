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
} from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      title: "The Spark",
      desc: "You wake up with a brilliant idea. You get incredibly excited about a new skill, a personal brand layout, or a business concept. You tell yourself, 'This is the one.'",
      icon: Brain,
      color: "text-indigo-400",
    },
    {
      title: "The Freeze",
      desc: "You open your laptop or phone to start. Suddenly, a wave of self-doubt hits you. You feel like you are not good enough yet, or you worry about what people will say if it fails.",
      icon: CircleStop,
      color: "text-red-500",
    },
    {
      title: "The Delay",
      desc: "You tell yourself you need to do more research first. You promise to start 'tomorrow' when you have more energy or better timing.",
      icon: Ban,
      color: "text-red-900",
    },
    {
      title: "The Guilt",
      desc: "Tomorrow comes, and you spend hours scrolling on social media instead. You go to bed feeling guilty, heavy, and frustrated that another day slipped away.",
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
      id="the-reality"
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
            <span className="font-semibold text-center">The Reality check</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            The 72-Hour Cycle You Keep Repeating
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            Let’s be honest about what happens every single week:
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div
          ref={gridRef}
          className="w-11/12 mx-auto mt-16 grid grid-cols-1 gap-6 md:grid-cols-4"
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
          className="mt-12 max-w-4xl mx-auto text-center space-y-4 relative shadow-2xl"
        >
          <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-indigo-500/5 blur-2xl" />
          <p className="text-sm text-gray-200 leading-relaxed italic">
            "This is not a discipline problem. It is an overthinking problem.
            And it stops the moment you enter the room."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
