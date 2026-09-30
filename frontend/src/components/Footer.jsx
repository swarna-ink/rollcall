import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <GraduationCap className="text-amber-400" /> RollCall.
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Smart, high-performance Student Attendance System built with Node.js, Express, React, and MongoDB.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Product</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#hero" className="hover:text-amber-400 transition">Overview</a></li>
            <li><a href="#features" className="hover:text-amber-400 transition">Features</a></li>
            <li><a href="#demo" className="hover:text-amber-400 transition">Live Demo</a></li>
            <li><a href="#pricing" className="hover:text-amber-400 transition">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Stack & Docs</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-amber-400 transition">MongoDB Schema</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">REST API Reference</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Tailwind CSS Preset</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Contact</h4>
          <p className="text-xs text-slate-400">Support: support@rollcall.io</p>
          <p className="text-xs text-slate-400 mt-1">Version: 2.4.0 (Production Ready)</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>© 2026 RollCall Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}