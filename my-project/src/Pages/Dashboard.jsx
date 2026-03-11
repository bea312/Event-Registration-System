import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user, onCancel, onEdit }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="bg-slate-900/80 border border-slate-800 shadow-2xl rounded-3xl max-w-3xl w-full p-10 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-cyan-400">Submitted registration</span>
          <h1 className="text-4xl font-black text-slate-100 mt-2">{user.fullName || 'Registered guest'}</h1>
          <p className="text-sm text-slate-400 mt-1">Thanks for securing your spot at Tech Innovation 2026.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
          <div className="rounded-2xl bg-slate-950/40 border border-slate-800 p-4 space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.4em]">Ticket</p>
            <p className="text-lg font-semibold text-cyan-300">{user.ticketType}</p>
            <p className="text-xs text-slate-500">Use this page to view or modify your registration.</p>
          </div>
          <div className="rounded-2xl bg-slate-950/40 border border-slate-800 p-4 space-y-2">
            <p className="text-slate-400 text-[0.7rem] uppercase tracking-[0.4em]">Contact</p>
            <p className="font-semibold">{user.email || 'No email'}</p>
            <p className="font-semibold">{user.phone || 'No phone'}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
          <div className="rounded-2xl bg-slate-950/40 border border-slate-800 p-4">
            <p className="text-slate-400 text-xs uppercase tracking-[0.4em] mb-1">Organization</p>
            <p className="font-semibold">{user.organization || 'Not provided'}</p>
          </div>
          <div className="rounded-2xl bg-slate-950/40 border border-slate-800 p-4">
            <p className="text-slate-400 text-xs uppercase tracking-[0.4em] mb-1">Dietary</p>
            <p className="font-semibold">{user.dietary || 'No restrictions'}</p>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-xs uppercase tracking-[0.4em] mb-1">Notes</p>
          <p className="text-sm italic text-slate-200">{user.notes || 'No additional notes'}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={handleEdit}
            className="flex-1 bg-slate-800 border border-slate-700 py-3 rounded-2xl font-bold text-slate-100 hover:border-cyan-500"
          >
            Edit registration
          </button>
          <button
            onClick={onCancel}
            className="flex-1 border border-red-500 text-red-400 hover:bg-red-500/10 py-3 rounded-2xl font-bold"
          >
            Cancel registration
          </button>
        </div>
      </div>
    </div>
  );
}
