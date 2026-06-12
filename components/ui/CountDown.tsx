"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

const CountDown = () => {
  // Target Date: June 27, 2026 at 19:45 (7:45 PM)
  const targetDate = new Date("2026-06-27T19:45:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOver: false,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      };
    } else {
      timeLeft.isOver = true;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Update the ticking timer exactly every 1 second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Pad numbers with leading zeros for that premium digital UI feel
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (timeLeft.isOver) {
    return (
      <div className="w-full text-center py-4 px-6 bg-indigo-600/10 border border-indigo-500/20 rounded-xl max-w-xl mx-auto">
        <span className="text-sm font-heading font-semibold text-indigo-400 tracking-wide animate-pulse">
          ● X-DEEP IS LIVE NOW • JOIN THE MEET
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-[#09090e]/60 border border-white/[0.04] rounded-2xl p-2 backdrop-blur-md shadow-xl text-center space-y-4">
      {/* Countdown Grid Blocks */}
      <div className="w-full mx-auto grid grid-cols-4 gap-2 font-heading text-white">
        {/* Days */}
        <div className="bg-white/[0.02] border border-white/[0.03] p-3 rounded-xl text-white/[0.8]">
          <div className="text-2xl text-center sm:text-3xl font-bold tracking-tight text-indigo-400">
            {formatNumber(timeLeft.days)}
          </div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">
            Days
          </p>
        </div>

        {/* Hours */}
        <div className="bg-white/[0.02] border border-white/[0.03] p-3 rounded-xl text-white/[0.8]">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight">
            {formatNumber(timeLeft.hours)}
          </div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">
            Hours
          </p>
        </div>

        {/* Minutes */}
        <div className="bg-white/[0.02] border border-white/[0.03] p-3 rounded-xl text-white/[0.8]">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight">
            {formatNumber(timeLeft.minutes)}
          </div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">
            Mins
          </p>
        </div>

        {/* Seconds */}
        <div className="bg-white/[0.02] border border-white/[0.03] p-3 rounded-xl border-indigo-500/10">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90 font-mono">
            {formatNumber(timeLeft.seconds)}
          </div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mt-1">
            Secs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
