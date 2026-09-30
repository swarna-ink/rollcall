import React from 'react';
import { Calendar, Search, Check, X, Clock } from 'lucide-react';

export default function AttendanceTable({ students, attendance, onStatusChange, date, setDate, search, setSearch }) {
  return (
    <section className="max-w-5xl mx-auto space-y-4 px-4 pb-12">
      {/* Control Panel */}
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-2 text-slate-800 outline-none focus:border-indigo-600 text-sm font-semibold"
          />
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Filter by name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-600 font-medium"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-bold">
                <th className="p-4">Student ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Department</th>
                <th className="p-4 text-center">Mark Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {students.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-slate-500 font-medium">No students found.</td>
                </tr>
              ) : (
                students.map((student) => {
                  const currentStatus = attendance[student._id] || 'Present';
                  return (
                    <tr key={student._id} className="hover:bg-indigo-50/50 transition">
                      <td className="p-4 font-mono font-bold text-indigo-900">{student.studentId}</td>
                      <td className="p-4 font-semibold text-slate-800">{student.name}</td>
                      <td className="p-4 text-slate-500 font-medium">{student.department}</td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          {[
                            { name: 'Present' },
                            { name: 'Absent' },
                            { name: 'Late' },
                          ].map((st) => {
                            const active = currentStatus === st.name;
                            return (
                              <button
                                key={st.name}
                                onClick={() => onStatusChange(student._id, st.name)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                  active
                                    ? st.name === 'Present'
                                      ? 'bg-emerald-600 text-white shadow-sm'
                                      : st.name === 'Absent'
                                      ? 'bg-rose-600 text-white shadow-sm'
                                      : 'bg-amber-500 text-slate-950 shadow-sm'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                {st.name}
                              </button>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}