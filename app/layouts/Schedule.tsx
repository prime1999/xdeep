"use client";

// react-imports
import { useEffect, useRef, useState } from "react";
// next-imports
import Link from "next/link";
// Google analytics imports
import { sendGAEvent } from "@next/third-parties/google";
// icons-imports
import { ChevronsRight } from "lucide-react";
import {
  Calendar as CalendarIcon,
  Sparkles,
  Layers,
  Video,
  FileText,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
// gsap-imports
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import CountDown from "@/components/ui/CountDown";

// Register the GSAP TextPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const Schedule = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const floatersRef = useRef<HTMLDivElement>(null);

  // FIXED: Declared missing animation refs
  const textRef = useRef<HTMLSpanElement>(null);
  const actionsWrapperRef = useRef<HTMLDivElement>(null);

  const questions = [
    "Is this really what I am supposed to be doing?",
    "Am I choosing the wrong path and wasting time?",
    "Why does it feel like I'm falling behind immediately?",
  ];

  const [showAdjacentLinks, setShowAdjacentLinks] = useState(false);

  // Pure GSAP Infinite Character Typing Loop Setup
  useEffect(() => {
    if (!textRef.current) return;

    const masterTl = gsap.timeline({ repeat: -1 });

    questions.forEach((question) => {
      const questionTl = gsap.timeline({
        onStart: () => {
          setShowAdjacentLinks(false);
          if (textRef.current) textRef.current.textContent = "";
        },
      });

      questionTl
        // 1. Fluidly type out sentence directly on the DOM node node
        .to(textRef.current, {
          duration: question.length * 0.035, // Balanced highly-readable pace
          text: question,
          ease: "none",
        })
        // 2. Fire action menu triggers exactly on finish string sequence
        .call(() => {
          setShowAdjacentLinks(true);
        })
        // 3. Keep text locked static for 5 seconds for clear reading window
        .to({}, { duration: 5 });

      masterTl.add(questionTl);
    });

    return () => {
      masterTl.kill();
    };
  }, []);

  // Structural Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      calendarRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    tl.fromTo(
      terminalRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    );

    const floaters = floatersRef.current?.querySelectorAll(".floating-badge");
    if (floaters) {
      tl.fromTo(
        floaters,
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );

      gsap.to(floaters, {
        y: -6,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.25,
      });
    }
  }, []);

  // Smooth Slide-In Reactions for action layout buttons
  useEffect(() => {
    if (showAdjacentLinks && actionsWrapperRef.current) {
      gsap.fromTo(
        actionsWrapperRef.current.children,
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }
  }, [showAdjacentLinks]);

  const daysInJune = 30;
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <section id="schedule" className="relative py-16">
      <div
        id="showcase-dashboard"
        className="relative mx-auto mt-12 w-full lg:w-8/12 px-2 lg:mt-12"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative rounded-3xl border border-white/10 bg-[#09090e] p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/5">
          {/* Top Control Bar */}
          <div className="mb-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02] -mx-6 -mt-6 px-6 py-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                X-Deep Admin Panel
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-indigo-300 border border-white/5">
              <Sparkles className="h-3 w-3 text-indigo-400" />
              <span>Interactive Space</span>
            </div>
          </div>

          {/* Floating Badges */}
          <div
            ref={floatersRef}
            className="pointer-events-none absolute inset-x-0 -top-6 flex justify-between px-4"
          >
            <div className="floating-badge pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-[#090912]/90 px-3.5 py-1.5 text-xs text-gray-300 shadow-lg shadow-black/40 backdrop-blur-md">
              <Video className="h-3.5 w-3.5 text-red-500" />
              <span>Live Stream Grid</span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="floating-badge pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs text-indigo-200 shadow-lg shadow-black/40 backdrop-blur-md">
              <Layers className="h-3.5 w-3.5 text-indigo-400" />
              <span>Diagnostic Logs</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {/* Left panel: June Calendar */}
            <div
              ref={calendarRef}
              className="rounded-2xl border border-white/5 bg-black/40 p-4 md:col-span-2"
            >
              <div className="mb-3 flex items-center justify-between font-mono">
                <span className="text-[11px] font-bold text-gray-200 uppercase">
                  June 2026
                </span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-white/5 rounded flex items-center justify-center text-[8px] text-gray-400 cursor-pointer">
                    &lt;
                  </div>
                  <div className="w-4 h-4 bg-white/5 rounded flex items-center justify-center text-[8px] text-gray-400 cursor-pointer">
                    &gt;
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center font-mono">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-[9px] font-bold text-gray-600 py-1 uppercase"
                  >
                    {day}
                  </div>
                ))}

                {Array.from({ length: daysInJune }).map((_, index) => {
                  const dayNumber = index + 1;
                  const isSaturday27th = dayNumber === 27;

                  return (
                    <div
                      key={dayNumber}
                      className={`relative flex h-7 items-center justify-center rounded-lg text-[10px] font-medium transition-all ${
                        isSaturday27th
                          ? "bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/50 scale-105 z-10"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{dayNumber}</span>
                      {dayNumber === 26 && (
                        <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-purple-500/80" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-white/5 pt-3">
                <p className="flex items-center gap-2 text-[10px] text-white/[0.8] font-semibold">
                  <Clock className="h-3 w-3" />
                  <span>Saturday, June 27 • 7:45 PM UTC</span>
                </p>
              </div>
              <CountDown />
            </div>

            {/* Right panel: Journal Logs */}
            <div className="flex flex-col justify-between space-y-4 md:col-span-3">
              <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                  <FileText className="h-3 w-3" />
                  <span>PERSONAL JOURNAL LOGS</span>
                </div>

                <div className="flex gap-4">
                  <div className="text-xs font-mono text-gray-500 shrink-0">
                    26 JUN
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-indigo-400 font-bold mb-1">
                      [ PRE-EVENT LOG ]
                    </p>
                    <div className="h-1 w-full bg-white/5 rounded">
                      <div className="h-full w-2/3 bg-indigo-500/50 rounded animate-pulse"></div>
                    </div>
                    <p className="text-[11px] text-gray-500 italic mt-1.5">
                      Is this really what I am supposed to be doing?
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xs font-mono text-indigo-400 shrink-0">
                    27 JUN
                  </div>
                  <div className="flex-1 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3">
                    <p className="text-xs text-white font-bold mb-1">
                      X-Deep June Session
                    </p>
                    <p className="text-[8px] text-gray-400 leading-tight italic">
                      "Stop overthinking your future. Let's find your direction
                      together."
                    </p>
                  </div>
                </div>
              </div>

              {/* Typing Interactive Scanner Section */}
              <div
                ref={terminalRef}
                className="rounded-2xl border border-white/5 bg-black/40 p-4 font-mono text-xs"
              >
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                    Diagnostic Scanner
                  </span>
                  <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>

                {/* FIXED: Replaced standard React text output tracking with an empty ref target container for GSAP */}
                <div className="min-h-[50px] relative">
                  <HelpCircle className="absolute left-0 top-0.5 h-4 w-4 text-indigo-400" />
                  <p className="pl-6 text-[11px] leading-relaxed text-gray-300">
                    <span
                      ref={textRef}
                      className="text-gray-200 font-medium"
                    ></span>
                    <span className="inline-block h-3.5 w-1.5 rounded-xs translate-y-0.5 bg-indigo-400 ml-1 animate-pulse" />
                  </p>
                </div>

                {/* Action Buttons Link Wrapper */}
                <div
                  ref={linksContainerRef}
                  className="mt-3.5 border-t border-white/5 pt-3"
                >
                  {showAdjacentLinks ? (
                    <div
                      ref={actionsWrapperRef}
                      className="flex flex-wrap gap-2 transition-all"
                    >
                      <span className="text-[9px] uppercase tracking-wider text-gray-600 py-1 pr-1">
                        Actions:
                      </span>
                      <a
                        href="#the-reality"
                        className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-300 hover:bg-white/10 transition hover:text-white flex items-center gap-1 border border-white/5"
                      >
                        <span>Explore Reality</span>
                        <ArrowRight className="h-2.5 w-2.5" />
                      </a>
                      <a
                        href="#features"
                        className="rounded-md bg-indigo-500/10 px-2 py-1 text-[10px] text-indigo-300 hover:bg-indigo-500/20 transition border border-indigo-500/20"
                      >
                        <span>View Roadmap</span>
                      </a>
                    </div>
                  ) : (
                    <span className="text-[9px] text-gray-600 italic">
                      Synthesizing diagnostics...
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Overlay Badge */}
          <div className="absolute bottom-8 right-[-14px] w-32 bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl shadow-xl transform rotate-3 z-20 pointer-events-auto shadow-black/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full border border-emerald-400 animate-pulse"></div>
              <span className="text-[9px] text-white font-semibold tracking-wide uppercase">
                LIVE NOW
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-emerald-500"></div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] text-white/[0.8] font-semibold border-t border-white/5 pt-4">
            <span>HOSTED STREAM ON GOOGLE MEET</span>
          </div>
        </div>
      </div>
      <Link
        href="https://wa.link/8yf5wm"
        target="blank"
        onClick={() => {
          sendGAEvent("event", "register_click", {
            link_url: "https://wa.link/8yf5wm",
            source: "schedule_section",
          });
        }}
        className="w-11/12 md:w-1/4 lg:w-1/6 mt-4 mx-auto flex items-center justify-center gap-1 text-xs bg-primary-blue text-white rounded-full duration-500 transition hover:bg-primary-blue/80 font-semibold py-2 px-4 cursor-pointer"
      >
        Register <ChevronsRight className="mt-1" size={15} />
      </Link>
    </section>
  );
};

export default Schedule;
