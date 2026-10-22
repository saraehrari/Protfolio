
import {
  Target,
  Layers3,
  Code2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I understand the goals, requirements, and needs of every project.",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I organize ideas into clean, intuitive, and user-friendly interfaces.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I create responsive web experiences using modern frontend technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "I test functionality, fix issues, and refine the user experience.",
    icon: ShieldCheck,
  },
];

export default function Myapproach() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#070611] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-60"
        
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070611]/60 via-[#070611]/75 to-[#070611]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]"
      />

      {/* Centered content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:px-10 lg:py-32">
        {/* Heading */}
       <header className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-purple-400" />
            <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
              My Approach
            </p>
            <span className="h-px w-10 bg-purple-400" />
          </div>

          <h2 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            From Idea to
            <span className="block font-serif italic text-purple-400">
              Impact.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-indigo-100/75 sm:text-lg">
            A thoughtful process for transforming ideas into beautiful,
            accessible, and user-friendly web experiences.
          </p>
        </header>

        {/* Centered process steps */}
        <div className="relative mt-20 grid w-full gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-purple-300/25 bg-white/[0.05] shadow-[0_0_35px_rgba(139,92,246,0.12)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-purple-300/70 group-hover:shadow-[0_0_45px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.07]" />

                <Icon
                  size={42}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-purple-200 transition duration-300 group-hover:scale-110 group-hover:text-white"
                />

                <span className="absolute -bottom-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-purple-400/40 bg-[#130d2b] text-xs font-medium">
                  {number}
                </span>
              </div>

              <h3 className="text-xl font-semibold sm:text-2xl">
                {title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-7 text-indigo-100/70">
                {description}
              </p>

              <span className="mt-6 h-px w-10 bg-purple-500 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 flex w-full flex-col items-center justify-center gap-8 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between">
          <p className="font-serif text-2xl italic text-purple-300">
            Better Ideas. Better Web.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-indigo-200/70 sm:gap-4">
            <span>Plan</span>
            <span className="text-purple-400">/</span>
            <span>Design</span>
            <span className="text-purple-400">/</span>
            <span>Develop</span>
            <span className="text-purple-400">/</span>
            <span>Improve</span>
            <ArrowUpRight
              size={15}
              className="text-purple-300"
              aria-hidden="true"
            />
          </div>
        </footer>
      </div>
    </section>
  );
}
