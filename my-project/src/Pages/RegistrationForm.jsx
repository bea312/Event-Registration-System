import React from "react";
import { useNavigate } from "react-router-dom";

const ticketOptions = ["Standard", "VIP", "Student"];

export default function RegistrationForm({ user, setUser }) {
  const navigate = useNavigate();

  const updateField = (field) => (event) => {
    const value = event.target.value;
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/review");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl"
      >
        <div>
    
          <h1 className="text-3xl font-bold text-slate-100 mt-2">Register for Tech Innovation 2026</h1>
          <p className="text-slate-400 mt-1">Share your details so we can reserve you a seat.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 text-sm text-slate-400">
            Full name
            <input
              type="text"
              value={user.fullName}
              onChange={updateField("fullName")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
              required
            />
          </label>
          <label className="space-y-1 text-sm text-slate-400">
            Email
            <input
              type="email"
              value={user.email}
              onChange={updateField("email")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
              required
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 text-sm text-slate-400">
            Phone number
            <input
              type="tel"
              value={user.phone}
              onChange={updateField("phone")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
            />
          </label>
          <label className="space-y-1 text-sm text-slate-400">
            Organization
            <input
              type="text"
              value={user.organization}
              onChange={updateField("organization")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-1 text-sm text-slate-400">
            Ticket type
            <select
              value={user.ticketType}
              onChange={updateField("ticketType")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
            >
              {ticketOptions.map((ticket) => (
                <option key={ticket} value={ticket}>
                  {ticket}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm text-slate-400">
            Dietary requirements
            <input
              type="text"
              value={user.dietary}
              onChange={updateField("dietary")}
              className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
            />
          </label>
        </div>

        <label className="space-y-1 text-sm text-slate-400">
          Additional notes
          <textarea
            value={user.notes}
            onChange={updateField("notes")}
            rows={4}
            className="w-full rounded-2xl bg-slate-950/40 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-500 outline-none"
          />
        </label>

        <div className="flex justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex-1 border border-slate-700 py-3 rounded-2xl font-bold text-slate-100 hover:border-cyan-500 transition"
          >
            Back to Event Info
          </button>
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-slate-950 font-bold py-3 rounded-2xl shadow-lg shadow-cyan-900/40 transition hover:from-cyan-500 hover:to-blue-500"
          >
            Review & Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
