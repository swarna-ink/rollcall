import React from 'react';
import { Database, ShieldCheck, Zap, BarChart3, Users, Clock } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <Database className="w-6 h-6 text-amber-500" />,
      title: "MongoDB Data Modeling",
      desc: "Optimized schemas with indexing for lightning-fast student attendance queries and aggregate pipelines."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "RESTful API Integration",
      desc: "Flexible API endpoints to filter by date range, department, status, and specific student IDs."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Real-time Analytics",
      desc: "Automated calculation of attendance percentages and monthly presence records."
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "Automated Time Tracking",
      desc: "Instant status updates for Present, Late, and Absent entries with timestamps."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "Enterprise Grade Security",
      desc: "Data sanitization and secure query handling to protect sensitive student records."
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Multi-Department Support",
      desc: "Seamlessly organize CSE, EEE, BBA, and other departments under one unified system."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Performance & Scale
        </h2>
        <p className="text-slate-600 font-semibold mt-3 max-w-xl mx-auto">
          Everything you need to manage institutional attendance with zero friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresList.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white/90 border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200 backdrop-blur-md"
          >
            <div className="bg-slate-100 p-3 rounded-xl w-fit mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}