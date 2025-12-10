import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SetupProfile from './pages/SetupProfile';
import Explore from './pages/Explore';
import ActivityDetails from './pages/ActivityDetails';
import CreateActivity from './pages/CreateActivity';
import AiChat from './pages/AiChat';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<SetupProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/chat" element={<AiChat />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;