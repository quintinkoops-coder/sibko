import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Absolute Gradient Ambient Backgrounds */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" />

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
            <a href="/case-studies" className="hover:text-amber-500 transition-colors">CASE STUDIES</a>
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
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">CORPORATE OVERVIEW</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 mt-2">
            About Sibko Corporation
          </h1>
          <p className="text-slate-400 font-light text-base md:text-lg max-w-3xl mt-4 leading-relaxed">
            We are an elite product development and manufacturing consortium. Sibko bridges the gap between highly sophisticated industrial design and physical production realities for the premium consumer market.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Mission & Heritage */}
          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-8 hover:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-slate-200 mb-3">Our Industrial Heritage</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Forged in high-security industrial sectors and advanced machinery overrides, Sibko's foundation is built on uncompromising durability. We bring a zero-tolerance discipline to consumer products, engineering everyday items with the same rigor applied to heavy-duty fluid processing pipelines and aerospace componentry.
              </p>
            </div>
            
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-8 hover:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-slate-200 mb-3">Material Innovation</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                We do not source off-the-shelf. From ultra-pure grade metals to proprietary thermal vacuum barriers and bespoke synthetic polymers, our materials lab continuously tests the boundaries of what is chemically and physically possible in consumer-facing hardware.
              </p>
            </div>
          </div>

          {/* Image / Visual Anchor */}
          <div className="aspect-square md:aspect-auto w-full h-full overflow-hidden bg-slate-950 relative rounded-xl border border-slate-900 group">
            <img 
              src="/aged-care-blueprint.jpg" 
              alt="Industrial Engineering Blueprint" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-4 rounded-lg">
                <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold block mb-1">HEADQUARTERS & LABS</span>
                <p className="text-sm text-slate-300">Global operations coordinated from our central design facility, integrating specialized CAD teams with on-site rapid prototyping.</p>
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
