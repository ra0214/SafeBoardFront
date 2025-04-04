import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await fetch('http://52.5.61.144:8080/movement');
        const data = await response.json();
        
        const formattedData = data.map(item => ({
          ...item,
          hora: new Date(item.created_at).toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })
        }));
        
        setMovements(formattedData);
      } catch (error) {
        console.error('Error al cargar movimientos:', error);
      }
    };

    fetchMovements();
    const interval = setInterval(fetchMovements, 5000);
    return () => clearInterval(interval);
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
            {movements.length > 0 ? (
              movements.map((movement, index) => (
                <TableRow key={index}>
                  <TableCell>{movement.hora}</TableCell>
                  <TableCell>{movement.aceleracion}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="2">No hay datos disponibles</TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default MovementTable;