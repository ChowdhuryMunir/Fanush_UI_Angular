import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerformanceReportService } from './performance-report.service';
import { PerformanceReport } from './performance-report.model';

@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.component.html',
  styleUrls: ['./performance-report.component.css']
})
export class PerformanceReportComponent implements OnInit {
  dataSaved = false;
  performanceReportForm: any;
  allPerformanceReports: Observable<PerformanceReport[]> = this.performanceReportService.getAllPerformanceReports();
  performanceReportIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private performanceReportService: PerformanceReportService
  ) { }

  ngOnInit() {
    this.performanceReportForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      evaluatorId: ['', [Validators.required]],
      evaluationDate: ['', [Validators.required]],
      performanceScore: [''],
      goalsMet: [''],
      strengths: ['', [Validators.required]],
      areasForImprovement: ['', [Validators.required]],
      achievements: [''],
      developmentPlan: [''],
      comments: [''],
      overallRating: [''],
      reviewPeriodStart: [''],
      reviewPeriodEnd: [''],
      status: ['', [Validators.required]],
      actionItems: ['']
    });
    this.loadAllPerformanceReports();
  }

  loadAllPerformanceReports() {
    this.allPerformanceReports = this.performanceReportService.getAllPerformanceReports();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const performanceReport = this.performanceReportForm.value;
    this.createOrUpdatePerformanceReport(performanceReport);
    this.performanceReportForm.reset();
    this.isAdding = false;
  }

  loadPerformanceReportToEdit(performanceReportId: number) {
    this.performanceReportService.getPerformanceReportById(performanceReportId).subscribe(report => {
      this.message = "";
      this.dataSaved = false;
      this.performanceReportIdUpdate = report.performanceReportId;
      this.performanceReportForm.patchValue(report);
      this.isAdding = true;
    });
  }

  createOrUpdatePerformanceReport(report: PerformanceReport) {
    if (this.performanceReportIdUpdate == null) {
      this.performanceReportService.createPerformanceReport(report).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllPerformanceReports();
        this.performanceReportIdUpdate = null;
        this.performanceReportForm.reset();
      });
    } else {
      report.performanceReportId = this.performanceReportIdUpdate;
      this.performanceReportService.updatePerformanceReport(this.performanceReportIdUpdate, report).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllPerformanceReports();
        this.performanceReportIdUpdate = null;
        this.performanceReportForm.reset();
      });
    }
  }

  deletePerformanceReport(id: number) {
    if (confirm("Are you sure you want to delete this performance report?")) {
      this.performanceReportService.deletePerformanceReportById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllPerformanceReports();
        this.performanceReportIdUpdate = null;
        this.performanceReportForm.reset();
      });
    }
  }

  startAdding() {
    this.isAdding = true;
    this.performanceReportForm.reset();
    this.performanceReportIdUpdate = null;
  }

  cancelAdding() {
    this.isAdding = false;
    this.performanceReportForm.reset();
  }

  resetForm() {
    this.performanceReportForm.reset();
    this.message = "";
    this.dataSaved = false;
  }
}
