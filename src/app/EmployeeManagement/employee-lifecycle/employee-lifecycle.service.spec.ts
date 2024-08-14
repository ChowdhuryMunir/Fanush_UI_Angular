import { TestBed } from '@angular/core/testing';

import { EmployeeLifecycleService } from './employee-lifecycle.service';

describe('EmployeeLifecycleService', () => {
  let service: EmployeeLifecycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeLifecycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
