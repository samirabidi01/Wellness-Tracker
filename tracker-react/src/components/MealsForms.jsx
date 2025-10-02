import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MealsForms = () => {
  const defaultMeals = {
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
  };

  const [meals, setMeals] = useState(() => {
    return JSON.parse(localStorage.getItem('meals')) || defaultMeals;
  });

  const [tips] = useState({
    breakfast: 'Start your day with protein and fiber!',
    lunch: 'Include lean protein and colorful veggies.',
    dinner: 'Keep it light and balanced for better sleep.',
    snacks: 'Choose healthy snacks like fruits or nuts.',
  });

  const handleChange = (mealType, value) => {
    const updatedMeals = { ...meals, [mealType]: value };
    setMeals(updatedMeals);
    localStorage.setItem('meals', JSON.stringify(updatedMeals));
  };

  const handleSave = () => {
    localStorage.setItem('meals', JSON.stringify(meals));
    toast.success('Meals saved successfully!', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md p-6">
      <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
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
        Add Your Meals
      </h3>

      <div className="space-y-4">
        {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
          <div key={meal} className="flex flex-col">
            <label className="font-medium capitalize">{meal}</label>
            <input
              type="text"
              placeholder={`Enter your ${meal}`}
              value={meals[meal]}
              onChange={(e) => handleChange(meal, e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            {meals[meal] && (
              <p className="text-sm text-gray-500 mt-1">{tips[meal]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
      >
        Save Meals
      </button>

      <ToastContainer />
    </div>
  );
};

export default MealsForms;
