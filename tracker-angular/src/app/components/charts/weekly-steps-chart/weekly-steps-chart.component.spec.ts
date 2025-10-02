import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyStepsChartComponent } from './weekly-steps-chart.component';

describe('WeeklyStepsChartComponent', () => {
  let component: WeeklyStepsChartComponent;
  let fixture: ComponentFixture<WeeklyStepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyStepsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyStepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
