



     import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          Sara<span className="text-gray-900">.</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition duration-300 sm:text-base ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition duration-300 sm:text-base ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition duration-300 sm:text-base ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-semibold transition duration-300 sm:text-base ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}