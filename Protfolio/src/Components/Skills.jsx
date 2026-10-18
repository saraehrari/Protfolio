


import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiBootstrap,
  SiJira,
  SiGithub,
  SiTypescript,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";



const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Jira", icon: SiJira },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Figma", icon: SiFigma },

];


export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#100d18] px-6 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          What I Work With
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          My Technical{" "}
          <span className="text-purple-400">Skills</span>
        </h2>

        <p className="mb-12 max-w-xl leading-7 text-gray-400">
          Technologies and tools I use to build modern,
          responsive, and interactive web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/[0.08] hover:shadow-xl hover:shadow-purple-900/20"
              >
                <Icon
                  aria-hidden="true"
                  className="text-4xl text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-300"
                />

                <h3 className="text-center text-sm font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
