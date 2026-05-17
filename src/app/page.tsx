import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Absolute Gradient Ambient Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="border-b border-slate-900/80 backdrop-blur-md bg-slate-950/70 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Sibko Limited Logo" className="h-7 w-auto" />
            <span className="font-mono tracking-wider text-xs text-slate-400 font-bold hidden sm:inline">CORPORATION</span>
          </div>
          <nav className="flex gap-8 text-xs font-semibold tracking-widest text-slate-400">
            <a href="#divisions" className="hover:text-amber-500 transition-colors">DIVISIONS</a>
            <a href="#capabilities" className="hover:text-amber-500 transition-colors">CAPABILITIES</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg -mt-2 hover:border-amber-500/30 text-slate-300">CONTACT CORPORATE</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-500 text-xs font-mono tracking-wider mb-8">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            PRECISION ENGINEERING & INDUSTRIAL DESIGN
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 max-w-4xl mx-auto leading-tight">
            Designing the Future of Premium Consumer Products
          </h1>
          <p className="text-slate-400 font-light text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Sibko Limited is an elite product development and manufacturing umbrella company. We engineer ultra-premium consumer assets, combining advanced ergonomics with world-class production integrity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#divisions" className="w-full sm:w-auto text-xs font-bold tracking-widest text-slate-950 bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-lg transition-all shadow-lg shadow-amber-500/10">
              EXPLORE PORTFOLIO
            </a>
            <a href="#contact" className="w-full sm:w-auto text-xs font-bold tracking-widest text-slate-300 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-lg transition-all">
              SUBMIT COMMISSION INQUIRY
            </a>
          </div>
        </section>

        {/* Operating Divisions */}
        <section id="divisions" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">OPERATING SECTORS</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-1">Our Three Primary Divisions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Division 1 - Premium Recreation */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-6 hover:border-slate-800/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-900 mb-6">
                <img 
                  src="/recreational-vehicle.jpeg" 
                  alt="Sibko Premium Recreation Vehicle Concept" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-amber-500 transition-colors">Premium Recreation</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">Architects of luxury, high-end motorized kids' vehicles. Engineered with authentic scale dynamics, bespoke chassis design, and advanced safety constraints for unparalleled youth recreation.</p>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block border-t border-slate-900 pt-4">CUSTOM MANUFACTURE & DESIGN</span>
            </div>

            {/* Division 2 - Advanced Hydration Systems */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-6 hover:border-slate-800/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-900 mb-6">
                <img 
                  src="/hydration-bottle.jpg" 
                  alt="Sibko Premium Hydration Thermal Hardware" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-amber-500 transition-colors">Advanced Hydration Systems</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">Sculpting elite, high-performance thermal hardware. Incorporating ultra-pure grade metals, proprietary thermal vacuum barriers, and sleek lifestyle aesthetics for discerning consumer markets.</p>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block border-t border-slate-900 pt-4">MATERIAL INNOVATION</span>
            </div>

            {/* Division 3 - Aged Care & Assisted Living */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-6 hover:border-slate-800/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-900 mb-6">
                <img 
                  src="/aged-care-blueprint.jpg" 
                  alt="Sibko Abstract Geometric Tool Mechanism Schematic" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-amber-500 transition-colors">Aged Care & Assisted Living</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">Developing empathetic, heavy-duty utility apparatus tailored explicitly for upscale retirement developments. Merging top-tier industrial utility with graceful interior integration.</p>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block border-t border-slate-900 pt-4">ERGONOMIC ENGINEERING</span>
            </div>
          </div>
        </section>

        {/* Corporate Capabilities Brief */}
        <section id="capabilities" className="bg-slate-900/20 border-t border-slate-900 py-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">End-To-End Infrastructure</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-2 mb-6">From Blueprint to Global Logistics</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-4">Sibko Limited bridges the gap between sophisticated industrial design and physical production reality. We handle full-cycle sourcing, regulatory quality compliance testing, and scalable supply pipelines.</p>
              <p className="text-slate-400 font-light leading-relaxed">Our diverse portfolio showcases our agile engineering mastery—navigating electronics, advanced metallurgy, and medical-grade bio-ergonomics flawlessly.</p>
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

        {/* Industrial Heritage Portfolio Section */}
        <section className="bg-slate-950 text-slate-100 py-24 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-2 border-amber-500 pl-4 mb-16">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">Industrial Heritage</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-1">Proven Execution Realities</h2>
              <p className="text-slate-400 mt-4 max-w-2xl text-sm font-light leading-relaxed">
                Before launching our specialized consumer lines, our foundational engineering mastery was forged across high-security industrial sectors, advanced machinery overrides, and complex fluid processing pipelines. We bring this zero-compromise discipline to every new product line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-800/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                      alt="Handheld Product Mechanics" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">Tactile Form & Handheld Mechanics</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Applying over a decade of custom handheld device tooling to our upcoming mobility lines. Specializing in weight-distribution optimization, impact resilience engineering, and ergonomic casing architecture built for rugged use.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Hydration & Mobility</span>
              </div>

              {/* Card 2 */}
              <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-800/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" 
                      alt="Precision Powertrain Rebuilds" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">High-Tolerance Powertrain Rebuilds</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Translating years of heavy industrial transmission overhauls and mechanical powertrain optimization into youth recreation assets. Ensuring all motorized gears, bearings, and drive complexes operate with flawless tolerances.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Premium Recreation</span>
              </div>

              {/* Card 3 */}
              <div className="group p-8 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-slate-950 relative rounded-lg border border-slate-800/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" 
                      alt="Industrial Process Installations" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">Structural Rigidity & Process Installations</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Channeling extensive experience with large-scale industrial fluid systems, process piping layouts, and structural anchoring into medical equipment manufacturing. Built to heavy commercial weight specifications with zero flex.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Aged Care Apparatus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Infrastructure */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block">ENGAGEMENT BRIEF</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 mt-1">Submit Commission Inquiry</h2>
            <p className="text-slate-400 font-light text-sm mt-3 max-w-lg mx-auto">
              Initiate a structural design or high-volume production request. Our corporate response desk will evaluate your requirements.
            </p>
          </div>

          <form action="/api/submit-inquiry" method="POST" className="bg-slate-900/40 border border-slate-900 rounded-2xl p-8 md:p-10 text-left space-y-6 backdrop-blur-sm max-w-xl mx-auto">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Corporate Entity / Contact Name</label>
              <input required type="text" name="name" placeholder="e.g. Alpha Recreation Ltd" className="w-full bg-slate-950 border border-slate-800/80 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition-colors" />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Secure Email Address</label>
              <input required type="email" name="email" placeholder="communications@entity.com" className="w-full bg-slate-950 border border-slate-800/80 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition-colors" />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Target Division Assignment</label>
              <select name="division" className="w-full bg-slate-950 border border-slate-800/80 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/40 transition-colors">
                <option value="recreation">Premium Recreation (Motorized Assets)</option>
                <option value="hydration">Advanced Hydration Systems (Thermal Hardware)</option>
                <option value="agedcare">Aged Care & Assisted Living (Utility Apparatus)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Project Specifications Summary</label>
              <textarea required name="specifications" rows={4} placeholder="Detail required raw materials compliance, initial order quantities, or engineering blueprints description..." className="w-full bg-slate-950 border border-slate-800/80 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition-colors resize-none" />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Estimated Capital Budget Allocation</label>
              <select name="budget" className="w-full bg-slate-950 border border-slate-800/80 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500/40 transition-colors">
                <option value="tier-1">Tier-1 Scaling Strategy (&lt; $50k)</option>
                <option value="tier-2">Tier-2 Operational Deployment ($50k - $250k)</option>
                <option value="tier-3">Tier-3 Enterprise Enterprise Infrastructure ($250k+)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs tracking-widest uppercase py-4 rounded-lg transition-colors mt-4">
              TRANSMIT SPECIFICATIONS
            </button>
          </form>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/40 py-12 px-6 text-center text-xs text-slate-500 font-light">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>SIBKO LIMITED — Corporate Headquarters &amp; Industrial Systems Lab. Contact: info@sibko.com</p>
          <p>© 2026 Sibko Limited. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
