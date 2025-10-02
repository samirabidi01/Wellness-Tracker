import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeeklyStepsChart = () => {
  const data = [
    { day: "Mon", steps: 8500 },
    { day: "Tue", steps: 12000 },
    { day: "Wed", steps: 9500 },
    { day: "Thu", steps: 11000 },
    { day: "Fri", steps: 7000 },
    { day: "Sat", steps: 14000 },
    { day: "Sun", steps: 10000 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Weekly Steps</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="steps"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 5, fill: "#10b981" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyStepsChart;
