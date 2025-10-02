import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MealsCard = () => {
  const defaultMeals = {
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
  };

  const [meals, setMeals] = useState(() => {
    return JSON.parse(localStorage.getItem('meals')) || defaultMeals;
  });

  // Update when localStorage changes
  useEffect(() => {
    const handleStorage = () => {
      setMeals(JSON.parse(localStorage.getItem('meals')) || defaultMeals);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 11h16M4 7h6M4 15h10M4 19h16" />
          </svg>
          <h3 className="font-medium">Today's Meals</h3>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
          <div key={meal} className="py-3 flex items-center justify-between">
            <span className="capitalize font-medium">{meal}</span>
            <span className="text-gray-500">
              {meals[meal] || 'Not planned yet'}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link to="/meal">
        <button className="w-full py-3  border border-slate-100 rounded-lg bg-sky-500 hover:bg-sky-600 cursor-pointer">
          Plan Meals
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MealsCard;
