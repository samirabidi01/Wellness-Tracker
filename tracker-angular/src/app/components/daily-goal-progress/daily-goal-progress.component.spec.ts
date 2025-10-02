import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGoalProgressComponent } from './daily-goal-progress.component';

describe('DailyGoalProgressComponent', () => {
  let component: DailyGoalProgressComponent;
  let fixture: ComponentFixture<DailyGoalProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyGoalProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyGoalProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
