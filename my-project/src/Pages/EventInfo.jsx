import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../Components/PageShell';

import EventHero from '../assets/Event Engagement Ideas From Tech Conferences in___.jpeg';

const speakers = [
  { name: 'Dr. Beatrice', title: 'AI Ethics & Inclusion' },
  { name: 'Mukagasirabo', title: 'Product Futures' },
];

export default function EventInfo() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-10 space-y-6 shadow-2xl shadow-cyan-900/30">
        <div className="text-center">
        
       
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TECH INNOVATION 2026
          </h1>
          <p className="mt-3 text-slate-400 text-lg">Kigali Convention Centre · October 15-17 · Rwanda</p>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            Join 500+ designers, entrepreneurs, and builders for three days of intimate learning, live product labs, and the bolder conversations shaping African tech ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-inner">
            <img
              src={EventHero}
              alt="Conference crowd"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-slate-950 text-sm text-slate-300">
              <p>Keynotes</p>
              <p className="text-xs text-slate-500 mt-1">Human-centered AI · Digital infrastructure · Venture journeys</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-cyan-600 bg-slate-950/60 p-4 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">Why attend?</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Immersive workshops led by builders from five continents.</li>
                <li>• Curated networking sessions with investors and mentors.</li>
                <li>• Live demos of AI, climate tech, and decentralized tools.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">Featured voices</p>
              {speakers.map((speaker) => (
                <div key={speaker.name} className="rounded-2xl bg-slate-900/90 p-3 border border-slate-700">
                  <p className="text-lg font-semibold text-slate-50">{speaker.name}</p>
                  <p className="text-sm text-slate-400">{speaker.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/register')}
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-lg font-bold text-white py-4 px-10 rounded-full shadow-lg shadow-cyan-900/40 transition-all"
          >
            Register Now
          </button>
         
        </div>
      </div>
    </div>
  );
}
