import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import TrafficLightAlerts from '../molecules/TrafficLightAlerts';
import MovementTable from '../molecules/MovementTable';
import IncidentChart from '../molecules/IncidentChart';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto; /* Permite que el contenido determine la altura */
  min-height: 100vh; /* Asegura que ocupe al menos toda la pantalla */
  background-color: #f5f6fa; /* Fondo claro */
`;

const Content = styled.div`
  padding: 20px;
  flex: 1; /* Permite que el contenido crezca */
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
      <Content>
        <MovementTable /> {/* Tabla de Movimiento Brusco */}
        <IncidentChart /> {/* Gráfica de incidentes */}
        <TrafficLightAlerts /> {/* Semáforo con alertas */}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardConduccion;