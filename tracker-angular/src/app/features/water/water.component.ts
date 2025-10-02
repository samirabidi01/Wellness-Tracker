// water.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyWaterChartComponent } from '../../components/charts/weekly-water-chart/weekly-water-chart.component';
import { LayoutComponent } from '../../components/layout/layout.component'; 
import { WaterCardComponent } from '../../components/water-card/water-card.component';
@Component({
  selector: 'app-water',
  standalone: true,
  imports: [CommonModule,LayoutComponent,WaterCardComponent,WeeklyWaterChartComponent], 
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent {}
