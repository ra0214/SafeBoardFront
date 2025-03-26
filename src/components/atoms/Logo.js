import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Logo = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

export default Logo;
