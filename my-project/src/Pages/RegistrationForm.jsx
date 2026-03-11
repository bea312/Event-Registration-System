import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm({ user, setUser }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
       
        <h2 className="text-4xl font-black text-slate-100 leading-tight">Submit your registration</h2>
        <p className="text-slate-400 mt-2">
          Share a few details so we can reserve your seat and personalize your conference experience.
        </p>
      </div>

      <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 space-y-6 shadow-xl shadow-cyan-900/40">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Full name
            <input
              name="fullName"
              placeholder="fullname"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.fullName}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Email address
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Phone number
            <input
              name="phone"
              type="tel"
              placeholder="tel"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.phone}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Organization / institution
            <input
              name="organization"
              placeholder="Idea Lab, Enterprise Group, University"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.organization}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Ticket type
            <select
              name="ticketType"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.ticketType}
              onChange={handleChange}
            >
              <option>Standard</option>
              <option>VIP</option>
              <option>Student</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Dietary preferences
            <input
              name="dietary"
              placeholder="No seafood / Vegan / Allergies"
              className="p-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
              value={user.dietary}
              onChange={handleChange}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Additional notes
          <textarea
            name="notes"
            rows="4"
            placeholder="Tell us if you’re speaking, bringing a team, need a visa letter, etc."
            className="p-3 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 transition-colors"
            value={user.notes}
            onChange={handleChange}
          />
        </label>

        <button
          onClick={() => navigate('/review')}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-cyan-900/40"
        >
          Review Application
        </button>
      </div>
    </div>
  );
}
