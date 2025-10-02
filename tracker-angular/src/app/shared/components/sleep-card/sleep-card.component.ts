import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sleep-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './sleep-card.component.html',
  styleUrls: ['./sleep-card.component.scss']
})
export class SleepCardComponent {
  sleepGoal = 8;
  sleep: number = 7.5;
  streak: number = 0;
  tip: string = '';

  tips: string[] = [
    "📵 Avoid screens 1h before bed for deeper sleep.",
    "🛏️ Keep a consistent bedtime routine.",
    "🌿 A cool, dark room improves sleep quality.",
    "☕ Avoid caffeine after 3pm to fall asleep faster.",
    "🚶 A short walk in the evening helps you relax before bed."
  ];

  ngOnInit(): void {
    this.rotateTip();
  }

  get sleepPct(): number {
    return Math.min(100, Math.round((this.sleep / this.sleepGoal) * 100));
  }

  private rotateTip(): void {
    this.tip = this.tips[Math.floor(Math.random() * this.tips.length)];
  }

  increaseSleep(): void {
    this.sleep = Math.min(12, +(this.sleep + 0.5).toFixed(1));
    this.rotateTip();
  }

  decreaseSleep(): void {
    this.sleep = Math.max(0, +(this.sleep - 0.5).toFixed(1));
    this.rotateTip();
  }
}
