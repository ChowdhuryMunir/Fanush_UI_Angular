import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSaved = false;
  employeeForm: any;
  allEmployees: Observable<Employee[]> = this.employeeService.getAllEmployees();
  employeeIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      presentAddress: [''],
      permanentAddress: [''],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nationalId: [''],
      passportNumber: [''],
      dateOfJoining: ['', [Validators.required]],
      jobTitleId: [0, [Validators.required]],
      departmentId: [0, [Validators.required]],
      emergencyContactNumber: [''],
      fathersName: [''],
      mothersName: [''],
      bloodGroup: [''],
      religion: [''],
      maritalStatus: [''],
      nationality: [''],
      profileImagePath: [''],
      isActive: [false]
    });
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployees();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    if (this.employeeIdUpdate == null) {
      this.createEmployee(employee);
    } else {
      this.updateEmployee(this.employeeIdUpdate, employee);
    }
    this.employeeForm.reset();
  }

  createEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe(() => {
      this.dataSaved = true;
      this.message = 'Employee record saved successfully!';
      this.loadAllEmployees();
      this.employeeIdUpdate = null;
      this.employeeForm.reset();
    });
  }

  updateEmployee(employeeId: number, employee: Employee) {
    this.employeeService.updateEmployee(employeeId, employee).subscribe(() => {
      this.dataSaved = true;
      this.message = 'Employee record updated successfully!';
      this.loadAllEmployees();
      this.employeeIdUpdate = null;
      this.employeeForm.reset();
    });
  }

  loadEmployeeToEdit(employeeId: number) {
    this.employeeService.getEmployeeById(employeeId).subscribe(employee => {
      this.message = "";
      this.dataSaved = false;
      this.employeeIdUpdate = employee.employeeId;
      this.employeeForm.patchValue(employee);
      this.isAdding = true;
    });
  }

  deleteEmployee(employeeId: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Employee record deleted successfully!';
        this.loadAllEmployees();
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
      });
    }
  }

  resetForm() {
    this.employeeForm.reset();
    this.message = "";
    this.dataSaved = false;
  }

  startAdding() {
    this.isAdding = true;
    this.employeeForm.reset();
  }

  cancelAdding() {
    this.isAdding = false;
    this.employeeIdUpdate = null;
    this.employeeForm.reset();
  }
}

