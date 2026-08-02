import React from 'react';
import { ShieldCheck, Database, Radio } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

export default function Header() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 mb-6 shadow-xl flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <ShieldCheck className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">
            LabMate Secure Rover
          </h1>
          <p className="text-xs text-slate-400">
            ระบบขนส่งครุภัณฑ์ & Secure Chain of Custody (React + Supabase Backend)
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-warn"></span>
          Software-in-the-Loop Simulation
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5" />
          ID: labmate-01
        </div>

        <div className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${
          isSupabaseConfigured 
            ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
            : 'bg-slate-800 border border-slate-700 text-slate-400'
        }`}>
          <Database className="w-3.5 h-3.5" />
          {isSupabaseConfigured ? 'Supabase Connected' : 'Local DB Fallback'}
        </div>
      </div>
    </header>
  );
}
