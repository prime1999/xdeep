"use client";

// react-imports
import { useEffect, useRef } from "react";
// next-imports
import Image from "next/image";
// icons-imports
import { Sparkles } from "lucide-react";
import speakerPortrait from "@/public/images/speaker.jpeg";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Speaker = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const floatBadgeRef = useRef<HTMLDivElement>(null);

  const credentials = [
    "Brand Identity Designer",
    "Founder, Xelite",
    "Visual Storyteller",
    "Founder, Cresend",
    "Founder, Uprix",
    "English Lit Scholar",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      // 1. Reveal Premium Image Side
      if (imageFrameRef.current) {
        tl.fromTo(
          imageFrameRef.current.querySelector(".bg-gradient-to-tr"),
          { opacity: 0, scale: 0.9 },
          { opacity: 0.25, scale: 1, duration: 1.4 },
        );
        tl.fromTo(
          imageFrameRef.current.querySelector(".photo-wrapper"),
          { opacity: 0, y: 40, rotate: -2 },
          { opacity: 1, y: 0, rotate: 0, duration: 1 },
          "-=1",
        );
      }

      // 2. Pop Floating Badge & Trigger Infinite Yoyo Hover Loop
      if (floatBadgeRef.current) {
        tl.fromTo(
          floatBadgeRef.current,
          { opacity: 0, scale: 0.7, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.6",
        );

        tl.call(() => {
          gsap.to(floatBadgeRef.current, {
            y: -8,
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }

      // 3. Stagger Editorial Text Content Hierarchy
      if (textContentRef.current) {
        tl.fromTo(
          textContentRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.8",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="speaker"
      className="relative md:w-10/12 mx-auto py-24 lg:py-32 overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background radial glows - Depth Layers */}

      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* (removed top smoothing gradient — About is the next section) */}
        {/* Meta Label Indicator */}
        <div className="mb-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-yellow">
          <Sparkles className="h-4 w-4" />
          <span>Meet Your Guide</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Premium Geometric Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div
              ref={imageFrameRef}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Backglow Ambient Canvas Element */}

              {/* Photo Wrapper frame */}
              <div className="relative main-photo-card shadow-lg shadow-blue-900 relative rounded-[28px] h-[520px] w-[360px] mx-auto sm:w-[400px] md:w-[400px] md:h-[580px] border border-white/10 overflow-hidden bg-black/40 shadow-2xl z-10">
                <Image
                  src={speakerPortrait}
                  alt="Taifaq, Workshop Guide"
                  className="w-full h-full object-cover transition duration-700 scale-[1.01] group-hover:scale-105"
                  width={400}
                  height={500}
                  id="speaker-portrait-img"
                  priority
                />
                <span className="absolute top-5 left-5 text-white border rounded-[14px] p-2 backdrop-blur-3xl font-medium text-2xl sm:text-xl block sm:inline sm:ml-2">
                  Taifaq
                </span>
                <div className="absolute bottom-1 w-full flex flex-wrap gap-2 p-4 border-t border-white/5 z-50">
                  {credentials.map((credential: string) => (
                    <span
                      key={credential}
                      className="text-slate-300 text-xs border border-white/10 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.07] select-none"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Live Badge */}
              <div
                ref={floatBadgeRef}
                className="absolute top-8 -right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl hidden sm:block z-20 select-none"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest font-bold">
                    LIVE Q&A STAGE
                  </p>
                </div>
                <p className="text-xs text-white font-medium mt-0.5">
                  Ask Your Questions Live
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Editorial Biography Copy */}
          <div
            ref={textContentRef}
            className="w-full md:w-10/12 lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Premium Big Typography Name Header */}
            <h2 className="font-display sm:text-3xl font-black tracking-tight text-white">
              Taiwo Faruq{" "}
            </h2>

            {/* Split Paragraph Narrative Context Rows */}
            <div className="space-y-4 text-base/relaxed text-slate-300 font-sans max-w-xl">
              <p>
                I am a creative designer, brand strategist, and an English
                Language and Literature student at the University of Ibadan. I
                don&apos;t sit in a high corporate office giving abstract
                advice—
                <strong className="text-white">
                  I am in the trenches with you every single day.
                </strong>
              </p>
              <p>
                I know exactly what it feels like to struggle with consistency
                while trying to scale Taifaq Pixels, manage communities, and
                keep up with university grades. I have faced the exact same
                procrastination and self-doubt that you are dealing with right
                now.
              </p>
              <p>
                I didn&apos;t beat procrastination by becoming a robot; I beat
                it by building simple, repeatable systems that work even when I
                feel completely unmotivated. In this July X-Deep, I am stripping
                away the fluff and handing you those exact systems.
              </p>
            </div>

            {/* Accent Punchline Text Block banner */}
            <p className="text-lg font-bold text-primary-yellow tracking-wide pt-2 border-l-2 border-primary-yellow pl-4">
              Let&apos;s stop overthinking. Let&apos;s start executing.
            </p>

            {/* Micro Tag Credentials Horizontal Flex Loop Grid */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
