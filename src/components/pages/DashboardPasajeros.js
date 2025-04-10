import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import PassengerCounter from '../molecules/PassengerCounter';
import { useWebSocket } from '../../contexts/WebSocketContext';

// Componentes estilizados
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

const DeviceInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #5fa6bb;
  font-weight: bold;
`;

const DashboardPasajeros = ({ onLogout }) => {
  const navigate = useNavigate();
  const [subidasData, setSubidasData] = useState([]);
  const [bajadasData, setBajadasData] = useState([]);
  const { wsService } = useWebSocket();

  useEffect(() => {
    if (!wsService) return;

    const handlePeopleGoUp = (data) => {
      // Verificar si los datos son para nuestro ESP32
      if (data.esp32_id === wsService.esp32_id) {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('es-MX', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });

        setSubidasData(prev => [...prev, {
          conteo: data.count,
          hora: formattedTime,
          esp32_id: data.esp32_id // Añadir ESP32_ID a los datos
        }]);
      }
    };

    const handlePeopleGoDown = (data) => {
      // Verificar si los datos son para nuestro ESP32
      if (data.esp32_id === wsService.esp32_id) {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('es-MX', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });

        setBajadasData(prev => [...prev, {
          conteo: data.count,
          hora: formattedTime,
          esp32_id: data.esp32_id // Añadir ESP32_ID a los datos
        }]);
      }
    };

    wsService.subscribe('peopleGoUp', handlePeopleGoUp);
    wsService.subscribe('peopleGoDown', handlePeopleGoDown);

    return () => {
      wsService.unsubscribe('peopleGoUp', handlePeopleGoUp);
      wsService.unsubscribe('peopleGoDown', handlePeopleGoDown);
    };
  }, [wsService]);

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
        <DeviceInfo>
          Dispositivo conectado: {wsService?.esp32_id || 'No identificado'}
        </DeviceInfo>
        <CountersContainer>
          <PassengerCounter 
            title="Personas que Suben" 
            data={subidasData.filter(item => item.esp32_id === wsService?.esp32_id)} 
          />
          <PassengerCounter 
            title="Personas que Bajan" 
            data={bajadasData.filter(item => item.esp32_id === wsService?.esp32_id)} 
          />
        </CountersContainer>
      </Content>
    </DashboardContainer>
  );
};

export default DashboardPasajeros;