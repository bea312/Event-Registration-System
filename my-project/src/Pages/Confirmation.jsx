import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border-2 border-green-500 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">Registration Successful!</h1>
      <p className="text-slate-400 max-w-md mb-8">
        Thank you for joining the Tech Innovation Conference. Your seat has been reserved and your details are saved locally on this device.
      </p>
      
      <button 
        onClick={() => navigate('/dashboard')}
        className="bg-slate-100 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors"
      >
        Go to My Dashboard
      </button>
    </div>
  );
}