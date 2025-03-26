import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import DashboardPasajeros from './components/pages/DashboardPasajeros';
import DashboardConduccion from './components/pages/DashboardConduccion';

function App() {
  // Aquí puedes agregar lógica para verificar si el usuario está autenticado
  const isAuthenticated = true;

  console.log('Estado de autenticación:', isAuthenticated); // Para debugging

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/monitor-pasajeros" replace />} 
        />
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to="/monitor-pasajeros" />
          } 
        />
        <Route 
          path="/monitor-pasajeros" 
          element={
            isAuthenticated ? <DashboardPasajeros /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/monitor-conduccion" 
          element={
            isAuthenticated ? <DashboardConduccion /> : <Navigate to="/login" />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;