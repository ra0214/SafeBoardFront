import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import DashboardPasajeros from './components/pages/DashboardPasajeros';
import DashboardConduccion from './components/pages/DashboardConduccion';
import DashboardTotal from './components/pages/DashboardTotal';
import RegisterPage from './components/pages/RegisterPage';
import { isAuthenticated, setAuthenticated } from './services/authService';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = isAuthenticated();
    setIsAuth(auth);
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
    setIsAuth(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsAuth(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuth ? 
            <Navigate to="/monitor-pasajeros" /> : 
            <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/register" 
          element={
            isAuth ? 
            <Navigate to="/monitor-pasajeros" /> : 
            <RegisterPage />
          } 
        />
        <Route 
          path="/monitor-pasajeros" 
          element={
            <PrivateRoute>
              <DashboardPasajeros onLogout={handleLogout} />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/total-pasajeros"
          element={
            <PrivateRoute>
              <DashboardTotal onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route 
          path="/monitor-conduccion" 
          element={
            <PrivateRoute>
              <DashboardConduccion onLogout={handleLogout} />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;