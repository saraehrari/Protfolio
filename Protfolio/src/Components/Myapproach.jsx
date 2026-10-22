export default function Myapproach(){
    const Approach=[
    {    name:'Understand', 
        descreption:"I start by understanding the goals, requirements, and needs of each project.",
   
    },
    {    name:'Plan & Design', 
        descreption:"I organize ideas and focus on creating clean, intuitive, and user-friendly interfaces.",
      
    },
    {    name:'Build', 
        descreption:"I turn ideas into responsive web experiences using modern frontend technologies.",
        
    },
    {    name:'Test & Improve', 
        descreption:"I check functionality, identify issues, and refine the experience to improve quality.",
        
    }
    ]

return (
  <section className="min-h-screen flex flex-col items-center justify-center bg-[#0B0912] px-6 py-12 text-white">

    <div className="w-full max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-purple-400">Approach</span>
        </h1>

        <p className="text-gray-400 mt-4">
          How I think and bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">

        {Approach.map((e, index) => (
          <div
            key={e.name}
            className="w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#201633] to-[#110E1B] p-7 text-center shadow-lg shadow-purple-900/10 transition duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-purple-500/20"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/15 text-xl font-bold text-purple-400">
              0{index + 1}
            </div>

            <h2 className="mb-4 text-xl font-semibold">
              {e.name}
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              {e.descreption}
            </p>
          </div>
        ))}

      </div>
    </div>
  </section>
);}