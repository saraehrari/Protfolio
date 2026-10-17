import { NavLink } from "react-router-dom";
export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 sm:text-base ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110">
            S
          </span>

          <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
            Sara<span className="text-violet-500"></span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-3">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/portfolio" className={linkStyle}>
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-1 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 sm:ml-2 sm:px-6 sm:text-base ${
                isActive
                  ? "border-violet-400 bg-violet-600 text-white"
                  : "border-violet-500/50 bg-transparent text-violet-300 hover:border-violet-400 hover:bg-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/20"
              }`
            }
          >
            Let's Talk <span className="ml-1">↗</span>

          </NavLink>
        </div>
      </div>
    </nav>
  );
}