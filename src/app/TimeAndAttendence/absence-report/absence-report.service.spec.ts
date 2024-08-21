import { TestBed } from '@angular/core/testing';

import { AbsenceReportService } from './absence-report.service';

describe('AbsenceReportService', () => {
  let service: AbsenceReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsenceReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
