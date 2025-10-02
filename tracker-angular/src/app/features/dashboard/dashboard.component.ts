import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { WaterCardComponent } from '../../shared/components/water-card/water-card.component'; 
import { SleepCardComponent } from '../../shared/components/sleep-card/sleep-card.component'; 
import { StepsCardComponent } from '../../shared/components/steps-card/steps-card.component'; 
import { MoodsCardComponent } from '../../shared/components/moods-card/moods-card.component'; 
import { MealsCardComponent } from '../../shared/components/meals-card/meals-card.component'; 
import { ExercicesCardComponent } from '../../shared/components/exercices-card/exercices-card.component'; 
import { LayoutComponent } 
@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [CommonModule,
     MatGridListModule,
     WaterCardComponent,
     SleepCardComponent,
     StepsCardComponent,
     MoodsCardComponent,
     MealsCardComponent,
     ExercicesCardComponent,
     LayoutComponent], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSmallScreen() {
    return window.innerWidth < 768;
  }
}
