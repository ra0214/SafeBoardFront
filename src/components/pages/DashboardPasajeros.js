import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import PassengerCounter from '../molecules/PassengerCounter';

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

const CountersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;


const fetchSubidas = async () => {
  return ['1', '4', '5'];
};

const fetchBajadas = async () => {
  return ['4', '1', '3'];
};

const DashboardPasajeros = ({ onLogout }) => {
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
        <h1>Monitor de Pasajeros</h1>
        <CountersContainer>
          <PassengerCounter title="Contador de personas subidas" fetchData={fetchSubidas} />
          <PassengerCounter title="Contador de personas bajadas" fetchData={fetchBajadas} />
        </CountersContainer>
      </Content>
    </DashboardContainer>
  );
};

export default DashboardPasajeros;