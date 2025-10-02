import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessComponent } from './welness.component';

describe('WelnessComponent', () => {
  let component: WelnessComponent;
  let fixture: ComponentFixture<WelnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
