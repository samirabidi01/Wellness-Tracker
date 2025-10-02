import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySleepChartComponent } from './weekly-sleep-chart.component';

describe('WeeklySleepChartComponent', () => {
  let component: WeeklySleepChartComponent;
  let fixture: ComponentFixture<WeeklySleepChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklySleepChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySleepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
