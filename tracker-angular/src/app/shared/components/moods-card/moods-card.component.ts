import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { format } from 'date-fns';

interface Mood {
  key: string;
  label: string;
  emoji: string;
  color: string;
  message: string;
}

@Component({
  selector: 'app-moods-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './moods-card.component.html',
  styleUrls: ['./moods-card.component.scss']
})
export class MoodsCardComponent implements OnInit {
  moods: Mood[] = [
    { key: 'sad', label: 'Sad', emoji: '😔', color: 'blue', message: 'It’s okay to feel sad 💙' },
    { key: 'meh', label: 'Meh', emoji: '😐', color: 'gray', message: 'Stay steady 🌱' },
    { key: 'happy', label: 'Happy', emoji: '😊', color: 'yellow', message: 'Keep smiling 😄' },
    { key: 'excited', label: 'Excited', emoji: '🤩', color: 'orange', message: 'Your energy is contagious ✨' },
    { key: 'party', label: 'Party', emoji: '🥳', color: 'pink', message: 'Celebrate and enjoy 🎉' },
  ];

  todayKey = format(new Date(), 'yyyy-MM-dd');
  mood: string = 'happy';
  journal: string = '';
  streak: number = 0;
  moodLog: Record<string, string> = {};

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.mood = localStorage.getItem('todayMood') || 'happy';
    this.journal = localStorage.getItem('todayJournal') || '';
    this.streak = parseInt(localStorage.getItem('moodStreak') || '0', 10);
    this.moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');
  }

  get currentMood(): Mood | undefined {
    return this.moods.find(m => m.key === this.mood);
  }

  handleMoodClick(key: string) {
    this.mood = key;
    localStorage.setItem('todayMood', key);

    if (['happy', 'excited', 'party'].includes(key)) {
      this.streak++;
      localStorage.setItem('moodStreak', this.streak.toString());
    } else {
      this.streak = 0;
      localStorage.setItem('moodStreak', '0');
    }

    this.moodLog[this.todayKey] = key;
    localStorage.setItem('moodLog', JSON.stringify(this.moodLog));

    const moodObj = this.moods.find(m => m.key === key);
    if (moodObj) {
      this.snackBar.open(moodObj.message, 'OK', { duration: 3000 });
    }
  }

  handleJournalChange(value: string) {
    this.journal = value;
    localStorage.setItem('todayJournal', value);
  }
}
