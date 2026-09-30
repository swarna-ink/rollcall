import React from 'react';
import { Database, Zap, BarChart3, Clock, ShieldCheck, Layers3 } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Database, color: 'text-amber-500', title: 'MongoDB Data Modeling', desc: 'Optimized schemas with indexing for lightning-fast student attendance queries and aggregate pipelines.' },
    { icon: Zap, color: 'text-blue-500', title: 'RESTful API Integration', desc: 'Flexible API endpoints to filter by date range, department, status, and specific student IDs.' },
    { icon: BarChart3, color: 'text-emerald-500', title: 'Real-time Analytics', desc: 'Automated calculation of attendance percentages and monthly presence records.' },
    { icon: Clock, color: 'text-red-500', title: 'Automated Time Tracking', desc: 'Instant status updates for Present, Late, and Absent entries with timestamps.' },
    { icon: ShieldCheck, color: 'text-purple-500', title: 'Enterprise Grade Security', desc: 'Data sanitization and secure query handling to protect sensitive student records.' },
    { icon: Layers3, color: 'text-amber-600', title: 'Multi-Department Support', desc: 'Seamlessly organize CSE, EEE, BBA, and other departments under one unified system.' },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Centered Heading */}
      <div className="text-center mb-16">
        <div className="inline-block bg-[#1a1a4b]/60 text-amber-300 border border-amber-500/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          Registered for Performance & Scale
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5 drop-shadow-md">
          Built for Modern <span className="text-amber-400">Institutional Needs</span>
        </h2>
        <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Everything you need to manage institutional attendance with zero friction.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl transition-all hover:border-amber-400 hover:shadow-2xl hover:-translate-y-1">
              <div className={`p-4 inline-block bg-slate-100 rounded-xl mb-6 border border-slate-200`}>
                <Icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}