import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#00bfff' : 'transparent')};
  border: none;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.logout {
    background-color: #d9534f;
  }
`;

const NavButton = ({ label, active, logout, onClick }) => {
  return (
    <Button
      active={active}
      className={logout ? 'logout' : ''}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;
