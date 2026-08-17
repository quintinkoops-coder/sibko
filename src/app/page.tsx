import Image from "next/image";
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const IS_COMING_SOON = host.includes('sibko.co.nz'); // Coming soon on production, full site on preview

if (IS_COMING_SOON) {
  const SHOW_COMPOSTER_BUTTON = false;
  
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        SIBKO
      </h1>

      <p className="text-neutral-600 max-w-md">
        We are building something new.
        <br />
        Our official website is coming soon.
      </p>

      {SHOW_COMPOSTER_BUTTON && (
<a
      href="/composter"
      className="mt-8 inline-flex items-center justify-center rounded-lg bg-amber-500 px-7 py-3.5 text-xs font-bold tracking-widest text-neutral-950 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:-translate-y-0.5"
    >
      VIEW COMPOSTER
    </a>
  </div>
  );
}
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-500/30 selection:text-amber-800">
      
      {/* Absolute Gradient Ambient Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

     {/* Navigation Header */}
      <header className="border-b border-neutral-200/80 backdrop-blur-md bg-neutral-50/70 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Sibko Limited Logo" className="h-7 w-auto" />
            <span className="font-mono tracking-wider text-xs text-neutral-600 font-bold hidden sm:inline"></span>
          </div>
          <nav className="flex gap-6 md:gap-8 text-xs font-semibold tracking-widest text-neutral-600 items-center">
            <a href="#divisions" className="hover:text-amber-600 transition-colors">DIVISIONS</a>
            <a href="#capabilities" className="hover:text-amber-600 transition-colors">CAPABILITIES</a>
            <a href="/case-studies" className="hover:text-amber-600 transition-colors">CASE STUDIES</a>
            <a href="/about" className="hover:text-amber-600 transition-colors">ABOUT US</a>
            <a href="/commission" className="hover:text-amber-600 transition-colors bg-neutral-100 border border-neutral-300 px-4 py-2 rounded-lg -mt-2 hover:border-amber-600/30 text-neutral-700">CONTACT CORPORATE</a>
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500 max-w-4xl mx-auto leading-tight">
            Designing the Future of Premium Consumer Products
          </h1>
          <p className="text-neutral-600 font-light text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            SIBKO Limited is an elite product development and manufacturing umbrella company. We engineer ultra-premium consumer assets, combining advanced ergonomics with world-class production integrity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#divisions" className="w-full sm:w-auto text-xs font-bold tracking-widest text-neutral-950 bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-lg transition-all shadow-lg shadow-amber-500/10">
              EXPLORE PORTFOLIO
            </a>
            <a href="/commission" className="w-full sm:w-auto text-xs font-bold tracking-widest text-neutral-700 bg-neutral-100/60 hover:bg-neutral-100 border border-neutral-300 hover:border-neutral-400 px-8 py-4 rounded-lg transition-all">
              SUBMIT COMMISSION INQUIRY
            </a>
          </div>
        </section>

        {/* Operating Divisions */}
        <section id="divisions" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200/60">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">OPERATING SECTORS</span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mt-1">Our Three Primary Divisions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Division 1 - Premium Recreation */}
            <div className="bg-neutral-200/50 border border-neutral-200 rounded-xl p-6 hover:border-neutral-300/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-200 mb-6">
                <img 
                  src="/recreational-vehicle.jpeg" 
                  alt="Sibko Premium Recreation Vehicle Concept" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-amber-600 transition-colors">Premium Recreation</h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">Architects of luxury, high-end motorized kids' vehicles. Engineered with authentic scale dynamics, bespoke chassis design, and advanced safety constraints for unparalleled youth recreation.</p>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block border-t border-neutral-200 pt-4">CUSTOM MANUFACTURE & DESIGN</span>
            </div>

            {/* Division 2 - Advanced Hydration Systems */}
            <div className="bg-neutral-200/50 border border-neutral-200 rounded-xl p-6 hover:border-neutral-300/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-200 mb-6">
                <img 
                  src="/hydration-bottle.jpg" 
                  alt="Sibko Premium Hydration Thermal Hardware" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-amber-600 transition-colors">Advanced Hydration Systems</h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">Sculpting elite, high-performance thermal hardware. Incorporating ultra-pure grade metals, proprietary thermal vacuum barriers, and sleek lifestyle aesthetics for discerning consumer markets.</p>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block border-t border-neutral-200 pt-4">MATERIAL INNOVATION</span>
            </div>

            {/* Division 3 - Aged Care & Assisted Living */}
            <div className="bg-neutral-200/50 border border-neutral-200 rounded-xl p-6 hover:border-neutral-300/80 transition-all group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-200 mb-6">
                <img 
                  src="/aged-care-blueprint.jpg" 
                  alt="Sibko Abstract Geometric Tool Mechanism Schematic" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-amber-600 transition-colors">Aged Care & Assisted Living</h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">Developing empathetic, heavy-duty utility apparatus tailored explicitly for upscale retirement developments. Merging top-tier industrial utility with graceful interior integration.</p>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block border-t border-neutral-200 pt-4">ERGONOMIC ENGINEERING</span>
            </div>
          </div>
        </section>

        {/* Corporate Capabilities Brief */}
        <section id="capabilities" className="bg-neutral-200/40 border-t border-neutral-200 py-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">End-To-End Infrastructure</span>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mt-2 mb-6">From Blueprint to Global Logistics</h2>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">Sibko Limited bridges the gap between sophisticated industrial design and physical production reality. We handle full-cycle sourcing, regulatory quality compliance testing, and scalable supply pipelines.</p>
              <p className="text-neutral-600 font-light leading-relaxed">Our diverse portfolio showcases our agile engineering mastery—navigating electronics, advanced metallurgy, and medical-grade bio-ergonomics flawlessly.</p>
            </div>
            <div className="bg-neutral-100 border border-neutral-300 p-8 rounded-xl space-y-6">
              <div className="flex gap-4">
                <span className="text-amber-500 font-mono text-lg font-bold">01/</span>
                <div>
                  <h4 className="font-semibold text-neutral-800">CAD & Computational Fluid Modeling</h4>
                  <p className="text-xs text-neutral-600 mt-1">Full structural stress analytics and fluid thermal modeling prior to molding tools creation.</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-neutral-300/60 pt-6">
                <span className="text-amber-500 font-mono text-lg font-bold">02/</span>
                <div>
                  <h4 className="font-semibold text-neutral-800">High-Precision Molding & Componentry</h4>
                  <p className="text-xs text-neutral-600 mt-1">Injection tooling, stamping matrix execution, and fine electronics assembly lines integration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Heritage Portfolio Section */}
        <section className="bg-neutral-50 text-neutral-900 py-24 px-6 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-2 border-amber-500 pl-4 mb-16">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">Industrial Heritage</span>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mt-1">Proven Execution Realities</h2>
              <p className="text-neutral-600 mt-4 max-w-2xl text-sm font-light leading-relaxed">
                Before launching our specialized consumer lines, our foundational engineering mastery was forged across high-security industrial sectors, advanced machinery overrides, and complex fluid processing pipelines. We bring this zero-compromise discipline to every new product line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 bg-neutral-200/50 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-300/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                      alt="Handheld Product Mechanics" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Tactile Form & Handheld Mechanics</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Applying over a decade of custom handheld device tooling to our upcoming mobility lines. Specializing in weight-distribution optimization, impact resilience engineering, and ergonomic casing architecture built for rugged use.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Hydration & Mobility</span>
              </div>

              {/* Card 2 */}
              <div className="group p-8 bg-neutral-200/50 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-300/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80" 
                      alt="Precision Powertrain Rebuilds" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">High-Tolerance Powertrain Rebuilds</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Translating years of heavy industrial transmission overhauls and mechanical powertrain optimization into youth recreation assets. Ensuring all motorized gears, bearings, and drive complexes operate with flawless tolerances.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Premium Recreation</span>
              </div>

              {/* Card 3 */}
              <div className="group p-8 bg-neutral-200/50 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-neutral-50 relative rounded-lg border border-neutral-300/80 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" 
                      alt="Industrial Process Installations" 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Structural Rigidity & Process Installations</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Channeling extensive experience with large-scale industrial fluid systems, process piping layouts, and structural anchoring into medical equipment manufacturing. Built to heavy commercial weight specifications with zero flex.
                  </p>
                </div>
                <span className="text-[10px] tracking-wider text-amber-500/70 uppercase font-semibold mt-8 block">Core Expertise ➔ Aged Care Apparatus</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-100/40 py-12 px-6 text-center text-xs text-neutral-500 font-light">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>SIBKO LIMITED — Corporate Headquarters &amp; Industrial Systems Lab. Contact: info@sibko.com</p>
          <p>© 2026 Sibko Limited. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
