// src/app/components/welness/welness.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface ProgressEntry {
  week: number;
  weightLost: string;
}

@Component({
  selector: 'app-welness',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './welness.component.html',
  styleUrls: ['./welness.component.scss']
})
export class WelnessComponent {
  cigs = 0;
  cigGoal = 5;
  progress: ProgressEntry[] = [];

  constructor() {
    this.cigs = this.loadFromStorage<number>('cigs', 0);
    this.cigGoal = this.loadFromStorage<number>('cigGoal', 5);
    this.progress = this.loadFromStorage<ProgressEntry[]>('progress', []);
  }

  private loadFromStorage<T>(key: string, fallback: T): T {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) as T : fallback;
  }

  private saveToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  incrementCig(): void { this.cigs++; this.saveToStorage('cigs', this.cigs); }
  decrementCig(): void { this.cigs = Math.max(0, this.cigs - 1); this.saveToStorage('cigs', this.cigs); }

  addWeeklyProgress(): void {
    const newEntry: ProgressEntry = { week: this.progress.length + 1, weightLost: (Math.random() * 2).toFixed(1) };
    this.progress.push(newEntry);
    this.saveToStorage('progress', this.progress);
  }

  setCigGoal(value: number): void { this.cigGoal = value; this.saveToStorage('cigGoal', this.cigGoal); }
}
