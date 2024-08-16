
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
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeLifecycleService } from './employee-lifecycle.service';
import { EmployeeService } from '../employee/employee.service'; // Import EmployeeService
import { EmployeeLifecycle } from './employee-lifecycle.model';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-employee-lifecycle',
  templateUrl: './employee-lifecycle.component.html',
  styleUrls: ['./employee-lifecycle.component.css']
})
export class EmployeeLifecycleComponent implements OnInit {
  dataSaved = false;
  employeeLifecycleForm: any;
  allEmployeeLifecycles: Observable<EmployeeLifecycle[]> = this.employeeLifecycleService.getAllEmployeeLifecycles();
  allEmployees: Employee[] = []; // Array to store employees
  lifecycleIdUpdate: number | null = null;
  message: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeLifecycleService: EmployeeLifecycleService,
    private employeeService: EmployeeService // Inject EmployeeService
  ) { }

  ngOnInit() {
    this.employeeLifecycleForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      employeeName: [{ value: '', disabled: true }], // Disabled field for employee name
      actionType: ['', [Validators.required]],
      actionDate: ['', [Validators.required]],
      isActive: [false]
    });

    this.loadAllEmployees(); // Load all employees
    this.loadAllEmployeeLifecycles();
  }

  loadAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.allEmployees = employees;
    });
  }

  loadAllEmployeeLifecycles() {
    this.allEmployeeLifecycles = this.employeeLifecycleService.getAllEmployeeLifecycles();
  }

  onEmployeeIdChange() {
    const employeeId = this.employeeLifecycleForm.get('employeeId')?.value;
    const selectedEmployee = this.allEmployees.find(emp => emp.employeeId === employeeId);
    if (selectedEmployee) {
      const employeeName = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
      this.employeeLifecycleForm.patchValue({ employeeName });
    }
  }
  

  onFormSubmit() {
    this.dataSaved = false;
    const employeeLifecycle = this.employeeLifecycleForm.value;
   // employeeName: [{ value: '', disabled: true }], // Initialize as disabled
    this.createOrUpdateEmployeeLifecycle(employeeLifecycle);
    this.employeeLifecycleForm.reset();
  }

  loadEmployeeLifecycleToEdit(lifecycleId: number) {
    this.employeeLifecycleService.getEmployeeLifecycleById(lifecycleId).subscribe(employeeLifecycle => {
      this.message = "";
      this.dataSaved = false;
      this.lifecycleIdUpdate = employeeLifecycle.lifecycleId;
      this.employeeLifecycleForm.get('employeeId')?.setValue(employeeLifecycle.employeeId);
      this.onEmployeeIdChange(); // Automatically update the employee name when loading for editing
      this.employeeLifecycleForm.get('actionType')?.setValue(employeeLifecycle.actionType);
      this.employeeLifecycleForm.get('actionDate')?.setValue(employeeLifecycle.actionDate);
      this.employeeLifecycleForm.get('isActive')?.setValue(employeeLifecycle.isActive);
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
    if (confirm("Are You Sure To Delete This?")) {
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
}


