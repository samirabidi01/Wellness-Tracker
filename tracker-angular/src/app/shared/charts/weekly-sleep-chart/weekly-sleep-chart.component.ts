import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-weekly-sleep-chart',
  imports: [ CanvasJSAngularChartsModule],
  templateUrl: './weekly-sleep-chart.component.html',
  styleUrls: ['./weekly-sleep-chart.component.scss']
})
export class WeeklySleepChartComponent {
  minRecommended = 7;
  maxRecommended = 9;

  chartOptions = {
    title: {
      text: "Weekly Sleep Hours"
    },
    theme: "light2",
    animationEnabled: false, // ⛔ no animation
    exportEnabled: true,
    axisY: {
      includeZero: true,
      title: "Hours",
      interval: 1,
      suffix: "h"
    },
    data: [{
      type: "column",  // ✅ column chart
      color: "#42A5F5", // blue by default
      yValueFormatString: "#h",
      dataPoints: [
        { label: "Mon", y: 6 },
        { label: "Tue", y: 7 },
        { label: "Wed", y: 8 },
        { label: "Thu", y: 5 },
        { label: "Fri", y: 9 },
        { label: "Sat", y: 7 },
        { label: "Sun", y: 8 }
      ]
    }]
  };
}
