"use client";

// react-imports
import { useEffect, useRef } from "react";
// icons-imports
import { AlertCircle, ShieldAlert } from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const painPoints = [
    {
      stage: "In School",
      text: "Balancing standard classes and memorizing theories while feeling the dread of selecting a major/career track without knowing who you are.",
      badge: "Stage 01",
    },
    {
      stage: "Fresh Out of University",
      text: "Holding a diploma and facing the immediate, crushing weight of the real world—trying to map directions under social pressure.",
      badge: "Stage 02",
    },
    {
      stage: "Navigating Adulthood",
      text: "Working in a repetitive cycle, questioning your alignment, and fearing that choosing a different trajectory means starting from zero.",
      badge: "Stage 03",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Master Scroll timeline block setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Starts animation when top of the section hits 75% depth of user screen
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    // 1. Reveal main header text group
    if (headerRef.current) {
      tl.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
      );
    }

    // 2. Animate Left Sidebar blocks (Slide up and layout pop)
    if (leftColRef.current) {
      tl.fromTo(
        leftColRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5", // overlap with header sequence finishing
      );
    }

    // 3. Stagger-reveal Stage card array on the right side panel
    if (rightColRef.current) {
      tl.fromTo(
        rightColRef.current.children,
        { opacity: 0, x: 20, y: 10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "power2.out",
        },
        "-=0.6",
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
      className="w-10/12 mx-auto relative py-20 overflow-hidden"
    >
      {/* Background glow for ambient contrast */}
      <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-indigo-400">
            <AlertCircle className="h-3.5 w-3.5" />
            <span className="font-semibold">The Reality Audit</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white/[0.8] md:text-4xl">
            Ever wake up wondering, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400">
              "Is this really what I am supposed to be doing?"
            </span>
          </h2>
          <p className="text-lg text-indigo-300 font-medium">
            You are definitely not alone.
          </p>
        </div>

        {/* Core Paragraph Copy Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main textual narrative */}
          <div ref={leftColRef} className="lg:col-span-6 space-y-6">
            {/* Design theme highlight block with Indigo left-bar indicator */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Honest Reality Check
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whether you are in school, fresh out of university, or just
                trying to navigate adulthood, there is an unspoken pressure to
                have your entire life figured out immediately. The constant fear
                of choosing the wrong path, wasting time, or falling behind can
                leave you feeling paralyzed and completely stuck.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-red-950/10 p-5 space-y-3">
              <div className="flex items-center gap-2 text-red-400">
                <ShieldAlert className="h-5 w-5" />
                <h4 className="font-semibold text-xs uppercase tracking-wider">
                  The "Just follow your passion" Trap
                </h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                We are tired of the generic, "just follow your passion"
                motivational speeches. When you are confused, you do not need
                hype. You need clarity, honest truths, and a practical roadmap
                to figure out your next steps.
              </p>
            </div>
          </div>

          {/* Cards for transition states with frosted layouts */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col justify-between gap-4"
          >
            {painPoints.map((point) => (
              <div
                key={point.stage}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                    {point.stage}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    {point.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
