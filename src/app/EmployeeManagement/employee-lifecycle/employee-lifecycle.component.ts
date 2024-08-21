
//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { FormBuilder, Validators } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { EmployeeLifecycleService } from './employee-lifecycle.service';
//import { EmployeeLifecycle } from './employee-lifecycle.model';

//@Component({
//  selector: 'app-employee-lifecycle',
//  templateUrl: './employee-lifecycle.component.html',
//  styleUrls: ['./employee-lifecycle.component.css']
//})
//export class EmployeeLifecycleComponent implements OnInit {
//  dataSaved = false;
//  employeeLifecycleForm: any;
//  allEmployeeLifecycles: Observable<EmployeeLifecycle[]> = this.employeeLifecycleService.getAllEmployeeLifecycles();
//  lifecycleIdUpdate: number | null = null;
//  message: string = "";

//  constructor(
//    private formBuilder: FormBuilder,
//    private router: Router,
//    private employeeLifecycleService: EmployeeLifecycleService
//  ) { }

//  ngOnInit() {
//    this.employeeLifecycleForm = this.formBuilder.group({
//      employeeId: ['', [Validators.required]],
//      actionType: ['', [Validators.required]],
//      actionDate: ['', [Validators.required]],
//      isActive: [false]
//    });
//    this.loadAllEmployeeLifecycles();
//  }

//  loadAllEmployeeLifecycles() {
//    this.allEmployeeLifecycles = this.employeeLifecycleService.getAllEmployeeLifecycles();
//  }

//  onFormSubmit() {
//    this.dataSaved = false;
//    const employeeLifecycle = this.employeeLifecycleForm.value;
//    this.createOrUpdateEmployeeLifecycle(employeeLifecycle);
//    this.employeeLifecycleForm.reset();
//  }

//  loadEmployeeLifecycleToEdit(lifecycleId: number) {
//    this.employeeLifecycleService.getEmployeeLifecycleById(lifecycleId).subscribe(employeeLifecycle => {
//      this.message = "";
//      this.dataSaved = false;
//      this.lifecycleIdUpdate = employeeLifecycle.lifecycleId;
//      this.employeeLifecycleForm.get('employeeId')?.setValue(employeeLifecycle.employeeId);
//      this.employeeLifecycleForm.get('actionType')?.setValue(employeeLifecycle.actionType);
//      this.employeeLifecycleForm.get('actionDate')?.setValue(employeeLifecycle.actionDate);
//      this.employeeLifecycleForm.get('isActive')?.setValue(employeeLifecycle.isActive);
//    });
//  }

//  createOrUpdateEmployeeLifecycle(employeeLifecycle: EmployeeLifecycle) {
//    if (this.lifecycleIdUpdate == null) {
//      this.employeeLifecycleService.createEmployeeLifecycle(employeeLifecycle).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Saved Successfully.";
//        this.loadAllEmployeeLifecycles();
//        this.lifecycleIdUpdate = null;
//        this.employeeLifecycleForm.reset();
//      });
//    } else {
//      employeeLifecycle.lifecycleId = this.lifecycleIdUpdate;
//      this.employeeLifecycleService.updateEmployeeLifecycle(this.lifecycleIdUpdate, employeeLifecycle).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Updated Successfully.";
//        this.loadAllEmployeeLifecycles();
//        this.lifecycleIdUpdate = null;
//        this.employeeLifecycleForm.reset();
//      });
//    }
//  }

//  deleteEmployeeLifecycle(id: number) {
//    if (confirm("Are You Sure To Delete This?")) {
//      this.employeeLifecycleService.deleteEmployeeLifecycleById(id).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Deleted Successfully.";
//        this.loadAllEmployeeLifecycles();
//        this.lifecycleIdUpdate = null;
//        this.employeeLifecycleForm.reset();
//      });
//    }
//  }

//  resetForm() {
//    this.employeeLifecycleForm.reset();
//    this.message = "";
//    this.dataSaved = false;
//  }
//}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeLifecycleService } from './employee-lifecycle.service';
import { EmployeeLifecycle } from './employee-lifecycle.model';

@Component({
  selector: 'app-employee-lifecycle',
  templateUrl: './employee-lifecycle.component.html',
  styleUrls: ['./employee-lifecycle.component.css']
})
export class EmployeeLifecycleComponent implements OnInit {
  dataSaved = false;
  employeeLifecycleForm: any;
  allEmployeeLifecycles: Observable<EmployeeLifecycle[]> = this.employeeLifecycleService.getAllEmployeeLifecycles();
  lifecycleIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeLifecycleService: EmployeeLifecycleService
  ) { }

  ngOnInit() {
    this.employeeLifecycleForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      actionType: ['', [Validators.required]],
      actionDate: ['', [Validators.required]],
      isActive: [false]
    });
    this.loadAllEmployeeLifecycles();
  }

  loadAllEmployeeLifecycles() {
    this.allEmployeeLifecycles = this.employeeLifecycleService.getAllEmployeeLifecycles();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const employeeLifecycle = this.employeeLifecycleForm.value;
    this.createOrUpdateEmployeeLifecycle(employeeLifecycle);
    this.employeeLifecycleForm.reset();
    this.isAdding = false;
  }

  loadEmployeeLifecycleToEdit(lifecycleId: number) {
    this.employeeLifecycleService.getEmployeeLifecycleById(lifecycleId).subscribe(employeeLifecycle => {
      this.message = "";
      this.dataSaved = false;
      this.lifecycleIdUpdate = employeeLifecycle.lifecycleId;
      this.employeeLifecycleForm.patchValue(employeeLifecycle);
      this.isAdding = true;
    });
  }

  createOrUpdateEmployeeLifecycle(employeeLifecycle: EmployeeLifecycle) {
    if (this.lifecycleIdUpdate == null) {
      this.employeeLifecycleService.createEmployeeLifecycle(employeeLifecycle).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllEmployeeLifecycles();
        this.lifecycleIdUpdate = null;
        this.employeeLifecycleForm.reset();
      });
    } else {
      employeeLifecycle.lifecycleId = this.lifecycleIdUpdate;
      this.employeeLifecycleService.updateEmployeeLifecycle(this.lifecycleIdUpdate, employeeLifecycle).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllEmployeeLifecycles();
        this.lifecycleIdUpdate = null;
        this.employeeLifecycleForm.reset();
      });
    }
  }

  deleteEmployeeLifecycle(id: number) {
    if (confirm("Are you sure you want to delete this employee lifecycle?")) {
      this.employeeLifecycleService.deleteEmployeeLifecycleById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllEmployeeLifecycles();
        this.lifecycleIdUpdate = null;
        this.employeeLifecycleForm.reset();
      });
    }
  }

  resetForm() {
    this.employeeLifecycleForm.reset();
    this.message = "";
    this.dataSaved = false;
  }

  startAdding() {
    this.isAdding = true;
    this.resetForm();
  }

  cancelAdding() {
    this.isAdding = false;
    this.resetForm();
  }
}



