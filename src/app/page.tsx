export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Header / Navigation */}
      {/* Header / Navigation */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <img 
            src="/logo.svg" 
            alt="Sibko Limited Logo" 
            className="h-14 w-auto object-contain" 
          />
          <nav className="hidden sm:flex space-x-8 text-xs tracking-widest uppercase font-semibold text-slate-400">
            <a href="#divisions" className="hover:text-amber-500 transition-colors">Divisions</a>
            <a href="#capabilities" className="hover:text-amber-500 transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors font-bold text-amber-500/90">Contact Corporate</a>
          </nav>
        </div>
      </header>

      {/* Hero / Corporate Mandate */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="px-4 py-1 text-[11px] uppercase tracking-[0.2em] font-bold bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
            Precision Engineering & Industrial Design
          </span>
          <h1 className="text-4xl font-light tracking-tight mt-8 sm:text-6xl text-slate-100">
            Designing the Future of <br />
            <span className="font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Premium Consumer Products
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Sibko Limited is an elite product development and manufacturing umbrella company. We engineer ultra-premium consumer assets, combining advanced ergonomics with world-class production integrity.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#divisions" className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-widest uppercase font-bold rounded transition-all duration-200 shadow-lg shadow-amber-600/10">
              Explore Enterprise Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Core Divisions Grid */}
      <section id="divisions" className="py-24 max-w-6xl mx-auto px-6">
        <div className="border-l-2 border-amber-500 pl-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">Operating Sectors</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-1">Our Three Primary Divisions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Division 1: High-End Toys */}
          <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                🏎️
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Premium Recreation</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Architects of luxury, high-end motorized kids' vehicles. Engineered with authentic scale dynamics, bespoke chassis design, and advanced safety constraints for unparalleled youth recreation.
              </p>
            </div>
            <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Custom Manufacture & Design</span>
          </div>

          {/* Division 2: High-End Water Bottles */}
          <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                💧
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Advanced Hydration Systems</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Sculpting elite, high-performance thermal hardware. Incorporating ultra-pure grade metals, proprietary thermal vacuum barriers, and sleek lifestyle aesthetics for discerning consumer markets.
              </p>
            </div>
            <span className="text-[10px] tracking-wider text-blue-500/70 uppercase font-semibold mt-8 block">Material Innovation</span>
          </div>

          {/* Division 3: Aged Care Products */}
          <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-105 transition-transform">
                🏥
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Aged Care & Assisted Living</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Developing empathetic, heavy-duty utility apparatus tailored explicitly for upscale retirement developments. Merging top-tier industrial utility with graceful interior integration.
              </p>
            </div>
            <span className="text-[10px] tracking-wider text-emerald-500/70 uppercase font-semibold mt-8 block">Ergonomic Engineering</span>
          </div>

        </div>
      </section>

      {/* Corporate Capabilities Brief */}
      <section id="capabilities" className="bg-slate-900/20 border-t border-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">End-To-End Infrastructure</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-2 mb-6">From Blueprint to Global Logistics</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-4">
              Sibko Limited bridges the gap between sophisticated industrial design and physical production reality. We handle full-cycle sourcing, regulatory quality compliance testing, and scalable supply pipelines.
            </p>
            <p className="text-slate-400 font-light leading-relaxed">
              Our diverse portfolio showcases our agile engineering mastery—navigating electronics, advanced metallurgy, and medical-grade bio-ergonomics flawlessly.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
            <div className="flex gap-4">
              <span className="text-amber-500 font-mono text-lg font-bold">01/</span>
              <div>
                <h4 className="font-semibold text-slate-200">CAD & Computational Fluid Modeling</h4>
                <p className="text-xs text-slate-400 mt-1">Full structural stress analytics and fluid thermal modeling prior to molding tools creation.</p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-slate-800/60 pt-6">
              <span className="text-amber-500 font-mono text-lg font-bold">02/</span>
              <div>
                <h4 className="font-semibold text-slate-200">High-Precision Molding & Componentry</h4>
                <p className="text-xs text-slate-400 mt-1">Injection tooling, stamping matrix execution, and fine electronics assembly lines integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact Target Anchor */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950 py-12 text-center text-xs text-slate-500">
        <p className="tracking-wide">SIBKO LIMITED — Corporate Headquarters Contact: info@sibko.com</p>
        <p className="mt-2 text-slate-600">&copy; {new Date().getFullYear()} Sibko Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
