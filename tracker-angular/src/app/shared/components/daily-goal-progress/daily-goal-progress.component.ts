import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // for *ngFor, *ngIf, ngStyle
import { MatCardModule } from '@angular/material/card';

interface Category {
  label: string;
  value: number;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-daily-goal-progress',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './daily-goal-progress.component.html',
  styleUrls: ['./daily-goal-progress.component.scss']
})
export class DailyGoalProgressComponent implements OnInit {
  data: any = null;
  totalProgress = 0;
  categories: Category[] = [];

  ngOnInit(): void {
    const savedData = {
      cigGoal: parseInt(localStorage.getItem('cigGoal') || '5', 10),
      cigs: parseInt(localStorage.getItem('cigs') || '0', 10),
      exerciseHistory: JSON.parse(localStorage.getItem('exerciseHistory') || '[]'),
      exerciseStreak: parseInt(localStorage.getItem('exerciseStreak') || '0', 10),
      moodStreak: parseInt(localStorage.getItem('moodStreak') || '0', 10),
      meals: JSON.parse(localStorage.getItem('meals') || '{}')
    };
    this.data = savedData;
    this.calculateProgress();
  }

  calculateProgress(): void {
    if (!this.data) return;

    const cigProgress = Math.max(0, ((this.data.cigGoal - this.data.cigs) / this.data.cigGoal) * 100);
    const exerciseProgress = Math.min(100, (this.data.exerciseStreak / 30) * 100);
    const moodProgress = Math.min(100, (this.data.moodStreak / 7) * 100);
    const mealsLogged = Object.values(this.data.meals).filter(Boolean).length;
    const mealProgress = Math.min(100, (mealsLogged / 4) * 100);

    this.totalProgress = Math.round((cigProgress + exerciseProgress + moodProgress + mealProgress) / 4);

    this.categories = [
      { label: 'Cigs', value: Math.round(cigProgress), color: '#4f46e5', icon: '🚭' },
      { label: 'Meals', value: Math.round(mealProgress), color: '#facc15', icon: '🍎' },
      { label: 'Exercise', value: Math.round(exerciseProgress), color: '#22c55e', icon: '🏃' },
      { label: 'Mood', value: Math.round(moodProgress), color: '#6366f1', icon: '😊' },
    ];
  }
}
