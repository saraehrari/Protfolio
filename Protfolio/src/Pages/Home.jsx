import { Link } from "react-router-dom";

export default function Home({ image, title, para, boutton }) {
    
  return (
    <div className="flex min-h-screen items-center bg-[#0B0912] px-6 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 py-16 md:flex-row">

        {/* Text Section */}
        <div className="flex-1">
          <p className="mb-4 font-medium tracking-widest text-purple-400">
            HELLO, I'M SARA
          </p>

         <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
  Crafting Modern &{" "}
  <span className="text-purple-500">Interactive</span>{" "}
  Web Experiences
</h1>

          <p className="mb-8 max-w-lg text-lg leading-8 text-gray-400">
            {para}
          </p>

          <Link
           to="/portfolio"
          className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
         >
             {boutton}
             </Link>       
        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center">
          <img
            src={image}
            alt="Sara - Frontend Developer"
            className="h-80 w-72 rounded-2xl border border-purple-500/20 object-cover shadow-2xl shadow-purple-900/40 sm:h-130 sm:w-140"
          />
        </div>

      </div>
    </div>
  );
}