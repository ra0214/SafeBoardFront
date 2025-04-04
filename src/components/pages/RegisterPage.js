import React from 'react';
import RegisterContainer from '../organisms/RegisterContainer';
import DashboardHeader from '../organisms/DashboardHeader';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterPageWrapper = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  background-color: #f5f6fa;
`;

const RegisterPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    if (onLogout) {
      onLogout();
    }
    navigate('/', { replace: true });
  };

  return (
    <RegisterPageWrapper>
      <DashboardHeader onLogout={handleLogout} />
      <RegisterContainer />
    </RegisterPageWrapper>
  );
};

export default RegisterPage;