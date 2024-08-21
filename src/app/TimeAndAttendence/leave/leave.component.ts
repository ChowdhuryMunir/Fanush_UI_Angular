import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LeaveService } from './leave.service';
import { Leave } from './leave.model';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  dataSaved = false;
  leaveForm: any;
  allLeaves: Observable<Leave[]> = this.leaveService.getAllLeaves();
  leaveIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false; // Add this property

  constructor(
    private formBuilder: FormBuilder,
    private leaveService: LeaveService
  ) { }

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      leaveType: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      status: ['Pending'],
      reason: [''],
      requestedBy: [''],
      approvalDate: [''],
      approver: [''],
      approvalComments: [''],
      isActive: [false],
      isPaidLeave: [false],
      leaveCategory: ['']
    });
    this.loadAllLeaves();
  }

  loadAllLeaves() {
    this.allLeaves = this.leaveService.getAllLeaves();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const leave = this.leaveForm.value;
    this.createOrUpdateLeave(leave);
    this.leaveForm.reset();
    this.isAdding = false; // Reset isAdding when form is submitted
  }

  loadLeaveToEdit(leaveId: number) {
    this.leaveService.getLeaveById(leaveId).subscribe(leave => {
      this.message = "";
      this.dataSaved = false;
      this.leaveIdUpdate = leave.leaveId;
      this.leaveForm.patchValue(leave);
      this.isAdding = true; // Set isAdding to true when editing a leave
    });
  }

  createOrUpdateLeave(leave: Leave) {
    if (this.leaveIdUpdate == null) {
      this.leaveService.createLeave(leave).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllLeaves();
        this.leaveIdUpdate = null;
        this.leaveForm.reset();
      });
    } else {
      leave.leaveId = this.leaveIdUpdate;
      this.leaveService.updateLeave(this.leaveIdUpdate, leave).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllLeaves();
        this.leaveIdUpdate = null;
        this.leaveForm.reset();
      });
    }
  }

  deleteLeave(id: number) {
    if (confirm("Are you sure you want to delete this leave record?")) {
      this.leaveService.deleteLeaveById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllLeaves();
        this.leaveIdUpdate = null;
        this.leaveForm.reset();
      });
    }
  }

  resetForm() {
    this.leaveForm.reset();
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
