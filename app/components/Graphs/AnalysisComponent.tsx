'use client';
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const AnalysisComponent = () => {
  const [analysisData, setAnalysisData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/analyze_deposits');
        const data = await response.json();
        setAnalysisData(data);
      } catch (error) {
        console.error('Error fetching analysis data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Plot
        data={[
          {
            x: Object.keys(analysisData),
            y: Object.values(analysisData),
            type: 'bar',
            marker: { color: 'blue' },
          },
        ]}
        layout={{
          title: 'Total Deposit Amount by Month',
          xaxis: { title: 'Month', automargin: true },
          yaxis: { title: 'Total Deposit Amount', automargin: true },
        }}
      />
    </div>
  );
};

export default AnalysisComponent;
