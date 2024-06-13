import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../EmployeeManagement/department/department.model';
import { DepartmentServices } from '../EmployeeManagement/department/department.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  departments!: Department[];

  constructor(private departmentService: DepartmentServices) { }

  ngOnInit() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
    });
  }
}
