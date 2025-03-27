import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from '../molecules/RegisterForm';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';

const RegisterWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const CardHeader = styled.div`
  background-color: #4B3B5A;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const CardContent = styled.div`
  padding: 40px;
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
  color: #000000;
  
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
  const [error, setError] = useState('');

  const handleRegister = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await registerUser(formData);
      console.log('Usuario registrado exitosamente');
      navigate('/');
    } catch (error) {
      console.error('Error en el registro:', error);
      setError(error.message);
    }
  };

  return (
    <RegisterWrapper>
        <FormPanel>
            <StyledCard>
                <CardHeader>REGISTRO</CardHeader>
                <CardContent>
                    <Title>Crear Cuenta</Title>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <RegisterForm onSubmit={handleRegister} />
                    <LoginLink>
                        ¿Ya tienes cuenta? <a href="/">Iniciar sesión</a>
                    </LoginLink>
                </CardContent>
            </StyledCard>
        </FormPanel>
        <ImagePanel />
    </RegisterWrapper>
);
};

const ErrorMessage = styled.p`
  color: #ff0033;
  text-align: center;
  margin-bottom: 15px;
`;

export default RegisterContainer;