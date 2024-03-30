import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function LineGraph() {
  return (
    <LineChart
    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
    series={[
      {
        data: [20, 800, 200, 500, 2, 150],
      },
    ]}
    height={300}
    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    grid={{ vertical: true, horizontal: true }}
  />
  );
}