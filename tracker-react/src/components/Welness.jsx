import  { useState, useEffect } from "react";

// Utility: safe load from localStorage
const loadFromStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (e) {
    console.warn(`Error loading ${key} from localStorage`, e);
    return fallback;
  }
};

// Utility: save to localStorage
const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const WellnessTracker = () => {
  // Quit Smoking
  const [cigs, setCigs] = useState(() => loadFromStorage("cigs", 0));
  const [cigGoal, setCigGoal] = useState(() => loadFromStorage("cigGoal", 5));


  // Weekly Weight Loss Progress
  const [progress, setProgress] = useState(() =>
    loadFromStorage("progress", [])
  );

  // Persist all data
  useEffect(() => {
    saveToStorage("cigs", cigs);
  }, [cigs]);

  useEffect(() => {
    saveToStorage("cigGoal", cigGoal);
  }, [cigGoal]);


  useEffect(() => {
    saveToStorage("progress", progress);
  }, [progress]);


  // Add weekly weight progress
  const addWeeklyProgress = () => {
    const newEntry = {
      week: progress.length + 1,
      weightLost: (Math.random() * 2).toFixed(1),
    };
    setProgress((prev) => [...prev, newEntry]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Quit Smoking */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 shadow">
        <h2 className="text-xl font-bold text-red-700 mb-3">🚭 Quit Smoking</h2>
        <p className="text-gray-700 mb-2">
          Today: {cigs} cigarettes (Goal: {cigGoal})
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCigs((prev) => prev + 1)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            +1 Cigarette
          </button>
          <button
            onClick={() => setCigs((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            -1 Cigarette
          </button>
        </div>
        <p className="mt-3 text-sm text-red-500 italic">
          {cigs === 0
            ? "Great! Day without smoking – your lungs are already healing! 💪"
            : "Keep reducing step by step – you’re stronger than your cravings."}
        </p>
      </div>

      {/* Weekly Progress */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 shadow">
        <h2 className="text-xl font-bold text-green-700 mb-3">
          ⚖️ Weight Loss Progress
        </h2>
        <button
          onClick={addWeeklyProgress}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Add Weekly Progress
        </button>
        <ul className="mt-3 space-y-1">
          {Array.isArray(progress) && progress.length > 0 ? (
            progress.map((entry, i) => (
              <li key={i} className="text-gray-700">
                Week {entry.week}: Lost {entry.weightLost} kg 🎉
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No progress yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WellnessTracker;
