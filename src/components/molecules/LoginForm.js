import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;

const Text = styled.label`
    color: #4B3B5A;
    font-size: 14px;
    margin-bottom: -10px;
    font-weight: 500;
    text-align: left;
    padding-left: 5px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: flex-start;
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
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Text>Usuario</Text>
                <Input
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
            </InputGroup>
            <InputGroup>
                <Text>Contraseña</Text>
                <Input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
            </InputGroup>
            <Button type="submit">Iniciar Sesión</Button>
        </Form>
    );
};

export default LoginForm;