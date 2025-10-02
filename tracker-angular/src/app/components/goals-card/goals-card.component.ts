import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-goals-card',
  standalone: true, // <- mark as standalone
  imports: [
    CommonModule,       // for *ngIf, *ngFor
    MatCardModule,      // for <mat-card>
    MatProgressBarModule // for <mat-progress-bar>
  ],
  templateUrl: './goals-card.component.html',
  styleUrls: ['./goals-card.component.scss']
})
export class GoalsCardComponent implements OnInit {
  data: any = null;
  badges: string[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.data = {
      cigGoal: parseInt(localStorage.getItem('cigGoal') || '5', 10),
      cigs: parseInt(localStorage.getItem('cigs') || '0', 10),
      exerciseHistory: JSON.parse(localStorage.getItem('exerciseHistory') || '[]'),
      exerciseStreak: parseInt(localStorage.getItem('exerciseStreak') || '0', 10),
      meals: JSON.parse(localStorage.getItem('meals') || '{}'),
      moodLog: JSON.parse(localStorage.getItem('moodLog') || '{}'),
      moodStreak: parseInt(localStorage.getItem('moodStreak') || '0', 10),
    };
    this.calculateBadges();
  }

  get cigProgress(): number {
    return Math.max(0, ((this.data.cigGoal - this.data.cigs) / this.data.cigGoal) * 100);
  }

  get exerciseProgress(): number {
    return Math.min(100, (this.data.exerciseStreak / 30) * 100);
  }

  get moodProgress(): number {
    return Math.min(100, (this.data.moodStreak / 7) * 100);
  }

  calculateBadges(): void {
    this.badges = [];
    if (this.data.cigs === 0) this.badges.push('🥉 Smoke-Free Today');
    if (this.data.exerciseStreak >= 5) this.badges.push('🔥 5-Day Exercise Streak');
    if (Object.values(this.data.meals).some((m: any) => m)) this.badges.push('🍎 Healthy Meals Logged');
    if (this.data.moodStreak >= 2) this.badges.push('🌞 Positive Mood Streak');
  }
}
