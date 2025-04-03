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

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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

const PassengerCounter = ({ title, data = [] }) => {
  return (
    <TableContainer>
      <TableHeader>{title}</TableHeader>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>ID ESP32</TableHeaderCell>
            <TableHeaderCell>Cantidad</TableHeaderCell>
            <TableHeaderCell>Hora</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.esp32_id}</TableCell>
              <TableCell>{item.conteo}</TableCell>
              <TableCell>{new Date().toLocaleTimeString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default PassengerCounter;