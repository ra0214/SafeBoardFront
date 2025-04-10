import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Title = styled.h2`
  text-align: center;
  padding: 15px;
  background-color: #5fa6bb;
  color: white;
  margin: 0;
  border-radius: 8px 8px 0 0;
`;

const PassengerCounter = ({ title, data = [] }) => {
  return (
    <TableContainer>
      <Title>{title}</Title>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID ESP32</TableHeaderCell>
            <TableHeaderCell>Cantidad</TableHeaderCell>
            <TableHeaderCell>Hora</TableHeaderCell>
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.esp32_id || 'N/A'}</TableCell>
              <TableCell>{item.conteo}</TableCell>
              <TableCell>{item.hora || new Date().toLocaleTimeString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default PassengerCounter;