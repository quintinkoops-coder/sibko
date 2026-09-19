"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Play,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Lighting */}
      <div className="absolute *nset-0 overflow-hidden">
        <*iv className="absolute left-1/2 to*-0 h-[900px] w-[900px] -translate-*-1/2 rounded-full bg-cyan-500/10 b*ur-[180px]" />

        <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="relative*z-20 mx-auto flex max-w-7xl items-*enter justify-between px-8 py-8">
*       <div className="font-semibo*d tracking-wide">
          SolidW*rks Drawing Automator
        </di*>

        <button className="roun*ed-full border border-white/10 bg-*hite/5 px-5 py-2 backdrop-blur-xl"*
          NZD $149
        </button>
      </nav>

      {/* Hero */}
      <section className="relat*ve z-20 mx-auto max-w-7xl px-8 pt-*4 pb-32 text-center">

        <mo*ion.div
          initial={{ opaci*y: 0, y: 40 }}
          animate={* opacity: 1, y: 0 }}
          tra*sition={{ duration: 0.8 }}
       *>
          <div className="inline*flex items-center rounded-full bor*er border-cyan-500/20 bg-cyan-500/*0 px-4 py-2 text-sm text-cyan-300 *ackdrop-blur-xl">
            Engi*eering Productivity Software
     *    </div>

          <h1 classNam*="mx-auto mt-10 max-w-6xl text-6xl*font-semibold tracking-tight md:te*t-8xl xl:text-9xl">
            Ge*erate
            <br />
         *  Manufacturing‑Ready
            *span className="block bg-gradient-*o-r from-white via-cyan-200 to-cya*-500 bg-clip-text text-transparent*>
              First‑Pass Drawing*
            </span>
          </h*>

          <p className="mx-auto*mt-10 max-w-3xl text-xl leading-re*axed text-slate-300">
            *elect any face. Run the macro.
   *        Automatically generate dra*ing views,
            import filt*red dimensions,
            arrang* annotations and place BOMs from
 *          parts and assemblies in *nder 60 seconds.
          </p>

 *        <div className="mt-12 flex*flex-wrap justify-center gap-5">

*           <button className="grou* flex items-center gap-3 rounded-2*l bg-white px-8 py-4 text-black tr*nsition-all hover:scale-105">
    *         <Download size={20} />
  *           Download Now – NZD $149
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all hover:bg-white/10">
              <Play size={18} />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Floating Product Preview */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 1.2,
          }}
          className="mt-24"
        >
          <div
            className="
            relative
            mx-auto
            max-w-6xl
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            shadow-[0_30px_100px_rgba(0,0,0,0.65)]
            overflow-hidden
          "
          >
            {/* Window Bar */}

            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-4 text-sm text-slate-400">
                SolidWorks Drawing Automator
              </div>

            </div>

            <div className="grid gap-12 p-10 lg:grid-cols-2">

              {/* Left */}
              <div>

                <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Drawing Generation
                </div>

                <h3 className="mt-4 text-4xl font-semibold">
                  From face selection
                  to completed drawing.
                </h3>

                <div className="mt-10 space-y-4">

                  {[
                    "Face Selected",
                    "Drawing Created",
                    "Views Generated",
                    "Filtered Dimensions Imported",
                    "Dimensions Arranged",
                    "BOM Inserted",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      p-4
                    "
                    >
                      <CheckCircle2
                        size={20}
                        className="text-emerald-400"
                      />
                      {item}
                    </div>
                  ))}

                </div>
              </div>

              {/* Right Mock Drawing */}

              <div
                className="
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-slate-900
                to-slate-800
                p-6
              "
              >
                <div className="flex h-full min-h-[420px] flex-col rounded-2xl border border-white/10 bg-slate-950 p-6">

                  <div className="mb-4 text-sm text-slate-500">
                    Generated Drawing
                  </div>

                  <div className="relative flex-1 rounded-xl border border-slate-800">

                    <div className="absolute left-10 top-10 h-24 w-24 border border-cyan-400" />

                    <div className="absolute left-52 top-10 h-24 w-24 border border-cyan-400" />

                    <div className="absolute left-10 top-52 h-24 w-24 border border-cyan-400 rotate-45" />

                    <div className="absolute right-8 bottom-8 h-28 w-44 border border-slate-700" />

                    <div className="absolute left-12 top-40 h-px w-40 bg-cyan-400" />

                    <div className="absolute left-44 top-22 h-24 w-px bg-cyan-400" />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          {[
            ["90%", "Reduction in Drawing Time"],
            ["<60s", "Drawing Creation"],
            ["$149", "One‑Time Purchase"],
            ["∞", "Lifetime Use"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-white/[0.07]
                hover:-translate-y-1
              "
            >
              <div className="text-5xl font-semibold">
                {number}
              </div>

              <div className="mt-3 text-slate-400">
                {label}
              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
