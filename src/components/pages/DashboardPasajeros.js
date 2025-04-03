import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import PassengerCounter from '../molecules/PassengerCounter';
import { TOPICS, connectMQTTCounter } from '../../services/mqttService';
import { fetchPasajeros } from '../../services/apiService';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f6fa;
  padding-top: 70px;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

const CountersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

const DashboardPasajeros = ({ onLogout }) => {
  const navigate = useNavigate();
  const [subidasData, setSubidasData] = useState([]);
  const [bajadasData, setBajadasData] = useState([]);

  useEffect(() => {
    // Obtener datos de la API para personas que suben
    fetchPasajeros(setSubidasData);

    // Mantener la conexión MQTT para personas que bajan
    const disconnectBajadas = connectMQTTCounter(TOPICS.PERSONAS_BAJAN, setBajadasData);

    return () => {
      if (disconnectBajadas) {
        disconnectBajadas();
      }
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