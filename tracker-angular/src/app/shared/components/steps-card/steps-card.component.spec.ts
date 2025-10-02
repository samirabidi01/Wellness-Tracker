import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsCardComponent } from './steps-card.component';

describe('StepsCardComponent', () => {
  let component: StepsCardComponent;
  let fixture: ComponentFixture<StepsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
