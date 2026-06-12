// icons-imports
import { Target } from "lucide-react";
import { Sparkles, Video, ChevronsRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col gap-2">
      <div className="mt-16 flex flex-col items-center gap-1 text-white/[0.8]">
        <span className="flex items-end">
          <p className="font-deep text-6xl">x</p>
          <h6 className="text-lg">- deep</h6>
        </span>
        <p className="text-xs">June Edition</p>
      </div>
      <span className="flex items-center gap-2 text-center justify-center border border-gray-500 bg-white/10 px-4 py-2 rounded-full mt-4">
        <Target className="text-primary-blue" size={15} />
        <h6 className="text-xs tracking-wider text-primary-blue">
          Open to everyone • Hosted live on Google Meet
        </h6>
      </span>
      <div className="w-full flex items-center justify-center flex-col px-4 mt-4">
        <h1 className="w-full tracking-wider mx-auto font-embrace font-bold text-2xl/12 md:text-4xl/14 md:w-9/12 text-center text-white/[0.8] space-y-2">
          <span className="text-primary-blue font-embrace">
            Purpose Discovery
          </span>{" "}
          Figuring Out What You Are Actually Supposed To Do
        </h1>
        <p className="md:w-8/12 lg:w-6/12 font-lato text-center text-sm mt-4 text-white/80">
          Confused about which path to take? Join us for an honest breakdown of
          how to discover your purpose and, more importantly, how to execute it.
        </p>
        <Link
          href="https://wa.link/8yf5wm"
          target="blank"
          className="flex items-center gap-1 text-xs bg-primary-blue text-white duration-500 transition hover:bg-primary-blue/80 text-white font-semibold py-2 px-4 rounded-full cursor-pointer mt-6"
        >
          Register <ChevronsRight className="mt-1" size={15} />
        </Link>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#030712] bg-indigo-950 flex items-center justify-center text-[10px] font-bold text-indigo-300">
              JD
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-[#030712] bg-purple-950 flex items-center justify-center text-[10px] font-bold text-purple-300">
              MK
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-[#030712] bg-slate-900 flex items-center justify-center text-[10px] font-bold text-gray-300">
              AL
            </div>
          </div>
          <p className="border-l border-gray-400 pl-4 text-xs text-gray-400 font-medium">
            Join <span className="font-bold text-white">400+ others</span>{" "}
            seeking their direction next month.
          </p>
        </div>
        <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-gray-600" />
            <span>Interact Live</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span>Actionable Roadmaps</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
