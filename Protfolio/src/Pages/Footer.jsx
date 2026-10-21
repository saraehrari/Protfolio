

import { Link } from "react-router-dom";

export default function Footer({ children }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#0B0912] via-[#17102D] to-[#101D3D] text-white">

      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Sara<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Building modern, creative, and responsive web experiences
              with React and Tailwind CSS.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold transition hover:border-purple-400 hover:bg-purple-500/20"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold transition hover:border-purple-400 hover:bg-purple-500/20"
              >
                in
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold transition hover:border-purple-400 hover:bg-purple-500/20"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-purple-400">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="transition hover:text-purple-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Let's Connect</h3>

            <p className="text-sm leading-7 text-gray-400">
              Have a project idea or want to work together?
              I'd love to hear from you.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-900/30 transition hover:scale-105 hover:from-purple-500 hover:to-blue-500"
            >
              Get in Touch <span>→</span>
            </Link>
          </div>

        </div>

        {/* Optional Children */}
        {children && (
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-300">
            {children}
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sara Ehrari. All rights reserved.
          </p>

          <p>
            Made with <span className="text-purple-400">♥</span> using React
          </p>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="rounded-full border border-white/10 px-3 py-2 text-lg transition hover:bg-purple-500/20 hover:text-purple-300"
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
