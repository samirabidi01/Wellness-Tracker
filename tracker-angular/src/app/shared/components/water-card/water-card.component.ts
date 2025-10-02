import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Achievement {
  threshold: number;
  label: string;
}

@Component({
  selector: 'app-water-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './water-card.component.html',
  styleUrls: ['./water-card.component.scss']
})
export class WaterCardComponent implements OnInit, OnDestroy {
  waterGoal = 8;
  water = 0;
  streak = 0;
  totalGlasses = 0;
  factIndex = 0;

  private reminderInterval: any;
  private factsInterval: any;

  facts: string[] = [
    '💧 Water boosts your energy.',
    '🧠 Hydration improves focus.',
    '❤️ Drinking water supports your heart.',
    '🔥 Staying hydrated helps metabolism.',
  ];

  achievements: Achievement[] = [
    { threshold: 50, label: '🥉 Beginner Sipper' },
    { threshold: 100, label: '🥈 Hydration Hero' },
    { threshold: 500, label: '🥇 Aqua Master' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.streak = parseInt(localStorage.getItem('streak') || '0', 10);
    this.totalGlasses = parseInt(localStorage.getItem('totalGlasses') || '0', 10);

    const today = new Date().toDateString();
    const savedDay = localStorage.getItem('day');
    if (savedDay !== today) {
      this.water = 0;
      localStorage.setItem('day', today);
    } else {
      this.water = parseInt(localStorage.getItem('water') || '0', 10);
    }

    this.reminderInterval = setInterval(() => {
      if (this.water < this.waterGoal) {
        this.snackBar.open('💧 Time for a glass of water!', 'Close', { duration: 3000, panelClass: ['info-snackbar'] });
      }
    }, 60 * 60 * 1000);

    this.factsInterval = setInterval(() => {
      this.factIndex = (this.factIndex + 1) % this.facts.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.reminderInterval);
    clearInterval(this.factsInterval);
  }

  get waterPct(): number {
    return Math.min(100, Math.round((this.water / this.waterGoal) * 100));
  }

  get unlockedAchievements(): Achievement[] {
    return this.achievements.filter(a => this.totalGlasses >= a.threshold);
  }

  addGlass(): void {
    if (this.water < this.waterGoal) {
      this.water++;
      this.totalGlasses++;
      localStorage.setItem('water', this.water.toString());
      localStorage.setItem('totalGlasses', this.totalGlasses.toString());

      if (this.water === this.waterGoal) {
        const today = new Date().toDateString();
        const lastDay = localStorage.getItem('lastGoalDay');
        if (lastDay !== today) {
          this.streak++;
          localStorage.setItem('streak', this.streak.toString());
          localStorage.setItem('lastGoalDay', today);
        }
        this.snackBar.open('🎉 Great job! You hit your daily hydration target.', 'Close', { duration: 3000, panelClass: ['success-snackbar'] });
      } else {
        this.snackBar.open('💧 Glass added!', 'Close', { duration: 2000, panelClass: ['success-snackbar'] });
      }
    } else {
      this.snackBar.open("🚰 You've already hit your goal today!", 'Close', { duration: 3000, panelClass: ['warn-snackbar'] });
    }
  }
}
