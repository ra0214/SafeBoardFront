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

const Content = styled.div`
  padding: 20px;
`;

const DashboardPasajeros = ({ onLogout }) => {
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
      <Content>
        <h1>Monitor de Pasajeros</h1>
        {/* Aquí va el contenido de tu dashboard */}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardPasajeros;
