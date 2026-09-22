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
import hero from "@/public/images/hero.png";
import sign from "@/public/images/sign.png";

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
      className="w-full flex items-center justify-center flex-col gap-2 min-h-[90vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background glow matrix to fit the Uprix dark aesthetic */}
      {/* <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-black rounded-full blur-[130px] pointer-events-none" /> */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-b from-transparent to-[#030217] pointer-events-none" />
      {/* <div className="absolute -bottom-10 opacity-30">
        <Image src={smoke} alt="Smoke" width={1500} height={1500} />
      </div> */}
      {/* <div className="absolute top-20 right-60">
        <Image src={sign} alt="Sign" width={200} height={200} />
      </div> */}
      {/* <h1 className="absolute top-3 text-[400px] text-gray-900 uppercase font-bold">
        third
      </h1> */}
      {/* Brand Identity Display Header */}
      <div
        ref={logoRef}
        className="mt-4 flex flex-col items-center gap-1 text-white/[0.8] z-50"
      >
        <span className="flex items-end select-none">
          <p className="font-deep text-6xl text-white">x</p>
          <h6 className="-ml-1 text-lg font-heading tracking-wide text-white">
            - deep
          </h6>
        </span>
        <p className="text-primary-yellow">September Edition</p>
      </div>

      {/* Target Public Badge */}
      <span
        ref={badgeRef}
        className="flex items-center gap-2 text-center justify-center border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full mt-4 backdrop-blur-sm z-40"
      >
        <Target className="text-indigo-400 animate-pulse" size={13} />
        <h6 className="text-[11px] tracking-wide text-gray-300 font-sans">
          Open to everyone • Hosted live on uprix space
        </h6>
      </span>

      <div className="w-full flex items-center justify-center text-center flex-col px-4 mt-4 relative z-40">
        {/* Core Main Title */}

        <h4 className="text-xl md:text-4xl font-bold">Making Your First</h4>
        <h1 className="flex flex-col items-center justify-center gap-2 mt-4 text-4xl text-primary-yellow font-extrabold font-deep tracking-tight">
          {" "}
          ₦1,000,000
          <span className="text-5xl ml-1 font-normal font-heading text-white tracking-tighter">
            in Any Business.
          </span>
        </h1>

        {/* Narrative Description Block */}
        <p
          ref={subtextRef}
          className="w-9/12 lg:w-6/12 font-sans text-center text-sm/[14px] mt-3 text-gray-300"
        >
          No empty motivational talk. No big English words here. Just the
          practical, step-by-step steps you need to take your business from zero
          to seven figures.
        </p>

        {/* Action Registration Button */}
        <div ref={ctaRef} className="mt-12">
          <RegisterLink source={"hero"} />
        </div>

        {/* Social Proof Engagement Section */}
        <div
          ref={avatarsRef}
          className="flex items-center gap-2 mt-6 rounded-2xl p-3"
        >
          <p className="pl-4 text-xs text-gray-300 font-sans">
            For young builders ready to stop chasing pennies and start building
            a real income.
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
