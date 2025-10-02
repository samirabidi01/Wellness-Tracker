import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { WaterCardComponent } from '../../components/water-card/water-card.component';
import { SleepCardComponent } from '../../components/sleep-card/sleep-card.component';
import { StepsCardComponent } from '../../components/steps-card/steps-card.component';
import { MoodsCardComponent } from '../../components/moods-card/moods-card.component';
import { MealsCardComponent } from '../../components/meals-card/meals-card.component';
import { ExercicesCardComponent } from '../../components/exercices-card/exercices-card.component';
import { LayoutComponent } from '../../components/layout/layout.component';
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
