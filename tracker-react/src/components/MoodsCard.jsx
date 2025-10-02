import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

const MoodsCard = () => {
  const moods = [
    { key: 'sad', label: 'Sad', emoji: '😔', color: 'bg-blue-200', message: 'It’s okay to feel sad 💙' },
    { key: 'meh', label: 'Meh', emoji: '😐', color: 'bg-gray-200', message: 'Stay steady 🌱' },
    { key: 'happy', label: 'Happy', emoji: '😊', color: 'bg-yellow-200', message: 'Keep smiling 😄' },
    { key: 'excited', label: 'Excited', emoji: '🤩', color: 'bg-orange-200', message: 'Your energy is contagious ✨' },
    { key: 'party', label: 'Party', emoji: '🥳', color: 'bg-pink-200', message: 'Celebrate and enjoy 🎉' },
  ];

  const todayKey = format(new Date(), 'yyyy-MM-dd');
  const [mood, setMood] = useState(() => localStorage.getItem('todayMood') || 'happy');
  const [journal, setJournal] = useState(() => localStorage.getItem('todayJournal') || '');
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('moodStreak')) || 0);
  const [moodLog, setMoodLog] = useState(() => JSON.parse(localStorage.getItem('moodLog')) || {});

  const handleMoodClick = (key) => {
    setMood(key);
    localStorage.setItem('todayMood', key);

    if (['happy', 'excited', 'party'].includes(key)) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('moodStreak', newStreak);
    } else {
      setStreak(0);
      localStorage.setItem('moodStreak', 0);
    }

    const newLog = { ...moodLog, [todayKey]: key };
    setMoodLog(newLog);
    localStorage.setItem('moodLog', JSON.stringify(newLog));

    const moodObj = moods.find(m => m.key === key);
    toast.info(moodObj.message, { position: 'top-center', autoClose: 3000 });
  };

  const handleJournalChange = (e) => {
    setJournal(e.target.value);
    localStorage.setItem('todayJournal', e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col items-center mb-4">
        <h3 className="font-medium mb-2">Mood Today</h3>
        <div className="text-6xl mb-2">{moods.find(m => m.key === mood)?.emoji}</div>
        <div className="text-lg font-medium mb-4">{moods.find(m => m.key === mood)?.label}</div>

        <div className="flex gap-3 mb-4">
          {moods.map(m => (
            <button
              key={m.key}
              onClick={() => handleMoodClick(m.key)}
              className={`p-2 rounded-full text-lg transition-all ${m.key === mood ? 'ring-2 ring-sky-300 scale-110' : 'opacity-70 hover:scale-105'}`}
            >
              {m.emoji}
            </button>
          ))}
        </div>

        <textarea
          value={journal}
          onChange={handleJournalChange}
          placeholder="Write a quick note..."
          className="w-full p-2 border border-gray-300 rounded-md mb-3 resize-none"
          rows={2}
        />

        <div className="text-sm text-gray-500">
          Current Happy Streak: <span className="text-sm text-orange-500 font-medium">
            🔥 {streak}-days
          </span>
        </div>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default MoodsCard
