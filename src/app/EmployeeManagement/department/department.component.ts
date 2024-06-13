import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentServices } from './department.service';
import { from, Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dataSaved = false;
  departmentForm: any;

  allDepartment: Observable<any> = this.departmentService.getAllDepartment();
  // allCategory: Observable<Category[]>;
  // allCategory!: Observable<Category[]>;
  // allCategory:any;

  departmentIdUpdate = null;
  message = "";

  constructor(private formBuilder: FormBuilder, private routes: Router,
    private departmentService: DepartmentServices) { }

  ngOnInit() {
    this.departmentForm = this.formBuilder.group({
      departmentName: ['', [Validators.required]],
      isActive: [false],
      books: [''] // Add this line to include the books control
    });
    this.loadAllDepartment();
  }

  loadAllDepartment() {
    this.allDepartment = this.departmentService.getAllDepartment();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const department = this.departmentForm.value;
    this.createDepartment(department);
    this.departmentForm.reset();
  }

  loadDepartmentToEdit(departmentId: any) {
    this.departmentService.getDepartmentById(departmentId).subscribe(department => {
      this.message = "";
      this.dataSaved = false;
      this.departmentIdUpdate = department.departmentId;
      this.departmentForm.get('departmentName').setValue(department['departmentName']);
      this.departmentForm.get('isActive').setValue(department['isActive']);
    }); 
  }

  createDepartment(department: Department) {
    if (this.departmentIdUpdate == null) {
      this.departmentService.createDepartment(department).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllDepartment();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();
      }
      )
    }
    else {
      department.departmentId = this.departmentIdUpdate;
      this.departmentService.updateDepartment(this.departmentIdUpdate, department).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Update Successfully.";
        this.loadAllDepartment();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();

      });
    }
  }


  deleteDepartment(id: string) {
    if (confirm("Are You Sure To Delete This?")) {
      this.departmentService.deleteDepartmentById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllDepartment();
        this.departmentIdUpdate = null;
        this.departmentForm.reset();
      })
    }
  }

  resetForm() {
    this.departmentForm.reset();
    this.message = "";
    this.dataSaved = false;
  }

}
