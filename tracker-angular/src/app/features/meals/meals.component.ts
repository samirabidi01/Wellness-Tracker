// meals.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsCardComponent } from '../../components/meals-card/meals-card.component'; 
import { MealsFormsComponent } from '../../components/meals-forms/meals-forms.component';
import { LayoutComponent } from '../../components/layout/layout.component';
@Component({
  selector: 'app-meals',
  standalone: true, // ✅ standalone
  imports: [CommonModule, MealsCardComponent,MealsFormsComponent,LayoutComponent], 
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {}
