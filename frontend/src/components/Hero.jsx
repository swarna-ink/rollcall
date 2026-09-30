import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-14 px-6 max-w-5xl mx-auto text-center relative z-10">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-[#575799]/30 border border-indigo-400/30 px-4 py-1.5 rounded-full text-indigo-100 text-xs font-semibold mb-6 shadow-lg backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Next-Gen Node.js & MongoDB Attendance Engine
      </div>
      
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-md">
        Smart Attendance <br />
        <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
          Management for Modern Institutions
        </span>
      </h1>

      {/* Paragraph Text */}
      <p className="text-slate-200 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed font-medium drop-shadow-sm">
        Streamline daily roll calls, track student absence patterns in real-time, generate automated MongoDB aggregate reports, and publish instant REST API endpoints effortlessly.
      </p>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
        {[
          { label: 'Accuracy Rate', val: '99.8%' },
          { label: 'MongoDB Speed', val: '< 120ms' },
          { label: 'Daily Roll Calls', val: '50,000+' },
          { label: 'Secure API', val: 'REST & JWT' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#090933]/80 border border-indigo-400/20 p-5 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="text-xl md:text-2xl font-extrabold text-amber-400">{stat.val}</div>
            <div className="text-xs text-slate-300 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}