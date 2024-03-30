import React from 'react';
import BarGraph from '../components/Charts/BarGraph';

export default function App() {
  const graphComponentString = `
   
  `;

  const ComponentToRender = React.createElement('div', {
    dangerouslySetInnerHTML: { __html: graphComponentString },
  });

  return (
    <div>
      {ComponentToRender}
      <BarGraph
      data={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      xAxisData={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      height={290}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
  );
}
