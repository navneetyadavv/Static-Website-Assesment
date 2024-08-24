import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { name: 'Apr', sales2021: 50, sales2020: 70 },
  { name: 'May', sales2021: 70, sales2020: 90 },
  { name: 'Jun', sales2021: 550, sales2020: 100 },
  { name: 'Jul', sales2021: 250, sales2020: 190 },
  { name: 'Aug', sales2021: 150, sales2020: 400 },
  { name: 'Sep', sales2021: 440, sales2020: 300 },
  { name: 'Oct', sales2021: 270, sales2020: 160 },
  { name: 'Nov', sales2021: 290, sales2020: 470 },
  { name: 'Dec', sales2021: 490, sales2020: 500 },
];

const SalesOverviewChart = () => {
  return (
    <div className="w-full h-[20rem]">
      <h2 className="text-xl font-semibold mb-2">Sales overview</h2>
      <p className="text-sm text-gray-500 mb-6">4% more in 2021</p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGradient2021" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF00FF" stopOpacity={0.8} />
              <stop offset="70%" stopColor="#FF00FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGradient2020" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000080" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#000080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" style={{ fontSize: '12px' }} />
          <YAxis style={{ fontSize: '12px' }} />
          <Tooltip />
          <Area
            type="basis"
            dataKey="sales2020"
            stroke="#000080"
            fillOpacity={1}
            fill="url(#colorGradient2020)"
            strokeWidth={2}
            animationDuration={2000}
          />
          <Area
            type="basis"
            dataKey="sales2021"
            stroke="#FF00FF"
            fillOpacity={1}
            fill="url(#colorGradient2021)"
            strokeWidth={3}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewChart;
