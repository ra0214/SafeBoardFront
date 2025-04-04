import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import PassengerCounter from '../molecules/PassengerCounter';

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
    const fetchData = async () => {
      try {
        // Cargar datos de personas que suben
        const responseUp = await fetch('http://52.5.61.144:8080/peopleGoUpTest');
        const dataUp = await responseUp.json();
        setSubidasData(dataUp.map(item => {
          const date = new Date(item.created_at);
          const formattedTime = date.toLocaleString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
          return {
            ...item,
            hora: formattedTime
          };
        }));

        // Cargar datos de personas que bajan
        const responseDown = await fetch('http://52.5.61.144:8080/peopleGoDown');
        const dataDown = await responseDown.json();
        setBajadasData(dataDown.map(item => {
          const date = new Date(item.created_at);
          const formattedTime = date.toLocaleString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
          return {
            ...item,
            hora: formattedTime
          };
        }));
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
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
