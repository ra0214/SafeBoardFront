import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #4B3B5A;
  font-size: 20px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const TableHeader = styled.th`
  background-color: #4B3B5A;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const MovementTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader colSpan="2">Movimientos Bruscos</TableHeader> {/* Encabezado que abarca todo */}
          </tr>
          <tr>
            <TableHeader>Hora del evento</TableHeader>
            <TableHeader>Frecuencia</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>08:00</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>09:00</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10:00</TableCell>
            <TableCell>8</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default MovementTable;