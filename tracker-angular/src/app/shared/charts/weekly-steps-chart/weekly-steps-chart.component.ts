import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-weekly-steps-chart',
  imports: [ CanvasJSAngularChartsModule],
  templateUrl: './weekly-steps-chart.component.html',
  styleUrls: ['./weekly-steps-chart.component.scss']
})
export class WeeklyStepsChartComponent {
  chartOptions = {
    title: {
      text: "Weekly Steps"
    },
    theme: "light2",
    animationEnabled: false,  
    exportEnabled: true,      
    axisY: {
      includeZero: true,
      valueFormatString: "#,##0"
    },
    data: [{
      type: "line",  // change to "column", "area", "pie", etc.
      color: "#10b981",
      markerSize: 8,
      dataPoints: [
        { label: "Mon", y: 8500 },
        { label: "Tue", y: 12000 },
        { label: "Wed", y: 9500 },
        { label: "Thu", y: 11000 },
        { label: "Fri", y: 7000 },
        { label: "Sat", y: 14000 },
        { label: "Sun", y: 10000 }
      ]
    }]
  };
}
