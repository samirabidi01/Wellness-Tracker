import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-meals-card',
  templateUrl: './meals-card.component.html',
  styleUrls: ['./meals-card.component.scss'],
  standalone: true,
  imports: [CommonModule,CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule]
})
export class MealsCardComponent implements OnInit, OnDestroy {
  defaultMeals = {
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
  };

  meals: { [key: string]: string } = { ...this.defaultMeals };
  storageListener: any;

  ngOnInit(): void {
    this.loadMeals();

    this.storageListener = () => this.loadMeals();
    window.addEventListener('storage', this.storageListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageListener);
  }

  loadMeals(): void {
    const stored = localStorage.getItem('meals');
    this.meals = stored ? JSON.parse(stored) : { ...this.defaultMeals };
  }
}
