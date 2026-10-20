
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Contact({ title, para }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0912] px-6 py-24 text-white">
      
      {/* Background Effects */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-14 text-center shadow-2xl shadow-purple-950/20 sm:px-12 sm:py-20">
          
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            Let's Connect
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title || "Have a Project in Mind?"}
            <span className="mt-2 block text-purple-400">
              Let's Build Something Great.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            {para ||
              "I'm always excited to learn, collaborate, and explore new opportunities. Let's connect and create something meaningful together."}
          </p>

          {/* Button */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-purple-500/30"
            >
              <Mail size={20} />
              Contact Me
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-white/15 px-7 py-4 font-medium text-gray-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-white/5 hover:text-white"
            >
              View My Work
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">
              Open to new opportunities and collaborations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
