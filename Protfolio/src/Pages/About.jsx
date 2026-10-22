import { Link } from "react-router-dom";

export default function About({ title, para,photo, button }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0912] px-6 py-24 text-white sm:px-10 lg:py-32">

      {/* Background Effects */}
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]"></div>
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Image Section */}
        <div className="group relative mx-auto w-full max-w-md">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-60 blur transition duration-500 group-hover:opacity-100"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#15111F] p-3">
            <img
              src={photo}
              alt="About me"
              className="h-[420px] w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-[#191425] px-6 py-4 shadow-xl sm:-right-8">
            <p className="text-sm text-gray-400">Passion & Creativity</p>
            <p className="mt-1 font-semibold text-purple-300">
              Always Learning ✨
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400"></span>
            Get to Know Me
          </span>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>

          <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            {para}
          </p>

              <Link
                to="/contact"
                   className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-4 font-semibold shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30"
               >
             {button}
           <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
              </span>
             </Link>
        </div>

      </div>
    </section>
  );
}