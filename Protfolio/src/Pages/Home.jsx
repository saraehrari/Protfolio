
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
export default function Home({ image, title, para, boutton }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0912] px-6 text-white sm:px-10">

      {/* Glowing Stars */}
      <div className="pointer-events-none absolute left-[8%] top-[35%] text-lg text-purple-200 drop-shadow-[0_0_12px_#c084fc]">
        ✦
      </div>

      <div className="pointer-events-none absolute left-[28%] top-[12%] text-sm text-white drop-shadow-[0_0_10px_#ffffff]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[45%] top-[25%] text-xl text-fuchsia-300 drop-shadow-[0_0_15px_#e879f9]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[15%] text-2xl text-blue-200 drop-shadow-[0_0_15px_#60a5fa]">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[30%] top-[55%] text-sm text-white drop-shadow-[0_0_10px_#ffffff]">
        ✦
      </div>

      <div className="pointer-events-none absolute left-[12%] bottom-[20%] text-xl text-fuchsia-300 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[55%] bottom-[12%] text-2xl text-purple-300 drop-shadow-[0_0_15px_#a855f7]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] bottom-[25%] text-lg text-blue-300 drop-shadow-[0_0_12px_#60a5fa]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[35%] bottom-[35%] text-xs text-white drop-shadow-[0_0_8px_#ffffff]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>

       <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>

       <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>

       <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>
       <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>
       <div className="pointer-events-none absolute right-[45%] top-[8%] text-sm text-purple-200 drop-shadow-[0_0_10px_#c084fc]">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[5%] top-[60%] text-sm text-blue-200 drop-shadow-[0_0_12px_#60a5fa]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[70%] text-xl text-fuchsia-200 drop-shadow-[0_0_15px_#e879f9]">
        ✧
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 py-16 md:flex-row md:justify-between">

        {/* Text Section */}
        <div className="flex-1">
          <p className="mb-4 font-medium tracking-widest text-purple-400">
            HELLO, I'M SARA
          </p>

          
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Crafting Modern &{" "}
                <span className="text-purple-500">
                 Interactive
                   </span>{" "}
                     Web Experiences
      </h1>


          <p className="mb-8 max-w-lg text-lg leading-8 text-gray-400">
            {para}
          </p>

<div className="flex flex-wrap items-center gap-5">

  {/* Portfolio Button */}
  <Link
    to="/portfolio"
    className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
  >
    {boutton || "Explore My Work"}
  </Link>

  {/* Social Media Icons */}
  <div className="flex items-center gap-3">

    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-300 transition duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-300 transition duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://x.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-300 transition duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
    >
      <FaXTwitter />
    </a>

  </div>

</div>

        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center">
         
{/* Modern Profile Image */}
<div className="relative flex flex-1 items-center justify-center">

  {/* Purple Glow Behind Image */}
  <div className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-[90px] sm:h-80 sm:w-80"></div>

  {/* Gradient Border */}
  <div className="relative rounded-3xl bg-gradient-to-br from-purple-400 via-fuchsia-600 to-blue-500 p-[2px] shadow-2xl shadow-purple-900/30 transition duration-500 hover:scale-[1.02]">

    {/* Profile Image */}
    <img
      src={image}
      alt="Sara - Frontend Developer"
      className="relative h-80 w-72 rounded-3xl object-cover sm:h-[420px] sm:w-[340px]"
    />

  </div>

  {/* Floating Badge */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-[#151020]/90 px-5 py-3 shadow-xl backdrop-blur-md sm:bottom-8">
    <p className="text-sm font-semibold text-white">
      ✨ Frontend Developer
    </p>
    <p className="mt-1 text-xs text-purple-300">
      Building modern web experiences
    </p>
  </div>

</div>

        </div>

      </div>
    </div>
  );
}
