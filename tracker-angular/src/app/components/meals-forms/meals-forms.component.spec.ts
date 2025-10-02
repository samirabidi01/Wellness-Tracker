import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsFormsComponent } from './meals-forms.component';

describe('MealsFormsComponent', () => {
  let component: MealsFormsComponent;
  let fixture: ComponentFixture<MealsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
