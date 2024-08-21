import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPlanComponent } from './DevelopmentPlanComponent';

describe('DevelopmentPlanComponent', () => {
  let component: DevelopmentPlanComponent;
  let fixture: ComponentFixture<DevelopmentPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopmentPlanComponent]
    });
    fixture = TestBed.createComponent(DevelopmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
