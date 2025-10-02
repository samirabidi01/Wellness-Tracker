import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsCardComponent } from '../../components/goals-card/goals-card.component'; 
import { DailyGoalProgressComponent } from '../../components/daily-goal-progress/daily-goal-progress.component';
import { LayoutComponent } from '../../components/layout/layout.component';
@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [
    CommonModule,
    GoalsCardComponent, 
    DailyGoalProgressComponent,
    LayoutComponent
  ],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {

}
