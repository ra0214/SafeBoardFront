import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #4B3B5A;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dcdde1;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5fa6bb;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #5fa6bb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #4a8599;
  }
`;

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    esp32_id: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label>Nombre de Usuario</Label>
        <Input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Correo Electrónico</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Contraseña</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>ID del ESP32</Label>
        <Input
          type="text"
          name="esp32_id"
          value={formData.esp32_id}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <Button type="submit">Registrar Usuario</Button>
    </Form>
  );
};

export default RegisterForm;