import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataImportExportComponent } from './employee-data-import-export.component';

describe('EmployeeDataImportExportComponent', () => {
  let component: EmployeeDataImportExportComponent;
  let fixture: ComponentFixture<EmployeeDataImportExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDataImportExportComponent]
    });
    fixture = TestBed.createComponent(EmployeeDataImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
