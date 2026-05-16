'use client';

import React, { useState } from 'react';

export default function CommissionForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace 'YOUR_FORMSPREE_ID' with your actual endpoint ID later
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 shadow-2xl">
        
        <div className="mb-8 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Bespoke Divisions</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mt-1">Commission Inquiry</h1>
          <p className="text-sm text-slate-400 mt-2">
            Submit your structural constraints, design concepts, or fleet requirements. Our industrial design team reviews luxury commissions by appointment.
          </p>
        </div>

        {status === 'SUCCESS' ? (
          <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-6 rounded-lg text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-white">Inquiry Transmitted Successfully</h3>
            <p className="text-sm mt-1 text-slate-300">An elite engineering consultant will contact your office to review the blueprints.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Contact Details Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Name / Corporate Entity</label>
                <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Secure Email Address</label>
                <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>

            {/* Division Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Division</label>
              <select name="division" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
                <option value="recreation">Premium Recreation (Bespoke Motorized Vehicles)</option>
                <option value="aged-care">Aged Care & Assisted Living Infrastructure</option>
                <option value="hydration">Advanced Thermal Hardware (Bulk Production Runs)</option>
              </select>
            </div>

            {/* Project Scope / Brief */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Project Constraints & Specifications</label>
              <textarea name="specifications" rows={5} required placeholder="Please outline physical dimensions, materials preferences, production timeline constraints, or specialized custom engineering needs..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600 resize-none"></textarea>
            </div>

            {/* Budget Indicator */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Estimated Allocation Tier</label>
              <select name="budget" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
                <option value="tier-1">Initial Prototype Consultation</option>
                <option value="tier-2">Low-Volume Production Run</option>
                <option value="tier-3">Full Enterprise Contract Deployment</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide uppercase text-xs py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Transmit Project Brief
            </button>

            {status === 'ERROR' && (
              <p className="text-xs text-red-400 text-center mt-2">Transmission error. Please verify data integrity or contact info@sibko.com directly.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
