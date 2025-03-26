import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: #f5f5f5;
`;

const FormContainer = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    color: #2c3e50;
`;

const LoginForm = ({ onSubmit }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials);
    };

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Title>LOGIN</Title>
                <Input
                    type="text"
                    placeholder="Usuario"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <Button type="submit">Iniciar Sesión</Button>
            </FormContainer>
        </Container>
    );
};

export default LoginForm;
