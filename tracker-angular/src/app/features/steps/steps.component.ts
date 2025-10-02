import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsCardComponent } from '../../shared/components/steps-card/steps-card.component'; 
import { LayoutComponent } from '../../shared/components/layout/layout.component'; 
import { WeeklyStepsChartComponent } from '../../shared/charts/weekly-steps-chart/weekly-steps-chart.component'; 
@Component({
  selector: 'app-steps',
  standalone:true,
  imports: [CommonModule,StepsCardComponent,WeeklyStepsChartComponent,LayoutComponent],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {

}
