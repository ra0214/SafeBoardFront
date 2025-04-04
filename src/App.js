import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import DashboardPasajeros from './components/pages/DashboardPasajeros';
import DashboardTotal from './components/pages/DashboardTotal';
import DashboardConduccion from './components/pages/DashboardConduccion';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsAuthenticated(!!user);
    setIsAdmin(user?.userName === 'admin');
  }, []);

  const handleLoginSuccess = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsAuthenticated(true);
    setIsAdmin(user?.userName === 'admin');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/monitor-pasajeros" /> : 
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          } 
        />
        
        <Route 
          path="/monitor-pasajeros" 
          element={
            isAuthenticated ? 
            <DashboardPasajeros onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />
        
        <Route 
          path="/register" 
          element={
            isAuthenticated && isAdmin ? 
            <RegisterPage onLogout={handleLogout} /> : 
            <Navigate to="/monitor-pasajeros" />
          } 
        />

        <Route 
          path="/total-pasajeros" 
          element={
            isAuthenticated ? 
            <DashboardTotal onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />

        <Route 
          path="/monitor-conduccion" 
          element={
            isAuthenticated ? 
            <DashboardConduccion onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;