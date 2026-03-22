"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Card from './card';

// 1. Move this OUTSIDE the component so it's globally accessible
const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

export default function MyPieChart() {
  return (
    <Card className="h-94 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                // Using modulo (%) ensures we never go out of bounds of the array
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}