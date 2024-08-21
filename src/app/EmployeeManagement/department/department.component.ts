import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DepartmentServices } from '../department/department.service';
import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dataSaved = false;
  departmentForm: any;
  allDepartments: Observable<Department[]> = this.departmentService.getAllDepartment();
  departmentIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentServices
  ) { }

  ngOnInit() {
    this.departmentForm = this.formBuilder.group({
      departmentName: ['', [Validators.required]],
      isActive: [false]
    });
    this.loadAllDepartments();
  }

  loadAllDepartments() {
    this.allDepartments = this.departmentService.getAllDepartment();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const department = this.departmentForm.value;
    this.createOrUpdateDepartment(department);
    this.departmentForm.reset();
    this.isAdding = false;
  }

  loadDepartmentToEdit(departmentId: number) {
    this.departmentService.getDepartmentById(departmentId).subscribe(department => {
      this.message = "";
      this.dataSaved = false;
      this.departmentIdUpdate = department.departmentId;
      this.departmentForm.patchValue(department);
      this.isAdding = true;
    });
  }

  createOrUpdateDepartment(department: Department) {
    if (this.departmentIdUpdate == null) {
      this.departmentService.createDepartment(department).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllDepartments();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();
      });
    } else {
      department.departmentId = this.departmentIdUpdate;
      this.departmentService.updateDepartment(this.departmentIdUpdate, department).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllDepartments();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();
      });
    }
  }

  deleteDepartment(departmentId: number) {
    if (confirm("Are you sure you want to delete this department?")) {
      this.departmentService.deleteDepartmentById(departmentId.toString()).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllDepartments();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();
      });
    }
  }

  resetForm() {
    this.departmentForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
  }

  cancelAdding() {
    this.isAdding = false;
    this.departmentForm.reset();
  }
}
