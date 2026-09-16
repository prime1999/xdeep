"use client";

// react-imports
import { useEffect, useRef } from "react";
// icons-imports
import { AlertCircle } from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegisterLink from "@/components/RegisterLink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Fix = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const firstLayout = [
    {
      stage: "The Simple Math of ₦1,000,000",
      text: "How to package your offer so hitting one million is as simple as getting 5, 10, or 20 clients.",
      badge: "01",
    },
    {
      stage: "How to Stop Begging for Clients",
      text: "Simple ways to present yourself so clients respect your time and pay you without long arguments.",
      badge: "02",
    },
    {
      stage: "The Steady Client Stream",
      text: "How to set up a basic routine that brings in paying clients every week, even while you are busy in school or handling other tasks.",
      badge: "03",
    },
  ];
  const secondLayout = [
    {
      stage: "How I Build from My Room",
      text: "The honest truth of how I balance client work and business while studying at the University of Ibadan.",
      badge: "04",
    },
    {
      stage: "Live Question & Answer",
      text: "Bring your business problems, your pricing fears, and your failed offers. We will fix them together live on the call.",
      badge: "05",
    },
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

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
      );
    }

    if (leftColRef.current) {
      tl.fromTo(
        leftColRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5",
      );
    }

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
      id="the-breakdown"
      className="w-10/12 mx-auto relative py-20 overflow-hidden"
    >
      <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary-yellow">
            <AlertCircle className="h-3.5 w-3.5" />
            <span className="font-semibold">The Break-down</span>
          </div>
          <p className="text-sm text-white/50 font-medium mb-8 border-l-2 border-primary-blue pl-4">
            We will look at the real, practical steps to make this money:
          </p>
        </div>

        <div
          ref={rightColRef}
          className="lg:grid-cols-3 grid grid-cols-1 items-start gap-4"
        >
          {firstLayout.map((point) => (
            <div
              key={point.stage}
              className="group relative h-32 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                  {point.stage}
                </h3>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                  {point.badge}
                </span>
              </div>

              {/* FIXED DOWN HERE: Uses dangerouslySetInnerHTML to parse the HTML string markup */}
              <div
                className="text-xs text-gray-400 leading-relaxed space-y-2 [&>h3]:text-white [&>h3]:font-bold [&>h3]:my-2 [&>ul]:list-disc [&>ul]:pl-4"
                dangerouslySetInnerHTML={{ __html: point.text }}
              />
            </div>
          ))}
        </div>
        {/* second layout */}
        <div
          ref={rightColRef}
          className="lg:grid-cols-3 grid grid-cols-1 mt-4 items-start gap-4"
        >
          {secondLayout.map((point, index) => (
            <div
              key={point.stage}
              className={`group relative ${index === 0 ? "col-span-2" : "col-span-1"} h-32 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                  {point.stage}
                </h3>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                  {point.badge}
                </span>
              </div>

              {/* FIXED DOWN HERE: Uses dangerouslySetInnerHTML to parse the HTML string markup */}
              <div
                className="text-xs text-gray-400 leading-relaxed space-y-2 [&>h3]:text-white [&>h3]:font-bold [&>h3]:my-2 [&>ul]:list-disc [&>ul]:pl-4"
                dangerouslySetInnerHTML={{ __html: point.text }}
              />
            </div>
          ))}
        </div>
        {/* Action Link Target */}
        <div ref={ctaRef} className="flex justify-center mt-6">
          <RegisterLink source={"audience"} />
        </div>
      </div>
    </section>
  );
};

export default Fix;
