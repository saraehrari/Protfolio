const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML5", icon: "5" },
  { name: "CSS3", icon: "✳" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git & GitHub", icon: "⌘" },
  { name: "REST API", icon: "↔" },
  { name: "React Router", icon: "⇄" },
  { name: "Jira", icon: "✓" },
];

export default function Carts() {
  return (
    <section className="bg-[#100d18] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          What I Work With
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          My Technical{" "}
          <span className="text-purple-400">Skills</span>
        </h2>

        <p className="mb-12 max-w-xl leading-7 text-gray-400">
          Technologies and tools I use to build and test
          modern web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex min-h-36 flex-col items-center justify-center
              gap-4 rounded-2xl border border-purple-900/60
              bg-[#211a30] p-6 transition duration-300
              hover:-translate-y-2 hover:border-purple-400
              hover:bg-purple-950/60 hover:shadow-lg
              hover:shadow-purple-500/10"
            >
              <span className="text-3xl font-bold text-purple-300 transition duration-300 group-hover:scale-110">
                {skill.icon}
              </span>

              <h3 className="text-center text-sm font-medium text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}