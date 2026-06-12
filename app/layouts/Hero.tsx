"use client";

// react-imports
import { useEffect, useRef } from "react";
// next-imports
import Link from "next/link";
// icons-imports
import { Target, Sparkles, Video, ChevronsRight } from "lucide-react";
// gsap-imports
import { gsap } from "gsap";

const Hero = () => {
  // Animation Container References
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent animation flashes on mounting
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Initial logo reveal drop
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 },
    );

    // 2. Google Meet target badge pop (using a slight back bounce)
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.9, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.6",
    );

    // 3. Main Headline title text revealing slide up
    if (headlineRef.current) {
      // Direct children target if you want to isolate lines, or animate as block
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.6",
      );
    }

    // 4. Staggered reveal for subtext and action buttons down the viewport hierarchy
    tl.fromTo(
      subtextRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.8",
    );

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
      "-=0.6",
    );

    // 5. Staggered slide for structural social proof avatars & features
    if (avatarsRef.current) {
      tl.fromTo(
        [
          avatarsRef.current.children[0].children,
          avatarsRef.current.children[1],
        ],
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15 },
        "-=0.4",
      );
    }

    if (featuresRef.current) {
      tl.fromTo(
        featuresRef.current.children,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.3",
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="w-full flex items-center justify-center flex-col gap-2 min-h-[85vh] relative overflow-hidden"
    >
      {/* Background glow matrix to fit the Uprix dark aesthetic */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Brand Identity Display Header */}
      <div
        ref={logoRef}
        className="mt-16 flex flex-col items-center gap-1 text-white/[0.8]"
      >
        <span className="flex items-end select-none">
          <p className="font-deep text-6xl text-white/[0.8]">x</p>
          <h6 className="text-lg font-heading tracking-wide text-white/[0.8]">
            - deep
          </h6>
        </span>
        <p className="text-[10px] uppercase font-mono tracking-widest text-indigo-400">
          June Edition
        </p>
      </div>

      {/* Target Public Badge */}
      <span
        ref={badgeRef}
        className="flex items-center gap-2 text-center justify-center border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full mt-4 backdrop-blur-sm"
      >
        <Target className="text-indigo-400 animate-pulse" size={13} />
        <h6 className="text-[11px] tracking-wide text-gray-300 font-sans">
          Open to everyone • Hosted live on Google Meet
        </h6>
      </span>

      <div className="w-full flex items-center justify-center flex-col px-4 mt-4 relative z-10">
        {/* Core Main Title */}
        <h1
          ref={headlineRef}
          className="w-full tracking-tight mx-auto font-bold text-3xl/tight md:text-5xl/tight md:w-10/12 lg:w-9/12 text-center text-white space-y-2 font-heading"
        >
          <span className="text-primary-blue inline-block">
            Purpose Discovery:
          </span>{" "}
          Figuring Out What You Are Actually Supposed To Do
        </h1>

        {/* Narrative Description Block */}
        <p
          ref={subtextRef}
          className="md:w-8/12 lg:w-5/12 font-sans text-center text-sm/relaxed mt-5 text-gray-400"
        >
          Confused about which path to take? Join us for an honest breakdown of
          how to discover your purpose and, more importantly, how to execute it.
        </p>

        {/* Action Registration Button */}
        <div ref={ctaRef}>
          <Link
            href="https://wa.link/8yf5wm"
            target="blank"
            className="flex items-center gap-1 text-xs bg-primary-blue text-white duration-300 transition-all hover:bg-primary-blue/80 font-semibold py-2.5 px-6 rounded-full cursor-pointer mt-6 shadow-lg shadow-primary-blue/20 active:scale-95"
          >
            Register{" "}
            <ChevronsRight
              className="mt-0.5 group-hover:translate-x-0.5 transition-transform"
              size={15}
            />
          </Link>
        </div>

        {/* Social Proof Engagement Section */}
        <div
          ref={avatarsRef}
          className="flex items-center gap-2 mt-6 rounded-2xl p-3"
        >
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-indigo-950 flex items-center justify-center text-[9px] font-bold text-indigo-300">
              JD
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-purple-950 flex items-center justify-center text-[9px] font-bold text-purple-300">
              MK
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-slate-900 flex items-center justify-center text-[9px] font-bold text-gray-300">
              AL
            </div>
          </div>
          <p className="pl-4 text-xs text-gray-400 font-sans">
            Join <span className="font-bold text-white">400+ others</span>{" "}
            seeking their direction this month.
          </p>
        </div>

        {/* Features Meta Footnotes */}
        <div
          ref={featuresRef}
          className="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-[11px] text-gray-500"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-md">
            <Video className="h-3.5 w-3.5 text-gray-500" />
            <span>Interact Live</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
            <span>Actionable Roadmaps</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
