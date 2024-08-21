import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollIntegrationComponent } from './payroll-integration.component';

describe('PayrollIntegrationComponent', () => {
  let component: PayrollIntegrationComponent;
  let fixture: ComponentFixture<PayrollIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollIntegrationComponent]
    });
    fixture = TestBed.createComponent(PayrollIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
