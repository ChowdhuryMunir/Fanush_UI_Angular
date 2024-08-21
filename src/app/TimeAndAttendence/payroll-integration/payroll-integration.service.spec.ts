import { TestBed } from '@angular/core/testing';

import { PayrollIntegrationService } from './payroll-integration.service';

describe('PayrollIntegrationService', () => {
  let service: PayrollIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
