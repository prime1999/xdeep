"use client";

import Image from "next/image";
import { Award, CheckCircle, Quote, Sparkles, Star } from "lucide-react";
import speakerPortrait from "@/public/images/speaker.jpeg";

const Speaker = () => {
  const credentials = [
    "Brand Identity Designer",
    "Founder, Xelite",
    "Founder, Cresend and Uprix",
    "English Lit Scholar",
    "Visual Storyteller",
  ];

  return (
    <section
      id="speaker"
      className="relative w-11/12 mx-auto py-24 overflow-hidden"
    >
      {/* Background radial glows matching the midnight aurora aesthetic */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="w-10/12 space-y-4 mb-16">
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
          {/* Left Column: Premium Framed Portrat Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[380px] xs:max-w-md">
              {/* Backglow border layer */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500 pointer-events-none" />

              {/* Main Photo Container */}
              <div className="relative rounded-[28px] mx-auto h-[400px] w-[300px] md:w-[400px] md:h-[500px] border border-white/10 overflow-hidden bg-black/40 aspect-square shadow-2xl">
                <Image
                  src={speakerPortrait}
                  alt="Taipaq, Workshop Guide"
                  className="w-full h-full object-cover transition duration-700 scale-[1.01] group-hover:scale-105"
                  width={500}
                  height={500}
                  id="speaker-portrait-img"
                />

                {/* Translucent overlay label */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/5 p-4">
                  <h6 className="text-sm font-bold text-white tracking-wide">
                    Taifaq
                  </h6>
                  <p className="text-[11px] text-indigo-300 tracking-wider uppercase font-semibold">
                    FOUNDER, Taifaq Piexels
                  </p>
                </div>
              </div>

              {/* Floating aesthetic accent widget */}
              <div className="absolute top-6 -right-4 bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-2xl shadow-xl transform rotate-3 hidden sm:block">
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
          <div className="lg:col-span-7 space-y-8">
            {/* Direct personal perspective quote box */}
            <div className="relative space-y-4 rounded-3xl border border-white/5 bg-white/[0.015] p-6 sm:p-8 backdrop-blur-md overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500" />

              <div className="pt-4 border-t border-white/5">
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
                  1% of creatives), the{" "}
                  <span className="font-bold">CRESCEND</span> branding ecosystem
                  (designed for strategic brand growth),
                  <br />
                  <br /> And the Uprix community (where our Uprizers build
                  measurable consistency of growth). Right now, my focus is
                  locked on X-Deep. With this June edition centered entirely on
                  purpose, I am here to provide practical solutions. If you are
                  seeking clarity or trying to align your work with a deeper
                  mission, I am ready to help you find that alignment and make
                  this a transformative experience.
                </p>
              </div>
              {/* Credential lists */}
              <div className="w-full flex flex-wrap items-center gap-6">
                {credentials.map((credential: string) => (
                  <span key={credential} className="">
                    <span className="text-white/[0.8] text-xs border backdrop-blur-3xl p-2">
                      {" "}
                      {credential}
                    </span>{" "}
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
