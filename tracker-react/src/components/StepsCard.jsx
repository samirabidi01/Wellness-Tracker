import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StepsCard = () => {
  const stepsGoal = 10000;

  // Load saved steps + streak
  const [steps, setSteps] = useState(() => {
    return parseInt(localStorage.getItem("steps") || "0", 10);
  });
  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem("streak") || "0", 10);
  });
  const [tip, setTip] = useState("");

  const tips = [
    "🚶 Take short walking breaks every hour.",
    "🛗 Use stairs instead of elevators.",
    "🎶 Walk while listening to your favorite podcast.",
    "🏞️ Take a walk outside for fresh air.",
    "👟 Track your steps to stay motivated.",
  ];

  const stepsPct = Math.min(100, Math.round((steps / stepsGoal) * 100));

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("steps", steps);
    localStorage.setItem("streak", streak);
  }, [steps, streak]);

  // Update tip randomly
  const getRandomTip = () => {
    const newTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(newTip);
  };

  // Handle +500 steps click
  const handleAddSteps = () => {
    const newSteps = steps + 500;
    setSteps(newSteps);
    getRandomTip();

    if (newSteps >= stepsGoal) {
      toast.success("🎉 Amazing! You reached today’s step goal!");
    } else if (newSteps >= stepsGoal * 0.7) {
      toast.info("💪 Almost there! Keep moving!");
    }
  };

  // Handle daily reset and streak increment
  const handleDailyReset = () => {
    setSteps(0);
    setStreak((prev) => prev + 1);
    getRandomTip();
    toast.success(`🔥 You’ve walked ${streak + 1} days in a row. Keep it up!`);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-orange-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5v14" />
          </svg>
          <h3 className="font-medium">Steps</h3>
        </div>
        <span className="text-sm text-orange-500 font-medium">
            🔥 {streak}-day streak
          </span>
      </div>

      <div className="text-3xl font-semibold">{steps.toLocaleString()}</div>

      <div className="w-full bg-slate-100 rounded-full h-3 mt-4 overflow-hidden">
        <div
          style={{ width: `${stepsPct}%` }}
          className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
        ></div>
      </div>

      <div className="text-sm text-slate-400 mt-3">
        Goal: {stepsGoal.toLocaleString()} ({stepsPct}%)
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleAddSteps}
          className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200"
        >
          +500 steps
        </button>
        <button
          onClick={handleDailyReset}
          className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200"
        >
          Reset (Daily)
        </button>
      </div>

      {/* Random Motivational Tip */}
      <div className="mt-4 p-3 text-sm bg-orange-50 rounded-lg text-orange-700">
        💡 Tip: {tip}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default StepsCard;
