import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const WeeklyWaterChart = () => {
  // Example data (replace with your state or API)
  const data = [
    { day: "Mon", glasses: 6 },
    { day: "Tue", glasses: 8 },
    { day: "Wed", glasses: 5 },
    { day: "Thu", glasses: 7 },
    { day: "Fri", glasses: 9 },
    { day: "Sat", glasses: 4 },
    { day: "Sun", glasses: 10 },
  ];

  const dailyGoal = 8; // glasses per day

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Weekly Water Intake
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            {/* Goal line */}
            <ReferenceLine y={dailyGoal} stroke="#34d399" strokeDasharray="3 3" label="Goal" />
            {/* Bars */}
            <Bar dataKey="glasses" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Daily goal: {dailyGoal} glasses 💧
      </p>
    </div>
  );
};

export default WeeklyWaterChart;
