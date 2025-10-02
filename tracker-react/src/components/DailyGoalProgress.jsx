import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DailyGoalProgress = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = {
      cigGoal: parseInt(localStorage.getItem("cigGoal")) || 5,
      cigs: parseInt(localStorage.getItem("cigs")) || 0,
      exerciseHistory: JSON.parse(localStorage.getItem("exerciseHistory")) || [],
      exerciseStreak: parseInt(localStorage.getItem("exerciseStreak")) || 0,
      moodStreak: parseInt(localStorage.getItem("moodStreak")) || 0,
      meals: JSON.parse(localStorage.getItem("meals")) || {},
    };
    setData(savedData);
  }, []);

  if (!data) return <p>Loading...</p>;

  // Progress calculations
  const cigProgress = Math.max(
    0,
    ((data.cigGoal - data.cigs) / data.cigGoal) * 100
  );

  const exerciseProgress = Math.min(
    100,
    (data.exerciseStreak / 30) * 100 // 30-day challenge
  );

  const moodProgress = Math.min(
    100,
    (data.moodStreak / 7) * 100 // 7-day streak goal
  );

  const mealsLogged = Object.values(data.meals).filter(Boolean).length;
  const mealProgress = Math.min(100, (mealsLogged / 4) * 100); // 4 meals/day

  // Overall progress = average of all categories
  const totalProgress = Math.round(
    (cigProgress + exerciseProgress + moodProgress + mealProgress) / 4
  );

  const categories = [
    { label: "Cigs", value: Math.round(cigProgress), color: "#4f46e5", icon: "🚭" },
    { label: "Meals", value: Math.round(mealProgress), color: "#facc15", icon: "🍎" },
    { label: "Exercise", value: Math.round(exerciseProgress), color: "#22c55e", icon: "🏃" },
    { label: "Mood", value: Math.round(moodProgress), color: "#6366f1", icon: "😊" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Goal progress</h2>
      <p className="text-sm text-gray-500 mb-4">
        You're progressing towards your daily goals.
      </p>

      <div className="w-48 h-48 mx-auto mb-6">
        <CircularProgressbarWithChildren
          value={totalProgress}
          maxValue={100}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: "url(#gradient)",
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
          })}
        >
          <div className="text-xl font-bold">{totalProgress}%</div>
          <p className="text-xs text-gray-500 text-center">
            Of the total goal chart <br /> completed.
          </p>
        </CircularProgressbarWithChildren>

        {/* Gradient */}
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Categories */}
      <div className="flex justify-around mt-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-sm font-medium"
          >
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full mb-1"
              style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
            >
              {cat.icon}
            </div>
            <span>{cat.value}%</span>
            <span className="text-gray-500 text-xs">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyGoalProgress;
