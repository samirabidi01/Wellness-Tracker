import React, { useState } from 'react';
import { eachDayOfInterval, startOfMonth, endOfMonth, format, isToday } from 'date-fns';

const MoodCalendar = () => {
  const moods = [
    { key: 'sad', label: 'Sad', emoji: '😔', color: 'bg-blue-200' },
    { key: 'meh', label: 'Meh', emoji: '😐', color: 'bg-gray-200' },
    { key: 'happy', label: 'Happy', emoji: '😊', color: 'bg-yellow-200' },
    { key: 'excited', label: 'Excited', emoji: '🤩', color: 'bg-orange-200' },
    { key: 'party', label: 'Party', emoji: '🥳', color: 'bg-pink-200' },
  ];

  const moodLog = JSON.parse(localStorage.getItem('moodLog')) || {};

  const days = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h4 className="font-medium mb-2">Mood Calendar</h4>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => {
          const dayKey = format(day, 'yyyy-MM-dd');
          const moodEntry = moods.find(m => m.key === moodLog[dayKey]);
          return (
            <div
              key={dayKey}
              className={`flex items-center justify-center h-12 w-12 rounded-md cursor-pointer ${
                moodEntry ? moodEntry.color : 'bg-gray-100'
              } ${isToday(day) ? 'ring-2 ring-sky-400' : ''}`}
              title={moodEntry ? moodEntry.label : 'No mood logged'}
            >
              {moodEntry ? moodEntry.emoji : format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodCalendar;
