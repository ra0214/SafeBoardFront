import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchMovimientosBruscos } from '../../services/apiService';

const MovementChart = () => {
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
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={movimientos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hora" label={{ value: 'Hora', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Aceleración', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="aceleracion" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MovementChart;