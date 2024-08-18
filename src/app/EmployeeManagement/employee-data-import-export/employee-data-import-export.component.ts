import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeDataImportExportService } from './employee-data-import-export.service';
import { EmployeeDataImportExport } from './employee-data-import-export.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-data-import-export',
  templateUrl: './employee-data-import-export.component.html',
  styleUrls: ['./employee-data-import-export.component.css']
})
export class EmployeeDataImportExportComponent implements OnInit {
  dataSaved = false;
  dataImportExportForm: any;
  allEmployeeDataImportExports: Observable<EmployeeDataImportExport[]> = this.service.getAllEmployeeDataImportExports();
  importExportIdUpdate: number | null = null;
  message: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private routes: Router,
    private service: EmployeeDataImportExportService
  ) { }

  ngOnInit() {
    this.dataImportExportForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
      filePath: ['', [Validators.required]],
      importExportDate: ['', [Validators.required]],
      isActive: [false]
    });
    this.loadAllEmployeeDataImportExports();
  }

  loadAllEmployeeDataImportExports() {
    this.allEmployeeDataImportExports = this.service.getAllEmployeeDataImportExports();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const dataImportExport = this.dataImportExportForm.value;
    this.createOrUpdateDataImportExport(dataImportExport);
    this.dataImportExportForm.reset();
  }

  loadDataImportExportToEdit(importExportId: number) {
    this.service.getEmployeeDataImportExportById(importExportId).subscribe(dataImportExport => {
      this.message = "";
      this.dataSaved = false;
      this.importExportIdUpdate = dataImportExport.importExportId;
      this.dataImportExportForm.get('type')?.setValue(dataImportExport.type);
      this.dataImportExportForm.get('fileName')?.setValue(dataImportExport.fileName);
      this.dataImportExportForm.get('filePath')?.setValue(dataImportExport.filePath);
      this.dataImportExportForm.get('importExportDate')?.setValue(dataImportExport.importExportDate);
      this.dataImportExportForm.get('isActive')?.setValue(dataImportExport.isActive);
    });
  }

  createOrUpdateDataImportExport(dataImportExport: EmployeeDataImportExport) {
    if (this.importExportIdUpdate == null) {
      this.service.createEmployeeDataImportExport(dataImportExport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllEmployeeDataImportExports();
        this.importExportIdUpdate = null;
        this.dataImportExportForm.reset();
      });
    } else {
      dataImportExport.importExportId = this.importExportIdUpdate;
      this.service.updateEmployeeDataImportExport(this.importExportIdUpdate, dataImportExport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllEmployeeDataImportExports();
        this.importExportIdUpdate = null;
        this.dataImportExportForm.reset();
      });
    }
  }

  deleteDataImportExport(id: number) {
    if (confirm("Are You Sure To Delete This?")) {
      this.service.deleteEmployeeDataImportExportById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllEmployeeDataImportExports();
        this.importExportIdUpdate = null;
        this.dataImportExportForm.reset();
      });
    }
  }

  resetForm() {
    this.dataImportExportForm.reset();
    this.message = "";
    this.dataSaved = false;
  }
}
