import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  format,
  isToday
} from 'date-fns';

interface Mood {
  key: string;
  label: string;
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-mood-calendar',
  standalone: true,
  templateUrl: './mood-calendar.component.html',
  styleUrls: ['./mood-calendar.component.scss'],
  imports: [CommonModule, MatCardModule]
})
export class MoodCalendarComponent implements OnInit {
  moods: Mood[] = [
    { key: 'sad', label: 'Sad', emoji: '😔', color: 'blue' },
    { key: 'meh', label: 'Meh', emoji: '😐', color: 'gray' },
    { key: 'happy', label: 'Happy', emoji: '😊', color: 'yellow' },
    { key: 'excited', label: 'Excited', emoji: '🤩', color: 'orange' },
    { key: 'party', label: 'Party', emoji: '🥳', color: 'pink' },
  ];

  moodLog: Record<string, string> = {};
  days: Date[] = [];

  ngOnInit(): void {
    this.moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');

    this.days = eachDayOfInterval({
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
    });
  }

  getMoodForDay(day: Date): Mood | undefined {
    const dayKey = format(day, 'yyyy-MM-dd');
    return this.moods.find(m => m.key === this.moodLog[dayKey]);
  }

  getDayLabel(day: Date, mood?: Mood): string {
    return mood ? mood.emoji : format(day, 'd');
  }

  isToday(day: Date): boolean {
    return isToday(day);
  }

  getDayKey(day: Date): string {
    return format(day, 'yyyy-MM-dd');
  }
}
