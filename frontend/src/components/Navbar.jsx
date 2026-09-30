import React from 'react';
import { GraduationCap, Sparkles, Plus } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="bg-slate-900/80 border-b border-indigo-500/20 backdrop-blur-xl sticky top-0 z-50 px-8 py-4 flex justify-between items-center shadow-lg shadow-indigo-950/20">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-amber-500 to-amber-300 p-2.5 rounded-xl text-slate-950 shadow-md shadow-amber-500/20">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
            RollCall<span className="text-amber-400">.</span>
          </span>
          <span className="text-[10px] tracking-widest text-indigo-300 uppercase font-semibold block -mt-1">
            Academic Engine
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300 mr-4">
          <a href="#hero" className="hover:text-amber-400 transition">Home</a>
          <a href="#demo" className="hover:text-amber-400 transition">Live Demo</a>
          <a href="#features" className="hover:text-amber-400 transition">Features</a>
        </div>
        <button
          onClick={onOpenModal}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/10 transition transform active:scale-95"
        >
          <Plus className="w-4 h-4 stroke-[3]" /> Add Student
        </button>
      </div>
    </nav>
  );
}