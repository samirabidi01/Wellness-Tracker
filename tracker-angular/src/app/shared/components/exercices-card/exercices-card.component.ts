// src/app/components/exercices-card/exercices-card.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface Exercise {
  name: string;
  description: string;
  duration: number;
  benefit: string;
}

@Component({
  selector: 'app-exercices-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './exercices-card.component.html',
  styleUrls: ['./exercices-card.component.scss']
})
export class ExercicesCardComponent {
  exercisesList: Exercise[] = [
    { name: 'Neck Stretch', description: 'Gently tilt your head to one side, hold for 15 seconds, then switch sides.', duration: 30, benefit: '✅ Reduced neck tension' },
    { name: 'Shoulder Rolls', description: 'Roll your shoulders forward and backward for 30 seconds.', duration: 30, benefit: '✅ Improved blood flow in shoulders' },
    { name: 'Wrist Stretch', description: 'Stretch your wrists by pulling fingers gently backward.', duration: 20, benefit: '✅ Reduced wrist strain' },
    { name: 'Desk Squats', description: 'Stand up and do 10 slow squats beside your desk.', duration: 40, benefit: '✅ Activated leg muscles' },
    { name: 'Eye Relaxation', description: 'Close your eyes and look around in circles for 20 seconds.', duration: 20, benefit: '✅ Reduced eye strain' }
  ];

  currentExercise: Exercise = this.exercisesList[0];
  exerciseStarted = false;
  exerciseTime = this.currentExercise.duration;
  streak = parseInt(localStorage.getItem('exerciseStreak') || '0', 10);
  history: any[] = JSON.parse(localStorage.getItem('exerciseHistory') || '[]');
  private intervalId: any = null;
  private hasCompleted = false;

  constructor(private snackBar: MatSnackBar) {}

  startExercise(): void {
    if (this.exerciseStarted) return;
    this.exerciseStarted = true;
    this.exerciseTime = this.currentExercise.duration;
    this.hasCompleted = false;

    this.intervalId = setInterval(() => {
      if (this.exerciseTime <= 1) {
        clearInterval(this.intervalId);
        this.intervalId = null;

        if (!this.hasCompleted) {
          this.hasCompleted = true;
          this.exerciseStarted = false;
          this.streak++;
          localStorage.setItem('exerciseStreak', this.streak.toString());

          const completed = {
            name: this.currentExercise.name,
            benefit: this.currentExercise.benefit,
            date: new Date().toLocaleString(),
          };

          this.history.push(completed);
          localStorage.setItem('exerciseHistory', JSON.stringify(this.history));

          this.snackBar.open(`🎉 Completed: ${this.currentExercise.name}! ${this.currentExercise.benefit}`, 'Close', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
        }

        this.exerciseTime = this.currentExercise.duration;
      } else {
        this.exerciseTime--;
      }
    }, 1000);
  }

  nextExercise(): void {
    const random = Math.floor(Math.random() * this.exercisesList.length);
    this.currentExercise = this.exercisesList[random];
    this.exerciseTime = this.currentExercise.duration;
  }
}
