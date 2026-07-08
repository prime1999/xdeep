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

// Fixed backslashes here since template literals can natively handle single/double quotes
const text = `<h3>Practical Tools For Action</h3>
<p>This is where you get the practical tools:</p>

<ul class="tools-list list-disc pl-5 mt-2 space-y-1">
  <li>
    <strong>The 5-Minute Rule:</strong> 
    How to trick your brain into starting an overwhelming task without triggering anxiety.
  </li>
  <li>
    <strong>The Priority Filter:</strong> 
    Exactly how to choose the one task that moves your business or skill forward today, solving the <em>"I don't know where to start"</em> problem.
  </li>
  <li>
    <strong>The Studentpreneur Shield:</strong> 
    My personal time-management routine for balancing heavy academic workloads with creative freedom.
  </li>
</ul>`;

const Fix = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const painPoints = [
    {
      stage: "The Mindset Reset",
      text: "Before we talk about calendars or schedules, we have to clear the mental noise. We will tear down the fear of failure and the perfectionism that keeps you frozen at Stage Zero. I will show you how to accept messy first steps so you can actually start.",
      badge: "Step 01",
    },
    {
      stage: "The Real-Life Reality Check",
      text: "No polished social media lies here. I am going to show you the exact behind-the-scenes chaos of how I manage my own university coursework while running creative businesses, handling clients, and keeping my sanity intact. You will see the messy side of building a brand from a dorm room.",
      badge: "Step 02",
    },
    {
      stage: "The 3-Part Xecution System",
      text,
      badge: "Step 03",
    },
    {
      stage: "Raw, Unfiltered Q&A",
      text: "This is a conversation, not a broadcast. You can ask your most private, difficult questions about consistency, business confusion, or self-doubt. No judgment, no generic advice—just honest truths and direct solutions.",
      badge: "Step 04",
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
      id="the-fix"
      className="w-10/12 mx-auto relative py-20 overflow-hidden"
    >
      <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary-yellow">
            <AlertCircle className="h-3.5 w-3.5" />
            <span className="font-semibold">The fix?</span>
          </div>
          <p className="text-sm text-white/50 font-medium mb-8 border-l-2 border-primary-blue pl-4">
            Because X-Deep is all about real conversations and zero fluff, we
            are structuring this session to give you practical step-by-step
            breakdowns, real-life examples, and deep mindset shifts. Here is
            exactly how our time together will unfold:
          </p>
        </div>

        <div
          ref={rightColRef}
          className="lg:grid-cols-2 grid grid-cols-1 items-start gap-4"
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
