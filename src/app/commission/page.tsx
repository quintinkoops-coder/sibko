import React from 'react';

export default async function CommissionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      {/* Header / Navigation */}
      <header className="border-b border-neutral-200 bg-neutral-50/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="/" className="transition-opacity hover:opacity-90">
            <img 
              src="/logo.svg" 
              alt="Sibko Limited Logo" 
              className="h-14 w-auto object-contain" 
            />
          </a>
          <nav className="flex space-x-8 text-xs tracking-widest uppercase font-semibold text-neutral-600">
            <a href="/" className="hover:text-amber-600 transition-colors">
              ← Return Home
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-2xl bg-neutral-100 border border-neutral-300 rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Bespoke Divisions</span>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#00411e] mt-1">Commission Inquiry</h1>
            <p className="text-sm text-neutral-600 mt-2">
              Submit your project constraints or fleet requirements. Our industrial design team reviews luxury commissions by appointment.
            </p>
          </div>

          {/* This points directly to your working API route */}
          <form action="/api/submit-inquiry" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Full Name / Entity</label>
                <input type="text" name="name" required className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Secure Email</label>
                <input type="email" name="email" required className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Target Division</label>
              <select name="division" required className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
                <option value="recreation">Premium Recreation (Bespoke Motorized Vehicles)</option>
                <option value="aged-care">Aged Care & Assisted Living Infrastructure</option>
                <option value="hydration">Advanced Thermal Hardware (Production Runs)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Project Specifications</label>
              <textarea name="specifications" rows={5} required placeholder="Outline physical dimensions, materials preferences, or engineering needs..." className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-600 resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Allocation Tier</label>
              <select name="budget" className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
                <option value="tier-1">Initial Prototype Consultation</option>
                <option value="tier-2">Low-Volume Production Run</option>
                <option value="tier-3">Full Enterprise Deployment</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide uppercase text-xs py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Transmit Project Brief
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
