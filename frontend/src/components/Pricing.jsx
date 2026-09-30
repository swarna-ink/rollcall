import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever free",
      desc: "Ideal for small coaching centers and individual classrooms.",
      features: ["Up to 50 Students", "Basic Attendance Marking", "Filter by Date & ID", "CSV Export"],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro Institution",
      price: "$29",
      period: "per month",
      badge: "MOST POPULAR",
      desc: "Designed for schools, colleges, and medium academic departments.",
      features: ["Unlimited Students", "Advanced MongoDB Analytics", "Multi-department Filter", "REST API Access", "24/7 Priority Support"],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      desc: "For large universities requiring custom database integrations.",
      features: ["Custom Database Hosting", "Dedicated Node.js Instance", "Role-based Access Control", "Custom API Integrations", "SLA Guarantee"],
      buttonText: "Get Started",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Headings - Fixed Visibility */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Flexible Pricing for <span className="text-amber-400">Every Scale</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto font-medium">
          Transparent plans built for academic institutions of all sizes.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, idx) => (
          <div 
            key={idx}
            className={`relative rounded-3xl p-8 transition-all duration-300 ${
              plan.highlighted 
                ? 'bg-[#0e0e38] border-2 border-amber-400 shadow-2xl shadow-amber-500/10 scale-105' 
                : 'bg-white text-slate-900 border border-slate-200 shadow-xl'
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                {plan.badge}
              </span>
            )}
            
            <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
            <p className={`text-xs mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>{plan.desc}</p>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-amber-400' : 'text-slate-950'}`}>{plan.price}</span>
              <span className={`text-xs ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8 text-sm font-medium">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3">
                  <Check className={`w-4 h-4 ${plan.highlighted ? 'text-amber-400' : 'text-emerald-600'}`} />
                  <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3.5 rounded-xl font-bold transition-all ${
              plan.highlighted 
                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}