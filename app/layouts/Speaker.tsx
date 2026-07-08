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
  const headerRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
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

    // Use gsap.context for scoped, safe selector cleanups
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Staggered reveal for section title elements
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        );
      }

      // 2. Premium image card reveal
      if (portraitFrameRef.current) {
        // Backglow blur layer
        tl.fromTo(
          portraitFrameRef.current.querySelector(".bg-gradient-to-r"),
          { opacity: 0, scale: 0.8 },
          { opacity: 0.2, scale: 1, duration: 1.2 },
          "-=0.6",
        );

        // Main Photo Card
        tl.fromTo(
          portraitFrameRef.current.querySelector(".main-photo-card"),
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.9",
        );
      }

      // 3. Float badge pop entry followed by infinite hover cycle loop
      if (floatBadgeRef.current) {
        tl.fromTo(
          floatBadgeRef.current,
          { opacity: 0, scale: 0.8, y: 15, rotate: 0 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 3,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );

        tl.call(() => {
          gsap.to(floatBadgeRef.current, {
            y: -5,
            duration: 2.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Safely reverts only animations created inside this component
  }, []);

  return (
    <section
      ref={sectionRef}
      id="speaker"
      className="relative w-full mx-auto py-24 overflow-hidden flex items-center justify-center"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-950/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-950/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Module Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-yellow">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Your Guide</span>
          </div>

          <p className="text-sm text-center text-gray-400 max-w-xl">
            Learn directly from someone who is dedicated to helping people
            navigate critical turning points, career pivots, and identity
            restarts.
          </p>
        </div>

        {/* Master Content Grid */}
        <div className="flex flex-col items-center justify-center">
          {/* Column: Premium Framed Portrait Image */}
          <div
            ref={portraitFrameRef}
            className="flex flex-col items-center justify-center relative z-20"
          >
            <div className="relative group w-full max-w-[380px] xs:max-w-md">
              {/* Backglow border layer */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500 pointer-events-none z-0" />

              {/* Main Photo Container */}
              <div className="main-photo-card relative rounded-[28px] h-[520px] w-[360px] mx-auto sm:w-[400px] md:w-[460px] md:h-[580px] border border-white/10 overflow-hidden bg-black/40 shadow-2xl z-10">
                <Image
                  src={speakerPortrait}
                  alt="Taifaq, Workshop Guide"
                  className="w-full h-full object-cover transition duration-700 scale-[1.01] group-hover:scale-105"
                  width={500}
                  height={600}
                  id="speaker-portrait-img"
                  priority
                />

                {/* Translucent overlay label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 z-20 pt-20">
                  <div className="relative z-10">
                    <p className="text-xs/6 text-white/[0.8]">
                      I am <span className="text-indigo-300">Taiwo Faruq</span>,
                      but you can just call me Taifaq. I am a creative designer,
                      brand strategist, and a 300-level English Language and
                      Literature student at the University of Ibadan. <br />I
                      don't sit in a high corporate office giving abstract
                      advice. I am in the trenches with you every single day. I
                      know exactly what it feels like to struggle with
                      consistency while trying to scale Taifaq Pixels, manage
                      communities, and keep up with university grades. <br />I
                      have faced the exact same procrastination and self-doubt
                      that you are dealing with right now. I didn't beat
                      procrastination by becoming a robot; I beat it by building
                      simple, repeatable systems that work even when I feel
                      completely unmotivated. In this July X-Deep, I am
                      stripping away the fluff and handing you those exact
                      systems. <br />
                      <br />
                      <span className="font-bold text-sm text-primary-yellowBlock">
                        Let's stop overthinking. Let's start executing.
                      </span>
                    </p>
                  </div>

                  {/* Credential lists */}
                  <div className="hidden lg:flex w-full flex-wrap items-center gap-2 pt-4 relative z-10">
                    {credentials.map((credential: string) => (
                      <span
                        key={credential}
                        className="text-white/[0.8] text-[10px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl px-2 py-1.5 rounded-lg transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04] select-none"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating aesthetic accent widget */}
              <div
                ref={floatBadgeRef}
                className="absolute top-6 -right-4 bg-[#0d0d15]/90 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-2xl shadow-xl hidden sm:block z-30"
              >
                <p className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest font-bold">
                  LIVE Q&A SESSION
                </p>
                <p className="text-[11px] text-white font-medium">
                  Ask Your Questions Live
                </p>
              </div>
            </div>

            {/* Credential lists */}
            <div className="flex lg:hidden w-full flex-wrap items-center gap-2 pt-4 relative z-10">
              {credentials.map((credential: string) => (
                <span
                  key={credential}
                  className="text-white/[0.8] text-[10px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl px-2 py-1.5 rounded-lg transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04] select-none"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
