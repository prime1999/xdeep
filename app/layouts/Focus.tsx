import {
  MessageCircle,
  Compass,
  Sparkles,
  MessageSquareText,
} from "lucide-react";

const Focus = () => {
  const highlights = [
    {
      title: "Real Stories, Messy Realities",
      desc: "Move past idealized social media profiles. We dive into the true story loops—including failed projects, confusion periods, and the exact steps taken to bounce back.",
      icon: Compass,
      color: "text-indigo-400",
    },
    {
      title: "Ask Private Questions",
      desc: "Anonymously or openly submit the questions weighing heavy on your heart. No inquiries are judged or avoided; we break down real dilemmas with concrete support.",
      icon: MessageSquareText,
      color: "text-purple-400",
    },
    {
      title: "Actionable Mindset Shifts",
      desc: "Get practical roadmaps to guide day-to-day decision making, transition planning, and find true internal peace of mind concerning your life's custom trajectory.",
      icon: Sparkles,
      color: "text-amber-400",
    },
  ];

  return (
    <section id="the-focus" className="relative py-20 overflow-hidden">
      {/* Aurora spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Group */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-semibold text-center">
              Core Session Strategy
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Real Conversations. <span className="">No Fluff.</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            X-Deep is a special monthly session designed for deep, unfiltered
            conversations about life, personal growth, and navigating the real
            world.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="w-11/12 mx-auto mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xs p-6 space-y-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] flex flex-col justify-between"
              >
                {/* Background numbers indicator - Elegant translucent design style */}
                <span className="absolute top-4 right-6 font-mono font-extrabold text-white/[0.03] text-5xl select-none leading-none z-0">
                  {`0${idx + 1}`}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ${item.color} shadow-sm border border-white/5`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </span>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-white text-lg mt-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Layout with premium frosted card styling */}
        <div className="mt-8 max-w-8/12 mx-auto rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center space-y-4 relative shadow-2xl">
          <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-indigo-500/5 blur-2xl" />
          <p className="text-sm text-gray-200 leading-relaxed italic">
            "We created this space specifically to move past surface-level
            advice and explore the actual, messy realities of building a
            successful life. In this session, you will get to listen to real
            stories, ask the questions weighing on your heart, and engage in
            discussions that will genuinely shift your mindset and give you
            peace of mind."
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-mono uppercase tracking-wider">
            <span>UPRIX CREATIVE DIRECTIVES</span>
            <span>•</span>
            <span className="text-indigo-400">EVOLVE UPWARD FORUM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
