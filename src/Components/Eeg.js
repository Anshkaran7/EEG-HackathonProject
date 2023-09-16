// EEGChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const EEGChart = ({ data }) => {
  return (
    <div>
      <h2>EEG Chart</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default EEGChart;
