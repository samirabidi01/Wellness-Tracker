import React, { useState, useEffect } from "react";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SleepCard = () => {
  const sleepGoal = 8;
  const tips = [
    "📵 Avoid screens 1h before bed for deeper sleep.",
    "🛏️ Keep a consistent bedtime routine.",
    "🌿 A cool, dark room improves sleep quality.",
    "☕ Avoid caffeine after 3pm to fall asleep faster.",
    "🚶 A short walk in the evening helps you relax before bed.",
  ];

  const [sleep, setSleep] = useState(() => {
    const saved = localStorage.getItem("sleepHours");
    return saved ? JSON.parse(saved) : 7.5;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("sleepStreak");
    return saved ? JSON.parse(saved) : 0;
  });

  const [tip, setTip] = useState("");

  const sleepPct = Math.min(100, Math.round((sleep / sleepGoal) * 100));

  // rotate tip on mount
  useEffect(() => {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, [sleep]);

  // save sleep + streak in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("sleepHours", JSON.stringify(sleep));
    localStorage.setItem("sleepStreak", JSON.stringify(streak));
  }, [sleep, streak]);

  // handle streak + notifications
  useEffect(() => {
    if (sleep === sleepGoal) {
      setStreak((prev) => prev + 1);
      toast.success(`🎉 Perfect! You hit your ${sleepGoal}h goal!`);
    } else if (sleep >= 7 && sleep <= 9) {
      setStreak((prev) => prev + 1);
      toast.info("😴 Great! You're within the healthy sleep range.");
    } else {
      setStreak(0);
      toast.warn("⚠️ Try aiming for 7–9 hours to recharge better.");
    }
  }, [sleep]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ToastContainer />
        
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-emerald-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
          <h3 className="font-medium">Sleep</h3>
        </div>
        <span className="text-sm text-orange-500 font-medium">
            🔥 {streak}-day streak
          </span>
      </div>

      {/* Sleep amount */}
      <div className="text-3xl font-semibold">
        {sleep}h{" "}
        <span className="text-sm text-slate-400">Last night</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-3 mt-4 overflow-hidden">
        <div
          style={{ width: `${sleepPct}%` }}
          className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
        ></div>
      </div>

      {/* Status */}
      <div className="text-sm text-slate-500 mt-3">
        Goal: {sleepGoal}h ({sleepPct}%) <br />
        {sleep >= 7 && sleep <= 9
          ? "✅ You're in the healthy range!"
          : "⚠️ Try to aim for 7–9h."}
      </div>

      {/* Controls */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() =>
            setSleep((prev) => Math.min(12, +(prev + 0.5).toFixed(1)))
          }
          className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200"
        >
          +0.5h
        </button>
        <button
          onClick={() =>
            setSleep((prev) => Math.max(0, +(prev - 0.5).toFixed(1)))
          }
          className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200"
        >
          -0.5h
        </button>
      </div>

      {/* Rotating tip */}
      <div className="mt-4 p-3 text-sm bg-emerald-50 rounded-lg text-emerald-700">
        💡 Tip: {tip}
      </div>
    </div>
  );
};

export default SleepCard;
