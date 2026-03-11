import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReviewPage({ user, onConfirm }) {
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    onConfirm(); // This saves to LocalStorage in App.jsx
    navigate('/confirm');
  };

  const details = [
    { label: 'Full Name', value: user.fullName },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Organization', value: user.organization },
    { label: 'Ticket Type', value: user.ticketType },
    { label: 'Dietary Preferences', value: user.dietary },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-slate-100">Review your registration</h2>
        <p className="text-slate-400 mt-2">Confirm that every detail is correct before we lock in your seat.</p>
        <p className="text-sm text-cyan-300 mt-1">
          Click <span className="font-semibold text-cyan-100">Confirm & Register</span> to finalize your seat—no changes lock-in until this step completes.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl space-y-5">
        {details.map((detail) => (
          <div key={detail.label} className="flex justify-between border-b border-slate-700 pb-3 last:border-0 last:pb-0">
            <span className="text-slate-400">{detail.label}</span>
            <span className="font-semibold text-slate-100">
              {detail.value || 'Not provided'}
            </span>
          </div>
        ))}

        <div className="pt-3">
          <span className="text-slate-400 block mb-2">Additional notes</span>
          <p className="bg-slate-900 p-3 rounded-2xl text-sm italic">
            {user.notes || 'No special requirements provided.'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-6">
          <button
            onClick={() => navigate('/register')}
            className="flex-1 border border-slate-600 hover:bg-slate-700 py-3 rounded-2xl font-bold transition-all"
          >
            Edit Info
          </button>
          <button
            onClick={handleFinalSubmit}
            className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-3 rounded-2xl font-bold shadow-lg shadow-cyan-900/40 transition-all"
          >
            Confirm & Register
          </button>
        </div>
      </div>
    </div>
  );
}
