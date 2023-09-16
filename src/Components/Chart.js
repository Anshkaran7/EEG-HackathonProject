import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const generateData = () => {
    const data = [];
    let fp1 = 2;  // Starting value for fp1
    let fp2 = 100;  // Starting value for fp2
    let cz = 1;  // Starting value for cz
  
    const increment = () => {
      const change = Math.random() - 0.5; // Random value between -0.5 and 0.5
      return change * 0.2;  // Scale the change to control the increment size
    };
  
    for (let i = 0; i < 100; i++) {
      fp1 += increment();
      fp2 += increment();
      cz += increment();
  
      // Keep values within a reasonable range
      fp1 = Math.min(Math.max(fp1, 1), 3);  // Limit fp1 between 1 and 3
      fp2 = Math.min(Math.max(fp2, 50), 150);  // Limit fp2 between 50 and 150
      cz = Math.min(Math.max(cz, 0.5), 1.5);  // Limit cz between 0.5 and 1.5
  
      data.push({ time: (i / 10).toFixed(1), fp1, fp2, cz });
    }
    return data;
  };
  

const EEGGraph = () => {

    useEffect(() => {
        const interval = setInterval(() => {
          setData(generateData());
        }, 3000);
        return () => clearInterval(interval);
      }
    , []);
  const [data, setData] = useState(() => generateData());

  const handleUpdateData = () => {
    setData(generateData());
  };

  return (
    <div>
      <h2>EEG Line Chart</h2>
   
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'Amplitude', angle: -90, position: 'insideLeft', offset: 10 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="fp1" stroke="black" dot={false} />
      </LineChart>
    </div>
  );
};

export default EEGGraph;