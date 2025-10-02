import  { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaterCard = () => {
  const waterGoal = 8;

  // State
  const [water, setWater] = useState(0);
  const [streak, setStreak] = useState(
    () => parseInt(localStorage.getItem("streak")) || 0
  );
  const [totalGlasses, setTotalGlasses] = useState(
    () => parseInt(localStorage.getItem("totalGlasses")) || 0
  );
  const [factIndex, setFactIndex] = useState(0);

  const waterPct = Math.min(100, Math.round((water / waterGoal) * 100));

  // ✅ Load/reset daily water intake
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDay = localStorage.getItem("day");

    if (savedDay !== today) {
      setWater(0);
      localStorage.setItem("day", today);
    } else {
      setWater(parseInt(localStorage.getItem("water")) || 0);
    }
  }, []);

  // ✅ Save daily water + streak check
  useEffect(() => {
    localStorage.setItem("water", water);

    if (water === waterGoal) {
      const today = new Date().toDateString();
      const lastDay = localStorage.getItem("lastGoalDay");

      if (lastDay !== today) {
        setStreak((prev) => {
          const newStreak = prev + 1;
          localStorage.setItem("streak", newStreak);
          return newStreak;
        });
        localStorage.setItem("lastGoalDay", today);
      }

      // 🎉 Positive feedback
      toast.success("🎉 Great job! You hit your daily hydration target.", {
        position: "top-center",
      });
    }
  }, [water]);

  // ✅ Friendly reminders every hour
  useEffect(() => {
    const interval = setInterval(() => {
      if (water < waterGoal) {
        toast.info("💧 Time for a glass of water!", {
          position: "bottom-right",
        });
      }
    }, 60 * 60 * 1000); 
    return () => clearInterval(interval);
  }, [water]);

  // ✅ Rotating health facts
  const facts = [
    "💧 Water boosts your energy.",
    "🧠 Hydration improves focus.",
    "❤️ Drinking water supports your heart.",
    "🔥 Staying hydrated helps metabolism.",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Achievements
  const achievements = [
    { threshold: 50, label: "🥉 Beginner Sipper" },
    { threshold: 100, label: "🥈 Hydration Hero" },
    { threshold: 500, label: "🥇 Aqua Master" },
  ];
  const unlocked = achievements.filter((a) => totalGlasses >= a.threshold);

  // Add glass
  const addGlass = () => {
    if (water < waterGoal) {
      setWater(water + 1);
      const newTotal = totalGlasses + 1;
      setTotalGlasses(newTotal);
      localStorage.setItem("totalGlasses", newTotal);

      toast.success("💧 Glass added!", { position: "bottom-right" });
    } else {
      toast.warning("🚰 You've already hit your goal today!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Toast container */}
      <ToastContainer />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium flex gap-2 items-center">💧 Water Intake</h3>
        {streak > 0 && (
          <span className="text-sm text-orange-500 font-medium">
            🔥 {streak}-day streak
          </span>
        )}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 relative">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 36 36"
          >
            <path
              d="M18 2a16 16 0 1 0 0 32a16 16 0 1 0 0-32"
              fill="none"
              stroke="#eef2f7"
              strokeWidth="4"
            />
            <path
              d="M18 2a16 16 0 1 0 0 32a16 16 0 1 0 0-32"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${waterPct} ${100 - waterPct}`}
              strokeDashoffset="25"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-semibold">{water}</div>
            <div className="text-xs text-slate-400">/ {waterGoal}</div>
          </div>
        </div>

        <div className="flex-1">
          <button
            onClick={addGlass}
            className="px-3 py-2 bg-sky-500 text-white rounded-lg"
          >
            +
          </button>
          <div className="text-sm text-slate-400 mt-2">glasses</div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-4">
        <h4 className="font-medium text-sm text-gray-600">Achievements</h4>
        <ul className="text-sm text-gray-500">
          {unlocked.length > 0 ? (
            unlocked.map((a) => <li key={a.threshold}>{a.label}</li>)
          ) : (
            <li>No badges yet, keep sipping! 💧</li>
          )}
        </ul>
      </div>

      {/* Health Facts */}
      <p className="mt-4 text-sm text-sky-600 italic">{facts[factIndex]}</p>
    </div>
  );
};

export default WaterCard;
