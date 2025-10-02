import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepCardComponent } from './sleep-card.component';

describe('SleepCardComponent', () => {
  let component: SleepCardComponent;
  let fixture: ComponentFixture<SleepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
