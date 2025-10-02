import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWaterChartComponent } from './weekly-water-chart.component';

describe('WeeklyWaterChartComponent', () => {
  let component: WeeklyWaterChartComponent;
  let fixture: ComponentFixture<WeeklyWaterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyWaterChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyWaterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
