
import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'ring5', value: 85, fill: '#888888' },
  { name: 'ring4', value: 75, fill: '#777777' },
  { name: 'ring3', value: 60, fill: '#666666' },
  { name: 'ring2', value: 45, fill: '#555555' },
  { name: 'ring1', value: 25, fill: '#444444' },
];

const AnalyticsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="25%"
        outerRadius="100%"
        data={chartData}
        startAngle={90}
        endAngle={-270}
        barSize={10}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background={{ fill: 'rgba(255,255,255,0.05)' }}
          dataKey="value"
          angleAxisId={0}
          cornerRadius={5}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
