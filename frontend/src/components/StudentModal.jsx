import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function StudentModal({ isOpen, onClose, onAddStudent }) {
  const [formData, setFormData] = useState({ studentId: '', name: '', department: 'CSE', roll: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({ studentId: '', name: '', department: 'CSE', roll: '' });
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex justify-between items-center border-b border-indigo-500/20 pb-3">
          <h3 className="text-lg font-bold text-white">Create New Student</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-400 mb-1 block">Student ID</label>
            <input
              type="text"
              placeholder="e.g. STU-104"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              className="w-full bg-slate-950 border border-indigo-500/30 rounded-xl p-3 text-white text-sm outline-none focus:border-amber-400"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Abdullah Al Mamun"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-950 border border-indigo-500/30 rounded-xl p-3 text-white text-sm outline-none focus:border-amber-400"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Department</label>
              <input
                type="text"
                placeholder="e.g. CSE"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-slate-950 border border-indigo-500/30 rounded-xl p-3 text-white text-sm outline-none focus:border-amber-400"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Roll</label>
              <input
                type="text"
                placeholder="e.g. 04"
                value={formData.roll}
                onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
                className="w-full bg-slate-950 border border-indigo-500/30 rounded-xl p-3 text-white text-sm outline-none focus:border-amber-400"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition"
            >
              Save Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}