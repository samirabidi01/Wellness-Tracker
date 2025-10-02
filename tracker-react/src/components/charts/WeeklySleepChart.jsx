import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const WeeklySleepChart = () => {
  // Example data (replace with real state or API)
  const data = [
    { day: "Mon", hours: 6 },
    { day: "Tue", hours: 7 },
    { day: "Wed", hours: 8 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 9 },
    { day: "Sat", hours: 7 },
    { day: "Sun", hours: 8 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Weekly Sleep Hours
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />

            {/* Recommended range (7–9 hours) */}
            <ReferenceLine y={7} stroke="#10b981" strokeDasharray="3 3" label="Min" />
            <ReferenceLine y={9} stroke="#ef4444" strokeDasharray="3 3" label="Max" />

            <Bar dataKey="hours" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Recommended: 7–9 hours of sleep per night 💤
      </p>
    </div>
  );
};

export default WeeklySleepChart;
