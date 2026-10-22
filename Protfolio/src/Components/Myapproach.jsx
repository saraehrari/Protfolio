
import { Target, Layers3, Code2, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I discover the goals, requirements, and purpose behind every project.",
    icon: Target,
    color: "text-fuchsia-300",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I turn ideas into clear layouts with thoughtful user experiences.",
    icon: Layers3,
    color: "text-violet-300",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop responsive interfaces with modern frontend technologies.",
    icon: Code2,
    color: "text-sky-300",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "I test, refine, and polish each detail for a better result.",
    icon: ShieldCheck,
    color: "text-pink-300",
  },
];

export default function Myapproach() {
  return (
    <section className="relative center overflow-hidden bg-[#080612] px-6 py-28 text-white sm:px-10 lg:py-36">
      {/* Colorful background */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-purple-700/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-pink-600/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-purple-300">
            How I Work
          </p>

          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Ideas become
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-300 via-purple-400 to-blue-400 bg-clip-text font-serif italic text-transparent">
              experiences.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Every great website starts with an idea. Here is how I transform
            that idea into something meaningful.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative mt-24">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-fuchsia-500/20 via-purple-400/80 to-blue-500/20 lg:block"
          />

          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ number, title, description, icon: Icon, color }) => (
              <article key={number} className="group relative">
                <div className="mb-8 flex items-center gap-4 lg:block">
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#151026] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/60 group-hover:shadow-purple-500/20 ${color}`}
                  >
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span className="text-sm tracking-[0.25em] text-gray-500 lg:mt-6 lg:block">
                    STEP {number}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold transition-colors group-hover:text-purple-200">
                  {title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
                  {description}
                </p>

                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-all group-hover:w-14" />
                  <span className="h-1 w-2 rounded-full bg-blue-400/60" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-sm tracking-wide text-gray-400">
            Thoughtful process.
            <span className="mx-2 text-purple-400">✦</span>
            Meaningful results.
          </p>
        </div>
      </div>
    </section>
  );
}
