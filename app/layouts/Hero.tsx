"use client";

// react-imports
import { useEffect, useRef } from "react";
// next imports
import Image from "next/image";
// icons-imports
import { Target, Sparkles, Video } from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
// button for analytics import
import RegisterLink from "@/components/RegisterLink";
// layout component imports
import Navbar from "./Navbar";
// images imports
import heroImage from "@/public/images/hero-image.png";
import clock from "@/public/images/clock.png";

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
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "var(--hero-bg-mid)",
        backgroundBlendMode: "overlay",
      }}
      className="w-full flex items-center justify-center flex-col gap-2 min-h-[90vh] relative overflow-hidden"
    >
      {/* Background glow matrix to fit the Uprix dark aesthetic */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-black rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#020617]" />
      {/* <div className="absolute top-[50px] right-[10px] opacity-20">
        <Image src={clock} alt="Clock" width={700} height={700} />
      </div> */}

      {/* Brand Identity Display Header */}
      <div
        ref={logoRef}
        className="mt-16 flex flex-col items-center gap-1 text-white/[0.8]"
      >
        <span className="flex items-end select-none">
          <p className="font-deep text-6xl text-white/[0.8]">x</p>
          <h6 className="-ml-1 text-lg font-heading tracking-wide text-white/[0.8]">
            - deep
          </h6>
        </span>
        <p className="text-[10px] uppercase font-mono tracking-widest text-primary-yellow">
          July Edition
        </p>
      </div>

      {/* Target Public Badge */}
      <span
        ref={badgeRef}
        className="flex items-center gap-2 text-center justify-center border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full mt-4 backdrop-blur-sm"
      >
        <Target className="text-indigo-400 animate-pulse" size={13} />
        <h6 className="text-[11px] tracking-wide text-gray-300 font-sans">
          Open to everyone • Hosted live on uprix space
        </h6>
      </span>

      <div className="w-full flex items-center justify-center flex-col px-4 mt-4 relative z-10">
        {/* Core Main Title */}
        <p className="hidden md:block font-embrace text-5xl text-primary-yellow mb-2">
          THE{" "}
        </p>
        <h1
          ref={headlineRef}
          className="hidden md:block w-full tracking-wider mx-auto font-bold text-3xl/tight md:text-5xl/tight md:w-10/12 lg:w-9/12 text-center text-primary-yellow space-y-2 font-embrace"
        >
          PROCASTNATION SOLUTION
          <span className="text-white tracking-tight inline-block mt-4">
            Stop Planning. Start Xecuting.
          </span>{" "}
        </h1>
        <p className="md:hidden font-embrace text-2xl text-primary-yellow mb-2">
          THE{" "}
        </p>
        <h1
          ref={headlineRef}
          className="md:hidden w-full tracking-wider mx-auto font-bold text-[25px]/9 text-center text-primary-yellow space-y-2 font-embrace"
        >
          PROCASTNATION SOLUTION
          <span className="text-2xl tracking-tight text-white inline-block mt-4">
            Stop Planning. Start Xecuting.
          </span>{" "}
        </h1>

        {/* Narrative Description Block */}
        <p
          ref={subtextRef}
          className="w-9/12 lg:w-5/12 font-sans text-center text-sm/relaxed mt-5 text-gray-300"
        >
          This is not a lecture, it is a raw, deep conversation designed to drag
          you out of your head and push you into messy, profitable action.
        </p>

        {/* Action Registration Button */}
        <div ref={ctaRef} className="mt-6">
          <RegisterLink source={"hero"} />
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
          <p className="pl-4 text-xs text-gray-300 font-sans">
            Join <span className="font-bold text-white">over hundreds</span> of
            young creatives fighting the same battle this month.
          </p>
        </div>

        {/* Features Meta Footnotes */}
        {/* <div
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
        </div> */}
      </div>
    </main>
  );
};

export default Hero;
