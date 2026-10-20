
import { FaReact } from "react-icons/fa";
import { Palette, Bug, Sparkles, ArrowUpRight } from "lucide-react";

export default function CurrentlyLearning() {
  const Learning = [
    {
      name: "React",
      description: "Building interactive and dynamic user interfaces.",
      icon: FaReact,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      name: "UI/UX Design",
      description: "Learning to create beautiful and user-friendly designs.",
      icon: Palette,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      name: "QA Testing",
      description: "Exploring software testing and improving product quality.",
      icon: Bug,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0B0912] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            My Learning Journey
          </div>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Currently{" "}
            <span className="text-purple-400">Learning</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Growing my skills, exploring new technologies, and improving
            every day through continuous learning.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {Learning.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/[0.05]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-gray-600 transition-colors group-hover:text-purple-400"
                  />
                </div>

                <h2 className="mb-3 text-xl font-semibold transition-colors group-hover:text-purple-300">
                  {item.name}
                </h2>

                <p className="text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-500 group-hover:w-2/3" />
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  Always learning, always growing
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
