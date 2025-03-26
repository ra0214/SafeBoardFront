import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../molecules/RegisterForm';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';

const RegisterWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const FormPanel = styled.div`
  flex: 1;
  background-color: #083344;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePanel = styled.div`
  flex: 1;
  background: url('/register.avif') no-repeat center center;
  background-size: cover;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #4B3B5A;
  font-size: 24px;
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 20px;
  
  a {
    color: #5fa6bb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterContainer = () => {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    console.log('Datos de registro:', formData);
    navigate('/');
  };

  return (
    <RegisterWrapper>
        <FormPanel>
            <StyledCard>
                <Title>Crear Cuenta</Title>
                <RegisterForm onSubmit={handleRegister} />
                <LoginLink>
                    ¿Ya tienes cuenta? <a href="/">Iniciar sesión</a>
                </LoginLink>
            </StyledCard>
        </FormPanel>
        <ImagePanel />
    </RegisterWrapper>
  );
};

export default RegisterContainer;