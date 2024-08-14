import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../EmployeeManagement/department/department.model';
import { DepartmentServices } from '../EmployeeManagement/department/department.service';
import { JobTitleService } from '../EmployeeManagement/job-title/job-title.service';
import { JobTitle } from '../EmployeeManagement/job-title/job-title.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  departments!: Department[];
  jobTitle!: JobTitle[];

  constructor(private departmentService: DepartmentServices, private jobTitleService: JobTitleService) { }


  ngOnInit() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
    });
    this.jobTitleService.getAllJobTitles().subscribe(data => {
      this.jobTitle = data;
    });
  }
}
