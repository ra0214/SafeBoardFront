import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchMovimientosBruscos } from '../../services/apiService';

const TableContainer = styled.div`
  margin: 20px;
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const TableWrapper = styled.div`
  max-height: 200px; 
  overflow-y: auto; 
  border: 1px solid #ddd; 
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
  const [movimientos, setMovimientos] = useState([]); 

  useEffect(() => {
    fetchMovimientosBruscos((data) => {
      const movimientosConHora = data.map((movimiento) => ({
        ...movimiento,
        hora: new Date().toLocaleTimeString(), 
      }));
      setMovimientos(movimientosConHora);
    });
  }, []);

  return (
    <TableContainer>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHeader colSpan="2">Movimientos Bruscos</TableHeader>
            </tr>
            <tr>
              <TableHeader>Hora del evento</TableHeader>
              <TableHeader>Aceleración</TableHeader>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((movimiento, index) => (
              <TableRow key={index}>
                <TableCell>{movimiento.hora}</TableCell>
                <TableCell>{movimiento.aceleracion}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default MovementTable;