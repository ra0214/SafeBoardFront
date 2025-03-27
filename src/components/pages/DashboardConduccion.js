import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DashboardConduccion = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Limpia el localStorage
    if (onLogout) {
      onLogout(); // Actualiza el estado en App.js
    }
    navigate('/', { replace: true }); // Fuerza la redirección al login
  };

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      {/* Aquí colocarás el contenido específico del monitor de conducción */}
    </DashboardContainer>
  );
};

export default DashboardConduccion;