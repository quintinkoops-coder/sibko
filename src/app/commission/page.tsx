import React from 'react';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export default async function CommissionPage() {
  
  // This executes securely on Cloudflare's edge network when the user clicks submit
  async function submitInquiry(formData: FormData) {
    'use server';
    
    const name = formData.get('name');
    const email = formData.get('email');
    const division = formData.get('division');
    const specifications = formData.get('specifications');
    const budget = formData.get('budget');

    try {
      // Connects to your live "DB" binding asset
      const { env } = getRequestContext();
      const db = env.DB;

      // Safely insert rows into your Cloudflare D1 table
      await db.prepare(
        `INSERT INTO inquiries (name, email, division, specifications, budget) 
         VALUES (?, ?, ?, ?, ?)`
      )
      .bind(name, email, division, specifications, budget)
      .run();

      return { success: true };
    } catch (error) {
      console.error('D1 Database Insertion Error:', error);
      return { success: false };
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 shadow-2xl">
        
        <div className="mb-8 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Bespoke Divisions</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mt-1">Commission Inquiry</h1>
          <p className="text-sm text-slate-400 mt-2">
            Submit your project constraints or fleet requirements. Our industrial design team reviews luxury commissions by appointment.
          </p>
        </div>

        <form action={submitInquiry} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Name / Entity</label>
              <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Secure Email</label>
              <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Division</label>
            <select name="division" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
              <option value="recreation">Premium Recreation (Bespoke Motorized Vehicles)</option>
              <option value="aged-care">Aged Care & Assisted Living Infrastructure</option>
              <option value="hydration">Advanced Thermal Hardware (Production Runs)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Project Specifications</label>
            <textarea name="specifications" rows={5} required placeholder="Outline physical dimensions, materials preferences, or engineering needs..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600 resize-none"></textarea>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Allocation Tier</label>
            <select name="budget" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
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
  );
}
