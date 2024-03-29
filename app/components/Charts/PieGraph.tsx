import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieGraph() {
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'Medical' },
          { id: 1, value: 20, label: 'Trasnportation' },
          { id: 2, value: 35, label: 'Food & Beverages' },
          { id: 3, value: 5, label: 'Entertainment' },
          { id: 4, value: 20, label: 'Education' },
          { id: 5, value: 10, label: 'Services' },
        ],
      },
    ]}
    width={500}
    height={200}
  />
  );
}