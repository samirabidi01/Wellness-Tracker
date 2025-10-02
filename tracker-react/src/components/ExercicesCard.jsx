import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 📌 Available quick office exercises
const exercisesList = [
  {
    name: "Neck Stretch",
    description:
      "Gently tilt your head to one side, hold for 15 seconds, then switch sides.",
    duration: 30,
    benefit: "✅ Reduced neck tension",
  },
  {
    name: "Shoulder Rolls",
    description: "Roll your shoulders forward and backward for 30 seconds.",
    duration: 30,
    benefit: "✅ Improved blood flow in shoulders",
  },
  {
    name: "Wrist Stretch",
    description: "Stretch your wrists by pulling fingers gently backward.",
    duration: 20,
    benefit: "✅ Reduced wrist strain",
  },
  {
    name: "Desk Squats",
    description: "Stand up and do 10 slow squats beside your desk.",
    duration: 40,
    benefit: "✅ Activated leg muscles",
  },
  {
    name: "Eye Relaxation",
    description: "Close your eyes and look around in circles for 20 seconds.",
    duration: 20,
    benefit: "✅ Reduced eye strain",
  },
];

const ExercicesCard = () => {
  const [currentExercise, setCurrentExercise] = useState(exercisesList[0]);
  const [exerciseStarted, setExerciseStarted] = useState(false);
  const [exerciseTime, setExerciseTime] = useState(currentExercise.duration);
  const [streak, setStreak] = useState(
    parseInt(localStorage.getItem("exerciseStreak") || "0", 10)
  );
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("exerciseHistory") || "[]");
  });

  const intervalRef = useRef(null);
  const hasCompletedRef = useRef(false); // 🛡 prevents double-completion in StrictMode

  // Persist streak
  useEffect(() => {
    localStorage.setItem("exerciseStreak", streak);
  }, [streak]);

  // Persist history
  useEffect(() => {
    localStorage.setItem("exerciseHistory", JSON.stringify(history));
  }, [history]);

  // Start exercise with timer
  const handleExerciseStart = () => {
    if (exerciseStarted) return;

    setExerciseStarted(true);
    setExerciseTime(currentExercise.duration);
    hasCompletedRef.current = false; // reset guard

    intervalRef.current = setInterval(() => {
      setExerciseTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);

          // ✅ Only complete once
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            setExerciseStarted(false);
            setStreak((prev) => prev + 1);

            const completed = {
              name: currentExercise.name,
              benefit: currentExercise.benefit,
              date: new Date().toLocaleString(),
            };

            setHistory((prev) => [...prev, completed]);

            toast.success(
              `🎉 Completed: ${currentExercise.name}! ${currentExercise.benefit}`
            );
          }

          return currentExercise.duration;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Pick a random new exercise
  const handleNextExercise = () => {
    const random = Math.floor(Math.random() * exercisesList.length);
    setCurrentExercise(exercisesList[random]);
    setExerciseTime(exercisesList[random].duration);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-5 h-5 text-rose-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20" />
          </svg>
          <h3 className="font-medium">Quick Exercise</h3>
        </div>

        {/* Current Exercise Card */}
        <div className="bg-sky-100 p-5 rounded-xl mb-4">
          <h4 className="font-semibold text-lg">{currentExercise.name}</h4>
          <p className="text-slate-600 mt-2">{currentExercise.description}</p>
          {exerciseStarted && (
            <div className="text-sm text-orange-500 font-medium">
              {exerciseTime} seconds left
            </div>
          )}
        </div>

        {/* Streak Counter */}
        <div className="text-slate-500 text-sm mb-2">
          🔥 Streak: <span className="text-sm text-orange-500 font-medium">{streak}</span> exercises
          completed
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold mb-2">📌 History</h4>
            <ul className="text-xs text-slate-500 space-y-1 max-h-28 overflow-y-auto">
              {history
                .slice(-5) // show last 5
                .reverse()
                .map((item, i) => (
                  <li key={i}>
                    {item.date} – {item.name} ({item.benefit})
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleNextExercise}
          className="flex-1 py-3 bg-sky-200 border border-slate-200 rounded-lg hover:bg-sky-50 transition cursor-pointer"
        >
          More Exercises
        </button>
        <button
          onClick={handleExerciseStart}
          disabled={exerciseStarted}
          className={`px-4 py-2 rounded font-medium ${
            exerciseStarted
              ? "bg-gray-400 text-white"
              : "bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
          } transition-colors`}
        >
          {exerciseStarted ? "In Progress..." : "Start"}
        </button>
      </div>
    </div>
  );
};

export default ExercicesCard;
