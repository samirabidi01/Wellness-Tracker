import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodsCardComponent } from './moods-card.component';

describe('MoodsCardComponent', () => {
  let component: MoodsCardComponent;
  let fixture: ComponentFixture<MoodsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
