import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "Forever Free",
      desc: "Ideal for small coaching centers and individual classrooms.",
      features: ["Up to 50 Students", "Basic Attendance Marking", "Filter by Date & ID", "CSV Export"],
      buttonClass: "bg-slate-900 text-white hover:bg-slate-800",
      featured: false
    },
    {
      name: "Pro Institution",
      price: "$29",
      period: "per month",
      desc: "Designed for schools, colleges, and medium academic departments.",
      features: ["Unlimited Students", "Advanced MongoDB Analytics", "Multi-department Filter", "REST API Access", "24/7 Priority Support"],
      buttonClass: "bg-amber-400 text-slate-950 font-bold hover:bg-amber-300",
      featured: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      desc: "For large universities requiring custom database integrations.",
      features: ["Custom Database Hosting", "Dedicated Node.js Instance", "Role-based Access Control", "Custom API Integrations", "SLA Guarantee"],
      buttonClass: "bg-slate-900 text-white hover:bg-slate-800",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Flexible Pricing for Every Scale
        </h2>
        <p className="text-slate-600 font-semibold mt-2">
          Transparent plans built for institutions of all sizes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`rounded-3xl p-8 backdrop-blur-md transition duration-200 relative ${
              plan.featured 
                ? 'bg-slate-900 text-white border-2 border-amber-400 shadow-2xl scale-105' 
                : 'bg-white/90 text-slate-900 border border-slate-200 shadow-sm'
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
            <p className={`text-xs mb-6 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className={`text-xs ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
            </div>

            <ul className="space-y-3 text-sm font-medium mb-8">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${plan.featured ? 'text-amber-400' : 'text-indigo-600'}`} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-xl font-bold transition shadow-md ${plan.buttonClass}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}