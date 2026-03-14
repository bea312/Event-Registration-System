import React, { useMemo, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import EventInfo from './Pages/EventInfo';
import RegistrationForm from './Pages/RegistrationForm';
import ReviewPage from './Pages/ReviewPage';
import ConfirmationPage from './Pages/ConfirmationPage';
import Dashboard from './Pages/Dashboard';

const createBlankUser = () => ({
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  ticketType: 'Standard',
  dietary: '',
  notes: ''
});

const loadStoredUser = () => {
  const saved = localStorage.getItem('tech_event_user');
  if (!saved) return null;

  try {
    return { ...createBlankUser(), ...JSON.parse(saved) };
  } catch {
    localStorage.removeItem('tech_event_user');
    return null;
  }
};

export default function App() {

  const initialRegistration = useMemo(() => {
    const stored = loadStoredUser();
    return {
      user: stored ?? createBlankUser(),
      isRegistered: Boolean(stored)
    };
  }, []);

  const [user, setUser] = useState(initialRegistration.user);
  const [isRegistered, setIsRegistered] = useState(initialRegistration.isRegistered);

  const completeRegistration = () => {
    localStorage.setItem('tech_event_user', JSON.stringify(user));
    setIsRegistered(true);
  };

  const startEditing = () => {
    setIsRegistered(false);
  };

  const clearData = () => {
    localStorage.removeItem('tech_event_user');
    setIsRegistered(false);
    setUser(createBlankUser());
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-cyan-500">

      <Routes>

        <Route
          path="/"
          element={isRegistered ? <Navigate to="/dashboard" replace /> : <EventInfo />}
        />

        <Route
          path="/register"
          element={isRegistered ? <Navigate to="/dashboard" replace /> : <RegistrationForm user={user} setUser={setUser} />}
        />

        <Route
          path="/review"
          element={isRegistered ? <Navigate to="/dashboard" replace /> : <ReviewPage user={user} onConfirm={completeRegistration} />}
        />

        <Route
          path="/confirm"
          element={<ConfirmationPage registration={user} />}
        />

        <Route
          path="/dashboard"
          element={isRegistered ? <Dashboard user={user} onCancel={clearData} onEdit={startEditing} /> : <Navigate to="/" replace />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </div>
  );
}