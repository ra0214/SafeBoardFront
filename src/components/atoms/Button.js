import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: ${props => props.disabled ? '#cccccc' : '#554862'};
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: background-color 0.3s;
    
    &:hover {
        background: ${props => props.disabled ? '#cccccc' : '#1a4a6d'};
    }
`;

export default Button;