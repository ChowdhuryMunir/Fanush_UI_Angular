import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AbsenceReportService } from './absence-report.service';
import { AbsenceReport } from './absence-report.model';

@Component({
  selector: 'app-absence-report',
  templateUrl: './absence-report.component.html',
  styleUrls: ['./absence-report.component.css']
})
export class AbsenceReportComponent implements OnInit {
  dataSaved = false;
  absenceReportForm: any;
  allAbsenceReports: Observable<AbsenceReport[]> = this.absenceReportService.getAllAbsenceReports();
  absenceReportIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false; // Add this property

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private absenceReportService: AbsenceReportService
  ) { }

  ngOnInit() {
    this.absenceReportForm = this.formBuilder.group({
      employeeId: [0, [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      reason: [''],
      approver: [''],
      status: [''],
      isPaid: [false],
      approvedDate: [''],
      isHalfDay: [false],
      halfDayType: ['']
    });
    this.loadAllAbsenceReports();
  }

  loadAllAbsenceReports() {
    this.allAbsenceReports = this.absenceReportService.getAllAbsenceReports();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const absenceReport = this.absenceReportForm.value;
    this.createOrUpdateAbsenceReport(absenceReport);
    this.absenceReportForm.reset();
    this.isAdding = false; // Reset isAdding when form is submitted
  }

  loadAbsenceReportToEdit(absenceReportId: number) {
    this.absenceReportService.getAbsenceReportById(absenceReportId).subscribe(absenceReport => {
      this.message = "";
      this.dataSaved = false;
      this.absenceReportIdUpdate = absenceReport.absenceReportId;
      this.absenceReportForm.patchValue(absenceReport);
      this.isAdding = true; // Set isAdding to true when editing an absence report
    });
  }

  createOrUpdateAbsenceReport(absenceReport: AbsenceReport) {
    if (this.absenceReportIdUpdate == null) {
      this.absenceReportService.createAbsenceReport(absenceReport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllAbsenceReports();
        this.absenceReportIdUpdate = null;
        this.absenceReportForm.reset();
      });
    } else {
      absenceReport.absenceReportId = this.absenceReportIdUpdate;
      this.absenceReportService.updateAbsenceReport(this.absenceReportIdUpdate, absenceReport).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllAbsenceReports();
        this.absenceReportIdUpdate = null;
        this.absenceReportForm.reset();
      });
    }
  }

  deleteAbsenceReport(id: number) {
    if (confirm("Are you sure you want to delete this absence report?")) {
      this.absenceReportService.deleteAbsenceReportById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllAbsenceReports();
        this.absenceReportIdUpdate = null;
        this.absenceReportForm.reset();
      });
    }
  }

  resetForm() {
    this.absenceReportForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false; // Reset isAdding when form is reset
  }

  startAdding() {
    this.isAdding = true; // Set isAdding to true to show form for adding
  }

  cancelAdding() {
    this.isAdding = false; // Set isAdding to false to hide form
    this.resetForm();
  }
}
