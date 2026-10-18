

import MovieSearch from "../assets/MovieSearch.png";
import DailyQuote from "../assets/Daily.png";
import Profilepage from "../assets/Profile.png";


import { Link } from "react-router-dom";

const projects = [
  {
    name: "Movie Search",
    description: "Search for movies and explore their details.",
    tech: ["JavaScript", "React", "CSS"],
    image: MovieSearch,
  },
  {
    name: "Daily Quote",
    description: "Discover inspiring quotes for everyday motivation.",
    tech: ["JavaScript", "React", "CSS", "HTML"],
    image: DailyQuote,
  },
  {
    name: "Profile Page",
    description: "A personal profile website with a clean design.",
    tech: ["JavaScript", "React", "CSS"],
    image: Profilepage,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#100d18] px-6 py-20 text-white sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          My Work
        </p>

        <h2 className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <p className="mb-10 text-gray-400">
          Some projects I've built using modern web technologies.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-purple-900/60 bg-[#211a30] transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-950/40"
            >
              <img
                src={project.image}
                alt={`${project.name} project screenshot`}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold">
                  {project.name}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-purple-500/20 bg-purple-950/60 px-3 py-1 text-xs text-purple-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  to="/portfolio"
                  className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold transition hover:bg-purple-500"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
