import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieGraph() {
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 125, label: 'Necessities' },
          { id: 1, value: 50, label: 'Desires' },
          { id: 2, value: 100, label: 'Savings' },
          { id: 3, value: 25, label: 'Remaining' },
        ],
      },
    ]}
    width={600}
    height={200}
  />
  );
}