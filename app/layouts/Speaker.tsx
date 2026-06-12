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
  const bioCardRef = useRef<HTMLDivElement>(null);

  const credentials = [
    "Brand Identity Designer",
    "Founder, Xelite",
    "Founder, Cresend",
    "Founder, Uprix",
    "English Lit Scholar",
    "Visual Storyteller",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

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

    // 4. Bio text card block content slide up
    if (bioCardRef.current) {
      tl.fromTo(
        bioCardRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6",
      );

      tl.fromTo(
        bioCardRef.current.querySelectorAll(".pt-4, .w-full"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
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
      id="speaker"
      className="relative w-11/12 mx-auto py-24 overflow-hidden"
    >
      {/* Background radial glows - Forced to z-0 so they never obscure content */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-950/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-950/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Module Header */}
        <div ref={headerRef} className="w-10/12 space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Guide</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Meet Your Guide
          </h2>
          <p className="text-base text-gray-400 max-w-xl">
            Learn directly from someone who is dedicated to helping people
            navigate critical turning points, career pivots, and identity
            restarts.
          </p>
        </div>

        {/* Master Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Framed Portrait Image */}
          <div
            ref={portraitFrameRef}
            className="lg:col-span-5 flex justify-center lg:justify-start relative z-20"
          >
            <div className="relative group w-full max-w-[380px] xs:max-w-md">
              {/* Backglow border layer */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500 pointer-events-none z-0" />

              {/* Main Photo Container */}
              <div className="main-photo-card relative rounded-[28px] mx-auto h-[400px] w-[300px] md:w-[400px] md:h-[500px] border border-white/10 overflow-hidden bg-black/40 aspect-square shadow-2xl z-10">
                <Image
                  src={speakerPortrait}
                  alt="Taifaq, Workshop Guide"
                  className="w-full h-full object-cover transition duration-700 scale-[1.01] group-hover:scale-105"
                  width={500}
                  height={500}
                  id="speaker-portrait-img"
                  priority
                />

                {/* Translucent overlay label */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 z-20">
                  <h6 className="text-sm font-bold text-white tracking-wide">
                    Taifaq
                  </h6>
                  <p className="text-[11px] text-indigo-300 tracking-wider uppercase font-semibold">
                    FOUNDER, Uprix
                  </p>
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
          </div>

          {/* Right Column: Speaker Narrative Quotes & Credentialing highlights */}
          <div className="lg:col-span-7 space-y-8 relative z-20">
            {/* Direct personal perspective quote box */}
            <div
              ref={bioCardRef}
              className="relative space-y-4 rounded-3xl border border-white/5 bg-white/[0.015] p-6 sm:p-8 backdrop-blur-md overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 z-10" />

              <div className="pt-4 border-t border-white/5 relative z-10">
                <p className="text-xs/6 text-white/[0.8]">
                  I'm Taiwo Faruq, you can just call me{" "}
                  <span className="font-bold text-sm text-white">Taifaq</span>.
                  <br />
                  <br />
                  Hello, and welcome. I am a Brand Identity and Strategic Flyer
                  Designer who treats design as a language. Currently a
                  300-level English Language and Literature student at the
                  University of Ibadan, I blend human-centric storytelling with
                  behavioral science to build strategic visual systems that act
                  as silent salespersons.
                  <br />
                  <br /> Beyond the screen, my heart is in empowering others. I
                  am the founder of Xelite (an exclusive community for the top
                  1% of creatives),
                  <span className="font-bold">CRESCEND</span> (the branding
                  ecosystem designed for strategic brand growth), And the Uprix
                  community (where our Uprizers build measurable consistency of
                  growth).
                  <br />
                  <br /> Right now, my focus is locked on X-Deep. With this June
                  edition centered entirely on purpose, I am here to provide
                  practical solutions. If you are seeking clarity or trying to
                  align your work with a deeper mission, I am ready to help you
                  find that alignment and make this a transformative experience.
                </p>
              </div>

              {/* Credential lists */}
              <div className="w-full flex flex-wrap items-center gap-3 pt-2 relative z-10">
                {credentials.map((credential: string) => (
                  <span
                    key={credential}
                    className="text-white/[0.8] text-[11px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl px-3 py-1.5 rounded-lg transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04] select-none"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
