
   
import {
  Target,
  Layers3,
  Code2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const approach = [
  {
    number: "01",
    name: "Understand",
    description:
      "I start by understanding the goals, requirements, and needs of each project.",
    icon: Target,
  },
  {
    number: "02",
    name: "Plan & Design",
    description:
      "I organize ideas and focus on creating clean, intuitive, and user-friendly interfaces.",
    icon: Layers3,
  },
  {
    number: "03",
    name: "Build",
    description:
      "I turn ideas into responsive web experiences using modern frontend technologies.",
    icon: Code2,
  },
  {
    number: "04",
    name: "Test & Improve",
    description:
      "I check functionality, identify issues, and refine the experience to improve quality.",
    icon: ShieldCheck,
  },
];

export default function Myapproach() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070611] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-65"
        style={{
          backgroundImage: "url('/src/assets/approach-bg.png')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#080714]/50 via-[#080714]/70 to-[#070611]" />

      {/* Purple glow effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-purple-400" />
            <p className="text-xs uppercase tracking-[0.4em] text-purple-300">
              My Approach
            </p>
          </div>

          <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            From Idea to
            <span className="block font-serif italic text-purple-400">
              Impact.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-indigo-100/80 sm:text-lg">
            I follow a simple yet effective process to turn ideas into real,
            user-friendly web experiences.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {/* Connecting line on desktop */}
          <div className="absolute left-[8%] right-[8%] top-[72px] hidden h-px bg-gradient-to-r from-purple-500/20 via-purple-400 to-indigo-400/20 lg:block" />

          {approach.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.number} className="group relative">
                {/* Icon panel */}
                <div className="relative mb-8 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-purple-300/25 bg-white/[0.04] shadow-[0_0_40px_rgba(124,58,237,0.12)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-purple-300/70 group-hover:shadow-[0_0_55px_rgba(139,92,246,0.3)]">
                  <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.06]" />

                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-70" />

                  <Icon
                    size={43}
                    strokeWidth={1.5}
                    className="relative text-purple-200 transition duration-500 group-hover:scale-110 group-hover:text-white"
                  />

                  <span className="absolute -bottom-4 left-2 flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/40 bg-[#130d2b] text-sm font-medium text-white shadow-lg shadow-purple-900/40">
                    {item.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.name}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-indigo-100/70">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-12 bg-purple-500 transition-all duration-500 group-hover:w-24 group-hover:bg-purple-300" />
              </article>
            );
          })}
        </div>

        {/* Bottom signature */}
        <div className="mt-24 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl italic text-purple-300 sm:text-3xl">
              Better Ideas.
            </p>
            <p className="ml-8 font-serif text-2xl italic text-purple-300 sm:text-3xl">
              Better Web.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-indigo-200/70 sm:gap-5">
            <span>Plan</span>
            <span className="text-purple-400">/</span>
            <span>Design</span>
            <span className="text-purple-400">/</span>
            <span>Develop</span>
            <span className="text-purple-400">/</span>
            <span>Improve</span>

            <ArrowUpRight
              size={16}
              className="ml-1 text-purple-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
