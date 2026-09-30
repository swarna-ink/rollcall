import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsCTA() {
  const reviews = [
    {
      quote: "RollCall saved our department hours of manual tracking. The date filter and API speed are incredible!",
      author: "Dr. Ariful Islam",
      role: "Head of CSE, City University"
    },
    {
      quote: "The interface is super intuitive. Marking daily attendance and searching student history takes seconds.",
      author: "Sabrina Rahman",
      role: "Academic Coordinator"
    }
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto space-y-16">
      {/* Testimonials */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white-800">
            Trusted by Academic Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white/90 border border-slate-200 p-6 rounded-2xl shadow-sm backdrop-blur-md">
              <div className="flex gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 font-medium text-sm mb-4">"{rev.quote}"</p>
              <div>
                <div className="font-bold text-slate-900 text-sm">{rev.author}</div>
                <div className="text-xs text-slate-500">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-5 border border-slate-800 shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Modernize Attendance Tracking?</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm font-medium">
          Deploy RollCall today with Node.js & MongoDB backend architecture.
        </p>
        <div className="pt-2">
          <a 
            href="#demo" 
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            Launch Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}