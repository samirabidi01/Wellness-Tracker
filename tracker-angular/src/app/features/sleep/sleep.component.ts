import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepCardComponent } from '../../shared/components/sleep-card/sleep-card.component'; 
import { WeeklySleepChartComponent } from '../../shared/charts/weekly-sleep-chart/weekly-sleep-chart.component'; 
import { LayoutComponent } from '../../shared/components/layout/layout.component'; 

@Component({
  selector: 'app-sleep',
  standalone: true,
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss'],
  imports: [
    CommonModule,
    LayoutComponent,
    SleepCardComponent,
    WeeklySleepChartComponent
  ]
})
export class SleepComponent {}
