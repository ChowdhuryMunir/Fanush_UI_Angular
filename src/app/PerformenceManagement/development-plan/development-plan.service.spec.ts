import { TestBed } from '@angular/core/testing';

import { DevelopmentPlanService } from './development-plan.service';

describe('DevelopmentPlanService', () => {
  let service: DevelopmentPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopmentPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
