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
  employeeDataImportExportForm: any;
  allEmployeeDataImportExports: Observable<EmployeeDataImportExport[]> = this.employeeDataImportExportService.getAllEmployeeDataImportExports();
  employeeDataImportExportIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private employeeDataImportExportService: EmployeeDataImportExportService
=======
    private routes: Router,
    private service: EmployeeDataImportExportService
>>>>>>> fe3d6e3420c20b229f7c243463d94aa2ba0793ba
  ) { }

  ngOnInit() {
    this.employeeDataImportExportForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
      filePath: ['', [Validators.required]],
      importExportDate: [''],
      isActive: [false]
    });
    this.loadAllEmployeeDataImportExports();
  }

  loadAllEmployeeDataImportExports() {
    this.allEmployeeDataImportExports = this.employeeDataImportExportService.getAllEmployeeDataImportExports();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const employeeDataImportExport = this.employeeDataImportExportForm.value;
    this.createOrUpdateEmployeeDataImportExport(employeeDataImportExport);
    this.employeeDataImportExportForm.reset();
    this.isAdding = false;
  }

  loadEmployeeDataImportExportToEdit(importExportId: number) {
    this.employeeDataImportExportService.getEmployeeDataImportExportById(importExportId).subscribe(employeeDataImportExport => {
      this.message = "";
      this.dataSaved = false;
      this.employeeDataImportExportIdUpdate = employeeDataImportExport.importExportId;
      this.employeeDataImportExportForm.patchValue(employeeDataImportExport);
      this.isAdding = true;
    });
  }

  createOrUpdateEmployeeDataImportExport(employeeDataImportExport: EmployeeDataImportExport) {
    if (this.employeeDataImportExportIdUpdate == null) {
      this.employeeDataImportExportService.createEmployeeDataImportExport(employeeDataImportExport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllEmployeeDataImportExports();
        this.employeeDataImportExportIdUpdate = null;
        this.employeeDataImportExportForm.reset();
      });
    } else {
      employeeDataImportExport.importExportId = this.employeeDataImportExportIdUpdate;
      this.employeeDataImportExportService.updateEmployeeDataImportExport(this.employeeDataImportExportIdUpdate, employeeDataImportExport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllEmployeeDataImportExports();
        this.employeeDataImportExportIdUpdate = null;
        this.employeeDataImportExportForm.reset();
      });
    }
  }

  deleteEmployeeDataImportExport(id: number) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.employeeDataImportExportService.deleteEmployeeDataImportExportById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllEmployeeDataImportExports();
      });
    }
  }

  startAdding() {
    this.isAdding = true;
    this.employeeDataImportExportForm.reset();
  }

  cancelAdding() {
    this.isAdding = false;
    this.employeeDataImportExportForm.reset();
  }
}
