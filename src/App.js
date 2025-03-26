import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import DashboardPasajeros from './components/pages/DashboardPasajeros';
import DashboardConduccion from './components/pages/DashboardConduccion';
import DashboardTotal from './components/pages/DashboardTotal';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/" 
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route 
          path="/monitor-pasajeros" 
          element={<DashboardPasajeros onLogout={handleLogout} />} 
        />
        <Route 
          path="/total-pasajeros"
          element={<DashboardTotal onLogout={handleLogout} />}
        />
        <Route 
          path="/monitor-conduccion" 
          element={<DashboardConduccion onLogout={handleLogout} />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;