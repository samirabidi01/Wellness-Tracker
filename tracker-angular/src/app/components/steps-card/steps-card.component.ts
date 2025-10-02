import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps-card',
  standalone: true, // ✅ make standalone
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  templateUrl: './steps-card.component.html',
  styleUrls: ['./steps-card.component.scss']
})
export class StepsCardComponent implements OnInit {
  stepsGoal = 10000;
  steps: number = 0;
  streak: number = 0;
  tip: string = '';

  tips: string[] = [
    "🚶 Take short walking breaks every hour.",
    "🛗 Use stairs instead of elevators.",
    "🎶 Walk while listening to your favorite podcast.",
    "🏞️ Take a walk outside for fresh air.",
    "👟 Track your steps to stay motivated."
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.steps = parseInt(localStorage.getItem("steps") || "0", 10);
    this.streak = parseInt(localStorage.getItem("streak") || "0", 10);
  }

  get stepsPct(): number {
    return Math.min(100, Math.round((this.steps / this.stepsGoal) * 100));
  }

  private saveToStorage(): void {
    localStorage.setItem("steps", this.steps.toString());
    localStorage.setItem("streak", this.streak.toString());
  }

  private getRandomTip(): void {
    this.tip = this.tips[Math.floor(Math.random() * this.tips.length)];
  }

  handleAddSteps(): void {
    this.steps += 500;
    this.saveToStorage();
    this.getRandomTip();

    if (this.steps >= this.stepsGoal) {
      this.snackBar.open("🎉 Amazing! You reached today’s step goal!", "Close", { duration: 3000 });
    } else if (this.steps >= this.stepsGoal * 0.7) {
      this.snackBar.open("💪 Almost there! Keep moving!", "Close", { duration: 3000 });
    }
  }

  handleDailyReset(): void {
    this.steps = 0;
    this.streak += 1;
    this.saveToStorage();
    this.getRandomTip();
    this.snackBar.open(`🔥 You’ve walked ${this.streak} days in a row. Keep it up!`, "Close", { duration: 3000 });
  }
}
