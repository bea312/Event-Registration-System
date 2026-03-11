import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import EventInfo from './Pages/EventInfo';
import RegistrationForm from './Pages/RegistrationForm';
import ReviewPage from './Pages/ReviewPage';
import Confirmation from './Pages/Confirmation';
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
  if (typeof window === 'undefined') {
    return null;
  }

  const saved = window.localStorage.getItem('tech_event_user');
  if (!saved) {
    return null;
  }

  try {
    return { ...createBlankUser(), ...JSON.parse(saved) };
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    window.localStorage.removeItem('tech_event_user');
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
    <Router>
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
            element={isRegistered ? <Confirmation /> : <Navigate to="/" replace />} 
          />

        
          <Route 
            path="/dashboard" 
            element={isRegistered ? <Dashboard user={user} onCancel={clearData} onEdit={startEditing} /> : <Navigate to="/" replace />} 
          />
      
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
