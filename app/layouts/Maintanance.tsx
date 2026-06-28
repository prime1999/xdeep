import { Sparkles, Heart } from "lucide-react";

const Maintenance = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center">
      {/* Decorative Sparkle Status */}
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 animate-pulse">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Deploying Next Edition</span>
      </div>

      {/* Brand Identity Layer */}
      <div className="flex items-baseline gap-1 select-none opacity-80 transition-opacity hover:opacity-100">
        <span className="flex items-end select-none">
          <p className="font-deep text-6xl text-white/[0.8]">x</p>
          <h6 className="text-lg font-heading tracking-wide text-white/[0.8]">
            - deep
          </h6>
        </span>
      </div>

      {/* Structural Messaging Layer */}
      <div className="space-y-3 max-w-md">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          June Edition is done!
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-1.5">
          <span>We’re prepping the next rollout.</span>
          <span className="inline-flex items-center gap-1 text-zinc-200 font-medium">
            See you soon{" "}
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-bounce" />
          </span>
        </p>
      </div>
    </main>
  );
};

export default Maintenance;
