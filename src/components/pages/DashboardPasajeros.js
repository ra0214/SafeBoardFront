import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import PassengerCounter from '../molecules/PassengerCounter';
import { TOPICS, connectMQTTCounter } from '../../services/mqttService';

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

const DashboardPasajeros = ({ onLogout }) => {
  const navigate = useNavigate();
  const [subidasData, setSubidasData] = useState([]);
  const [bajadasData, setBajadasData] = useState([]);

  useEffect(() => {
    console.log('Iniciando conexiones MQTT...');
    const disconnectSubidas = connectMQTTCounter(TOPICS.PERSONAS_SUBEN, setSubidasData);
    const disconnectBajadas = connectMQTTCounter(TOPICS.PERSONAS_BAJAN, setBajadasData);

    return () => {
      console.log('Limpiando conexiones MQTT...');
      disconnectSubidas();
      disconnectBajadas();
    };
  }, []);

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
          <PassengerCounter 
            title="Personas que Suben" 
            data={subidasData}
          />
          <PassengerCounter 
            title="Personas que Bajan" 
            data={bajadasData}
          />
        </CountersContainer>
      </Content>
    </DashboardContainer>
  );
};

export default DashboardPasajeros;