import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { JobTitleService } from '../job-title/job-title.service'; // Add import
import { DepartmentServices } from '../department/department.service'; // Add import

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: any;
  allEmployees: Observable<Employee[]> = this.employeeService.getAllEmployees();
  allJobTitles: any[] = []; // Add this line
  allDepartments: any[] = []; // Add this line
  employeeIdUpdate: number | null = null;
  message = "";
  isEditMode = false;


  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private employeeService: EmployeeService,
    private jobTitleService: JobTitleService, // Add this line
    private departmentService: DepartmentServices // Add this line
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadAllEmployees();
    this.getJobTitles(); // Add this line
    this.getDepartments(); // Add this line
  }

  initializeForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nationalId: ['', Validators.required],
      passportNumber: [''],
      dateOfJoining: ['', Validators.required],
      jobTitleId: ['', Validators.required],
      departmentId: ['', Validators.required],
      emergencyContactNumber: [''],
      fathersName: [''],
      mothersName: [''],
      bloodGroup: [''],
      religion: [''],
      maritalStatus: [''],
      nationality: [''],
      profileImagePath: [''],
      extraActivities: [''],
      isActive: [true]
    });
  }

  loadAllEmployees() {
      this.allEmployees = this.employeeService.getAllEmployees();
    }

  getJobTitles(): void {
    this.jobTitleService.getAllJobTitles().subscribe(
      jobTitles => this.allJobTitles = jobTitles,
      error => console.error('Error fetching job titles', error)
    );
  }

  getDepartments(): void {
    this.departmentService.getAllDepartment().subscribe(
      departments => this.allDepartments = departments,
      error => console.error('Error fetching departments', error)
    );
  }

  //onFormSubmit(): void {

  //  if (this.employeeForm.valid) {
  //    if (this.isEditMode) {
  //      this.employeeService.updateEmployee(this.employeeForm.value.employeeId, this.employeeForm.value).subscribe(
  //        () => this.message = 'Employee updated successfully',
  //        error => console.error('Error updating employee', error)
  //      );
  //    } else {
  //      this.employeeService.createEmployee(this.employeeForm.value).subscribe(
  //        () => this.message = 'Employee created successfully',
  //        error => console.error('Error creating employee', error)
  //      );
  //    }
  //  }
  //}
  onFormSubmit(): void {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;

      if (this.isEditMode && this.employeeIdUpdate !== null) {
        // Update existing employee
        this.employeeService.updateEmployee(this.employeeIdUpdate, employee).subscribe(
          () => {
            this.message = 'Employee updated successfully';
            this.loadAllEmployees();
            this.resetForm();
          },
          error => {
            this.message = 'Error updating employee';
            console.error('Error updating employee:', error);
          }
        );
      } else {
        // Create new employee
        this.employeeService.createEmployee(employee).subscribe(
          () => {
            this.message = 'Employee created successfully';
            this.loadAllEmployees();
            this.resetForm();
          },
          error => {
            this.message = 'Error creating employee';
            console.error('Error creating employee:', error);
          }
        );
      }
    }
  }


  resetForm(): void {
    this.employeeForm.reset();
    this.isEditMode = false;
    this.employeeIdUpdate = null;
  }

  loadEmployeeToEdit(employeeId: number): void {
    this.employeeService.getEmployeeById(employeeId).subscribe(
      employee => {
        this.employeeForm.patchValue(employee);
        this.isEditMode = true;
      },
      error => console.error('Error loading employee', error)
    );
  }

  createOrUpdateEmployee(employee: Employee): void {
    if (this.employeeIdUpdate === null) {
      // Create new employee
      this.employeeService.createEmployee(employee).subscribe(
        () => {
          this.message = "Record Created Successfully.";
          this.loadAllEmployees();
          this.employeeForm.reset();
          this.isEditMode = false;
        },
        error => {
          this.message = "Error creating employee.";
          console.error("Error creating employee:", error);
        }
      );
    } else {
      // Update existing employee
      employee.employeeId = this.employeeIdUpdate;
      this.employeeService.updateEmployee(this.employeeIdUpdate, employee).subscribe(
        () => {
          this.message = "Record Updated Successfully.";
          this.loadAllEmployees();
          this.employeeIdUpdate = null;
          this.employeeForm.reset();
          this.isEditMode = false;
        },
        error => {
          this.message = "Error updating employee.";
          console.error("Error updating employee:", error);
        }
      );
    }
  }



  deleteEmployeeById(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => this.message = 'Employee deleted successfully',
      error => console.error('Error deleting employee', error)
    );
  }
}
