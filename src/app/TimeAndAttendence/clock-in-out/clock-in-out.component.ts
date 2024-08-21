import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClockInOutService } from './clock-in-out.service';
import { ClockInOut } from './clock-in-out.model';

@Component({
  selector: 'app-clock-in-out',
  templateUrl: './clock-in-out.component.html',
  styleUrls: ['./clock-in-out.component.css']
})
export class ClockInOutComponent implements OnInit {
  dataSaved = false;
  clockInOutForm: any;
  allClockInOuts: Observable<ClockInOut[]> = this.clockInOutService.getAllClockInOuts();
  clockInOutIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clockInOutService: ClockInOutService
  ) { }

  ngOnInit() {
    this.clockInOutForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      timestamp: [''],
      action: ['', [Validators.required]],
      location: [''],
      notes: [''],
      clockInTime: [''],
      clockOutTime: [''],
      isLateArrival: [false],
      isEarlyDeparture: [false],
      isWorkday: [true],
      overtimeHours: [0],
      isOvertime: [false],
      approvedBy: [''],
      isActive: [false],
      lateArrivalReason: [''],
      earlyDepartureReason: ['']
    });
    this.loadAllClockInOuts();
  }

  loadAllClockInOuts() {
    this.allClockInOuts = this.clockInOutService.getAllClockInOuts();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const clockInOut = this.clockInOutForm.value;
    this.createOrUpdateClockInOut(clockInOut);
    this.clockInOutForm.reset();
    this.isAdding = false;
  }

  loadClockInOutToEdit(clockInOutId: number) {
    this.clockInOutService.getClockInOutById(clockInOutId).subscribe(clockInOut => {
      this.message = "";
      this.dataSaved = false;
      this.clockInOutIdUpdate = clockInOut.clockInOutId;
      this.clockInOutForm.patchValue(clockInOut);
      this.isAdding = true;
    });
  }

  createOrUpdateClockInOut(clockInOut: ClockInOut) {
    if (this.clockInOutIdUpdate == null) {
      this.clockInOutService.createClockInOut(clockInOut).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllClockInOuts();
        this.clockInOutIdUpdate = null;
        this.clockInOutForm.reset();
      });
    } else {
      clockInOut.clockInOutId = this.clockInOutIdUpdate;
      this.clockInOutService.updateClockInOut(this.clockInOutIdUpdate, clockInOut).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllClockInOuts();
        this.clockInOutIdUpdate = null;
        this.clockInOutForm.reset();
      });
    }
  }

  deleteClockInOut(id: number) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.clockInOutService.deleteClockInOutById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllClockInOuts();
        this.clockInOutIdUpdate = null;
        this.clockInOutForm.reset();
      });
    }
  }

  resetForm() {
    this.clockInOutForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
  }

  cancelAdding() {
    this.isAdding = false;
    this.resetForm();
  }
}
