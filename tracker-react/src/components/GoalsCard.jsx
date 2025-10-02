import React, { useState, useEffect } from "react";

const GoalsCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = {
      cigGoal: parseInt(localStorage.getItem("cigGoal")) || 5,
      cigs: parseInt(localStorage.getItem("cigs")) || 0,
      exerciseHistory: JSON.parse(localStorage.getItem("exerciseHistory")) || [],
      exerciseStreak: parseInt(localStorage.getItem("exerciseStreak")) || 0,
      meals: JSON.parse(localStorage.getItem("meals")) || {},
      moodLog: JSON.parse(localStorage.getItem("moodLog")) || {},
      moodStreak: parseInt(localStorage.getItem("moodStreak")) || 0,
    };
    setData(savedData);
  }, []);

  if (!data) return <p>Loading...</p>;

  // Progress calculation
  const cigProgress = Math.max(0, ((data.cigGoal - data.cigs) / data.cigGoal) * 100);
  const exerciseProgress = Math.min(100, (data.exerciseStreak / 30) * 100); // 30-day challenge
  const moodProgress = Math.min(100, (data.moodStreak / 7) * 100); // 1-week streak goal

  // Badges
  const badges = [];

  if (data.cigs === 0) badges.push("🥉 Smoke-Free Today");
  if (data.exerciseStreak >= 5) badges.push("🔥 5-Day Exercise Streak");
  if (Object.values(data.meals).some((m) => m)) badges.push("🍎 Healthy Meals Logged");
  if (data.moodStreak >= 2) badges.push("🌞 Positive Mood Streak");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Your Goals & Progress</h1>

      {/* Cigarettes */}
      <div className="mb-4">
        <h2 className="font-semibold">Cigarette Goal</h2>
        <p>{data.cigs}/{data.cigGoal} today</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: `${cigProgress}%` }} />
        </div>
      </div>

      {/* Exercise */}
      <div className="mb-4">
        <h2 className="font-semibold">Exercise Streak</h2>
        <p>{data.exerciseStreak} days</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${exerciseProgress}%` }} />
        </div>
      </div>

      {/* Mood */}
      <div className="mb-4">
        <h2 className="font-semibold">Mood Streak</h2>
        <p>{data.moodStreak} days</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-yellow-500 h-3 rounded-full" style={{ width: `${moodProgress}%` }} />
        </div>
      </div>

      {/* Badges */}
      <div className="mt-6">
        <h2 className="font-semibold">Your Badges</h2>
        <div className="flex gap-2 flex-wrap mt-2">
          {badges.length > 0 ? (
            badges.map((badge, i) => (
              <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                {badge}
              </span>
            ))
          ) : (
            <p>No badges yet — keep going!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalsCard;
