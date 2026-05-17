import Image from "next/image";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Absolute Gradient Ambient Backgrounds */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[600px] left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="border-b border-slate-900/80 backdrop-blur-md bg-slate-950/70 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Sibko Limited Logo" className="h-7 w-auto" />
            <span className="font-mono tracking-wider text-xs text-slate-400 font-bold hidden sm:inline"></span>
          </div>
          <nav className="flex gap-6 md:gap-8 text-xs font-semibold tracking-widest text-slate-400 items-center">
            <a href="/" className="hover:text-amber-500 transition-colors">HOME</a>
            <a href="/#divisions" className="hover:text-amber-500 transition-colors">DIVISIONS</a>
            <a href="/#capabilities" className="hover:text-amber-500 transition-colors">CAPABILITIES</a>
            <a href="/about" className="hover:text-amber-500 transition-colors">ABOUT US</a>
            <a href="/commission" className="hover:text-amber-500 transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg -mt-2 hover:border-amber-500/30 text-slate-300">CONTACT CORPORATE</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative">
        {/* Page Backlink & Intro */}
        <div className="mb-16">
          <a href="/" className="text-xs font-mono text-amber-500 hover:underline tracking-widest uppercase block mb-6">
            ← Back to Corporate Home
          </a>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">TECHNICAL DEPLOYMENTS</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 mt-2">
            Engineering Case Studies
          </h1>
          <p className="text-slate-400 font-light text-base md:text-lg max-w-3xl mt-4 leading-relaxed">
            Deep-dive technical reviews detailing how SIBKO Limited transforms complex industrial constraints into premium consumer hardware, custom tooling pipelines, and market-ready innovations.
          </p>
        </div>

        {/* Case Studies Grid Layout */}
        <div className="space-y-16">
          
          {/* Case Study 1 */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-800/60 transition-all duration-300">
            <div className="lg:col-span-5 aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-xl border border-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80" 
                alt="Scale Powertrain Assembly" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-500 uppercase font-bold block mb-2">
                  Sector: Premium Recreation
                </span>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight mb-4">
                  Project Aero-Youth: High-Tolerance Scaled Drivetrains
                </h2>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Developing a zero-compromise mechanical powertrain override configuration for youth luxury vehicles. This deployment successfully modified commercial gearbox designs into low-voltage electronic safety drive arrays.
                </p>
                
                {/* Micro Metrics Breakdown */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-4 mb-4">
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">TOLERANCE</span>
                    <span className="text-sm font-bold text-slate-300">±0.02mm</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">LOAD CAP</span>
                    <span className="text-sm font-bold text-slate-300">120kg Max</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">EFFICIENCY</span>
                    <span className="text-sm font-bold text-amber-500">+14% Gain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-800/60 transition-all duration-300">
            <div className="lg:col-span-5 aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-xl border border-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80" 
                alt="Thermal hardware lab test" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-500 uppercase font-bold block mb-2">
                  Sector: Advanced Hydration Systems
                </span>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight mb-4">
                  Therma-Shield: Multi-Barrier Vacuum Metallurgy
                </h2>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Applying industrial vacuum extraction parameters to premium lifestyle thermal hardware. By reducing thermal transfer pathways inside ultra-thin grade metal hulls, liquid cooling cycles were extended significantly.
                </p>
                
                {/* Micro Metrics Breakdown */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-4 mb-4">
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">MATERIAL</span>
                    <span className="text-sm font-bold text-slate-300">Grade 316 SS</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">RETENTION</span>
                    <span className="text-sm font-bold text-slate-300">36 Hours Cold</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">VACUUM DEPTH</span>
                    <span className="text-sm font-bold text-amber-500">10⁻⁶ Torr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-800/60 transition-all duration-300">
            <div className="lg:col-span-5 aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-xl border border-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Medical engineering layout" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-500 uppercase font-bold block mb-2">
                  Sector: Aged Care & Assisted Living
                </span>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight mb-4">
                  Ergo-Lift: High-Load Structural Articulation Overrides
                </h2>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Modifying custom hydraulic and pneumatic gear systems into low-profile mechanical assist platforms for premium senior living developments. Engineered to maximize functional support with minimal spatial interference.
                </p>
                
                {/* Micro Metrics Breakdown */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-4 mb-4">
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">RIGIDITY RATIO</span>
                    <span className="text-sm font-bold text-slate-300">Zero Flex (Cast)</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">LOAD RATING</span>
                    <span className="text-sm font-bold text-slate-300">240kg Dynamic</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">INTEGRATION</span>
                    <span className="text-sm font-bold text-amber-500">Flush Mount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Corporate Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/40 py-12 px-6 text-center text-xs text-slate-500 font-light relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>SIBKO LIMITED — Corporate Headquarters &amp; Industrial Systems Lab. Contact: info@sibko.com</p>
          <p>© 2026 Sibko Limited. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
