import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-weekly-water-chart',
  imports:[CanvasJSAngularChartsModule],
  templateUrl: './weekly-water-chart.component.html',
  styleUrls: ['./weekly-water-chart.component.scss']
})
export class WeeklyWaterChartComponent {
  dailyGoal = 8;

  chartOptions = {
    title: {
      text: "Weekly Water Intake"
    },
    theme: "light2",
    animationEnabled: false, // ⛔ no animations
    exportEnabled: true,
    axisY: {
      includeZero: true,
      title: "Glasses",
      interval: 2
    },
    data: [{
      type: "column",   // ✅ Column chart
      color: "#3b82f6", // Tailwind blue-500
      yValueFormatString: "#,##0",
      dataPoints: [
        { label: "Mon", y: 6 },
        { label: "Tue", y: 8 },
        { label: "Wed", y: 5 },
        { label: "Thu", y: 7 },
        { label: "Fri", y: 9 },
        { label: "Sat", y: 4 },
        { label: "Sun", y: 10 }
      ]
    }]
  };
}
