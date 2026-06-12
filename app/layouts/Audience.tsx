"use client";

// react-imports
import { useEffect, useRef } from "react";
// next-imports
import Link from "next/link";
// icons-imports
import { ChevronsRight } from "lucide-react";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  AlertCircle,
  Sparkles,
} from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Audience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const users = [
    {
      role: "Student",
      desc: "Trying to balance your current studies while figuring out what you actually want your future to look like.",
      scenario: "Academics without a personal blueprint",
      icon: GraduationCap,
      accent: "from-indigo-500/10 to-transparent border-indigo-950",
    },
    {
      role: "Recent Graduate",
      desc: "Feeling the heavy weight of the real world and looking for a clear direction on what to do next.",
      scenario: "Navigating post-college choice paralysis",
      icon: Briefcase,
      accent: "from-purple-500/10 to-transparent border-purple-950",
    },
    {
      role: "Lifelong Learner",
      desc: "Anyone, from any background, who is simply willing to learn, grow, and finally find clarity in their personal journey.",
      scenario: "Evolving upward at any age or stage",
      icon: BookOpen,
      accent: "from-amber-500/10 to-transparent border-amber-950",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Fires when the top of the section enters 75% down the viewport
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    // 1. Staggered reveal for the intro/heading copy text blocks
    if (introRef.current) {
      tl.fromTo(
        introRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
      );
    }

    // 2. Cascade layout entry for the target profile grids
    if (cardsContainerRef.current) {
      tl.fromTo(
        cardsContainerRef.current.children,
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.5", // Start animating before title sequence is fully finished
      );
    }

    // 3. Smooth fade in for the public indicator alert box
    if (noticeRef.current) {
      tl.fromTo(
        noticeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4",
      );
    }

    // 4. Elastic reveal pop for the main CTA redirect block
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.3)" },
        "-=0.3",
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="audience"
      className="relative w-10/12 mx-auto py-20 overflow-hidden"
    >
      {/* Absolute backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Blocks */}
        <div ref={introRef} className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Target Profiles</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Is this session for you?
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl">
            You do not need to have everything figured out to be here. In fact,
            this session is perfectly crafted for you if you identify with any
            of the following:
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          ref={cardsContainerRef}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {users.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.role}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xs p-6 space-y-4 flex flex-col justify-between hover:scale-[1.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon support */}
                  <span className="flex h-12 w-12 rounded-full items-center justify-center bg-white/5 border border-white/5 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </span>

                  {/* Copy labels */}
                  <div>
                    <span className="block font-mono text-[9px] text-[#818cf8] font-semibold uppercase tracking-widest mb-1">
                      {profile.scenario}
                    </span>
                    <h3 className="font-display font-extrabold text-white text-xl transition-colors group-hover:text-indigo-300">
                      {profile.role}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Public Note Indicator Block with custom design themes */}
        <div
          ref={noticeRef}
          className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5.5 w-5.5 text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-white">Note:</strong> This event is
              completely open to the public. You do not need to be an existing
              community member to join us for this conversation!
            </p>
          </div>

          <span className="font-mono text-[9px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg shrink-0 select-none uppercase tracking-[0.2em] font-bold">
            X-Deep Public Access
          </span>
        </div>

        {/* Action Link Target */}
        <div ref={ctaRef} className="flex justify-center mt-6">
          <Link
            href="https://wa.link/8yf5wm"
            target="blank"
            className="w-full md:w-1/4 lg:w-1/6 flex items-center justify-center gap-1 text-xs bg-primary-blue text-white duration-300 transition-all hover:bg-primary-blue/80 font-semibold py-2.5 px-4 cursor-pointer rounded shadow-lg shadow-primary-blue/10 active:scale-95"
          >
            Register <ChevronsRight className="mt-0.5" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Audience;
