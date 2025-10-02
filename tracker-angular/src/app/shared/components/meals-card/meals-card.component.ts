import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface Meals {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
}

@Component({
  selector: 'app-meals-forms',
  standalone: true,
  templateUrl: './meals-forms.component.html',
  styleUrls: ['./meals-forms.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MealsFormsComponent implements OnInit {
  meals: Meals = { breakfast: '', lunch: '', dinner: '', snacks: '' };

  mealTypes: (keyof Meals)[] = ['breakfast', 'lunch', 'dinner', 'snacks'];

  tips: Record<keyof Meals, string> = {
    breakfast: 'Start your day with protein and fiber!',
    lunch: 'Include lean protein and colorful veggies.',
    dinner: 'Keep it light and balanced for better sleep.',
    snacks: 'Choose healthy snacks like fruits or nuts.',
  };

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const savedMeals = localStorage.getItem('meals');
    if (savedMeals) {
      this.meals = JSON.parse(savedMeals);
    }
  }

  handleChange(mealType: keyof Meals, value: string): void {
    this.meals[mealType] = value;
    localStorage.setItem('meals', JSON.stringify(this.meals));
  }

  handleSave(): void {
    localStorage.setItem('meals', JSON.stringify(this.meals));
    this.snackBar.open('Meals saved successfully!', 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
