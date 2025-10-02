import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterCardComponent } from './water-card.component';

describe('WaterCardComponent', () => {
  let component: WaterCardComponent;
  let fixture: ComponentFixture<WaterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
