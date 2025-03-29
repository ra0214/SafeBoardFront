import React, { useState, useEffect } from 'react';
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

const TableHeader = styled.div`
  background-color:#4B3B5A;
  color: white;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

const PassengerCounter = ({ title, fetchData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    };

    loadData();
  }, [fetchData]);

  return (
    <TableContainer>
      <TableHeader>{title}</TableHeader>
      <Table>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default PassengerCounter;