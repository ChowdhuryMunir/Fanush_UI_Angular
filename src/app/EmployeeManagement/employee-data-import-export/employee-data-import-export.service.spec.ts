import { TestBed } from '@angular/core/testing';

import { EmployeeDataImportExportService } from './employee-data-import-export.service';

describe('EmployeeDataImportExportService', () => {
  let service: EmployeeDataImportExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataImportExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
