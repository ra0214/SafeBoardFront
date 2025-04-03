import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import MovementTable from '../molecules/MovementTable';
import MovementChart from '../molecules/MovementChart'; // Importa la gráfica

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  padding-top: 90px; 
  background-color: #f5f6fa;
`;

const DashboardConduccion = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    if (onLogout) {
      onLogout();
    }
    navigate('/', { replace: true });
  };

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      <MovementTable />
      <MovementChart /> {}
    </DashboardContainer>
  );
};

export default DashboardConduccion;