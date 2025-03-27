import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { hora: '08:00', incidentes: 5 },
  { hora: '09:00', incidentes: 3 },
  { hora: '10:00', incidentes: 8 },
];

const IncidentChart = () => {
  return (
    <ResponsiveContainer width="80%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hora" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="incidentes" stroke="#4B3B5A" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncidentChart;