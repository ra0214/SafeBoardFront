import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-family: 'Cursive';
    font-size: 24px;
    color: white;
  }
`;

const LogoSection = () => {
  return (
    <LogoContainer>
      <Logo src="/bus-icon.png" alt="SafeBoard Logo" />
      <h1>SafeBoard</h1>
    </LogoContainer>
  );
};

export default LogoSection;
