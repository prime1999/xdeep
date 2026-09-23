"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import RegisterLink from "@/components/RegisterLink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Schedule = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);

  const targetDate = new Date("2026-09-30T20:00:00+01:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateCountdown = () => {
      const now = Date.now();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      if (cardRef.current) {
        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        );
      }

      tl.fromTo(
        ".ticker-block",
        { opacity: 0, y: -20, rotateX: -45 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.1 },
        "-=0.7",
      );

      if (telegramRef.current) {
        tl.fromTo(
          telegramRef.current,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.35",
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.3)" },
          "-=0.3",
        );
      }

      gsap.to(".pill-glow", {
        opacity: 0.5,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".telegram-glow", {
        opacity: 0.7,
        scale: 1.05,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <section
      ref={containerRef}
      id="schedule"
      className="perspective-[1000px] flex w-full flex-col items-center justify-center bg-slate-950 px-4 py-24 text-white"
    >
      {/* Section Intro */}
      <div className="mx-auto mb-12 flex max-w-xl flex-col items-center justify-center space-y-3 text-center">
        <h2 className="font-display text-3xl font-black tracking-tight text-primary-yellow sm:text-4xl">
          Session Details
        </h2>

        <p className="max-w-md text-sm leading-6 text-white/50">
          Everything you need to know before we go live.
        </p>
      </div>

      {/* Countdown Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-xl overflow-hidden rounded-[40px] border border-white/5 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-md sm:p-10"
      >
        {/* Background Glows */}
        <div className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-indigo-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-rose-500/5 blur-[80px]" />

        {/* Header */}
        <div className="relative z-10 mb-6 flex w-full items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            September X-Deep Session
          </span>

          <div className="relative">
            <div className="pill-glow absolute inset-0 rounded-full bg-rose-500/20 blur-md" />

            <span className="relative max-w-36 inline-block rounded-full border border-rose-500/30 bg-rose-950/80 px-4 py-1.5 font-mono text-xs font-bold text-rose-400 shadow-inner backdrop-blur-sm">
              30 September
            </span>
          </div>
        </div>

        {/* Hero Countdown */}
        <h3 className="relative z-10 mb-10 text-4xl font-black tracking-tight text-slate-100 sm:text-5xl">
          In {timeLeft.days} days
        </h3>

        {/* Digital Countdown */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center rounded-[28px] border border-white/5 bg-black/60 p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] sm:p-6">
          <span className="mb-4 self-start pl-1 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
            Live Stream Countdown
          </span>

          <div className="flex select-none items-center justify-center gap-1 font-mono text-2xl font-black text-white sm:gap-2 sm:text-4xl">
            {/* Days */}
            <div className="ticker-block min-w-[58px] rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-3 text-center shadow-lg sm:min-w-[68px]">
              {pad(timeLeft.days)}
            </div>

            <span className="mx-0.5 -mt-1 animate-pulse font-sans text-neutral-800">
              :
            </span>

            {/* Hours */}
            <div className="ticker-block min-w-[58px] rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-3 text-center shadow-lg sm:min-w-[68px]">
              {pad(timeLeft.hours)}
            </div>

            <span className="mx-0.5 -mt-1 animate-pulse font-sans text-neutral-800">
              :
            </span>

            {/* Minutes */}
            <div className="ticker-block min-w-[58px] rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-3 text-center shadow-lg sm:min-w-[68px]">
              {pad(timeLeft.minutes)}
            </div>

            <span className="mx-0.5 -mt-1 animate-pulse font-sans text-neutral-800">
              :
            </span>

            {/* Seconds */}
            <div className="ticker-block min-w-[58px] rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 px-3 py-3 text-center font-bold text-rose-400 shadow-lg sm:min-w-[68px]">
              {pad(timeLeft.seconds)}
            </div>
          </div>

          {/* Labels */}
          <div className="mt-3 flex w-full items-center justify-center gap-1 text-center font-mono text-[10px] uppercase tracking-widest text-slate-600 sm:gap-2">
            <span className="min-w-[58px] sm:min-w-[68px]">Days</span>
            <span className="w-2" />
            <span className="min-w-[58px] sm:min-w-[68px]">Hrs</span>
            <span className="w-2" />
            <span className="min-w-[58px] sm:min-w-[68px]">Min</span>
            <span className="w-2" />
            <span className="min-w-[58px] sm:min-w-[68px]">Sec</span>
          </div>
        </div>
      </div>

      {/* Uprix Space / Telegram Access */}
      <div ref={telegramRef} className="relative mt-6 w-full max-w-xl">
        <div className="telegram-glow pointer-events-none absolute inset-4 rounded-[28px] bg-primary-yellow/10 blur-2xl" />

        <div className="relative overflow-hidden rounded-[28px] border border-primary-blue/20 px-5 py-5 shadow-xl backdrop-blur-xl sm:px-6">
          {/* Top Accent */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/60 to-transparent" />

          <div className="flex items-center justify-between gap-4">
            {/* Telegram Identity */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-blue text-black shadow-[0_0_25px_rgba(197,240,77,0.15)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M21.5 3.5 18.2 20c-.25 1.17-.92 1.46-1.87.91l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.51-8.59c.41-.37-.09-.58-.64-.21L5.16 13.2.12 11.62c-1.1-.35-1.12-1.1.23-1.63L20.04 2.4c.91-.34 1.7.21 1.46 1.1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold tracking-tight text-white">
                    Uprix Space
                  </p>
                </div>

                <p className="mt-0.5 text-xs text-white/45">
                  Telegram community access
                </p>
              </div>
            </div>

            {/* Free Access */}
            <div className="hidden text-right sm:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                Access
              </p>

              <p className="mt-0.5 text-sm font-bold text-primary-blue">
                100% Free
              </p>
            </div>
          </div>

          {/* Mobile Free Access */}
          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 sm:hidden">
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Community Access
            </span>

            <span className="text-xs font-bold text-primary-blue">
              100% Free
            </span>
          </div>
        </div>
      </div>

      {/* Register CTA */}
      <div ref={ctaRef} className="mt-6 flex justify-center">
        <RegisterLink source="audience" />
      </div>

      {/* Footnote */}
      <p className="mt-4 max-w-md text-center text-sm leading-6 text-white/50">
        Completely FREE & open to the public. Bring an open mind and a notepad.
      </p>
    </section>
  );
};

export default Schedule;
