import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { OvertimeService } from './overtime.service';
import { Overtime } from './overtime.model';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.css']
})
export class OvertimeComponent implements OnInit {
  dataSaved = false;
  overtimeForm: any;
  allOvertimes: Observable<Overtime[]> = this.overtimeService.getAllOvertimes();
  overtimeIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false; // Add this property

  constructor(
    private formBuilder: FormBuilder, private router: Router,
    private overtimeService: OvertimeService
  ) { }

  ngOnInit() {
    this.overtimeForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      isActive: [false],
      overtimeType: [''],
      approvalStatus: [''],
      approvedBy: [''],
      approvalDate: [''],
      reason: [''],
      attachmentUrl: [''],
      createdDate: [''],
      lastModifiedDate: [''],
      createdBy: [''],
      lastModifiedBy: [''],
      department: [''],
      project: ['']
    });
    this.loadAllOvertimes();
  }

  loadAllOvertimes() {
    this.allOvertimes = this.overtimeService.getAllOvertimes();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const overtime = this.overtimeForm.value;
    this.createOrUpdateOvertime(overtime);
    this.overtimeForm.reset();
    this.isAdding = false; // Reset isAdding when form is submitted
  }

  loadOvertimeToEdit(overtimeId: number) {
    this.overtimeService.getOvertimeById(overtimeId).subscribe(overtime => {
      this.message = "";
      this.dataSaved = false;
      this.overtimeIdUpdate = overtime.overtimeId;
      this.overtimeForm.patchValue(overtime);
      this.isAdding = true; // Set isAdding to true when editing an overtime record
    });
  }

  createOrUpdateOvertime(overtime: Overtime) {
    if (this.overtimeIdUpdate == null) {
      this.overtimeService.createOvertime(overtime).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllOvertimes();
        this.overtimeIdUpdate = null;
        this.overtimeForm.reset();
      });
    } else {
      overtime.overtimeId = this.overtimeIdUpdate;
      this.overtimeService.updateOvertime(this.overtimeIdUpdate, overtime).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllOvertimes();
        this.overtimeIdUpdate = null;
        this.overtimeForm.reset();
      });
    }
  }

  deleteOvertime(id: number) {
    if (confirm("Are you sure you want to delete this overtime record?")) {
      this.overtimeService.deleteOvertimeById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllOvertimes();
        this.overtimeIdUpdate = null;
        this.overtimeForm.reset();
      });
    }
  }

  resetForm() {
    this.overtimeForm.reset();
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
