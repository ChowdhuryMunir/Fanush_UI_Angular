
import { Component, OnInit } from '@angular/core';
import { Department } from '../EmployeeManagement/department/department.model';
import { DepartmentServices } from '../EmployeeManagement/department/department.service';
import { JobTitleService } from '../EmployeeManagement/job-title/job-title.service';
import { JobTitle } from '../EmployeeManagement/job-title/job-title.model';
import { EmployeeService } from '../EmployeeManagement/employee/employee.service';
import { Employee } from '../EmployeeManagement/employee/employee.model';
import { EmployeeLifecycleService } from '../EmployeeManagement/employee-lifecycle/employee-lifecycle.service';
import { EmployeeLifecycle } from '../EmployeeManagement/employee-lifecycle/employee-lifecycle.model';
import { EmployeeDataImportExportService } from '../EmployeeManagement/employee-data-import-export/employee-data-import-export.service';
import { EmployeeDataImportExport } from '../EmployeeManagement/employee-data-import-export/employee-data-import-export.model';
import { JobPosting } from '../RecruitmentManagement/job-posting/job-posting.model';
import { JobPostingService } from '../RecruitmentManagement/job-posting/job-posting.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  departments!: Department[];
  jobTitles!: JobTitle[];
  jobPosting!: JobPosting[];
  employees!: Employee[];
  employeeLifecycles!: EmployeeLifecycle[];
  employeeDataImportExport!: EmployeeDataImportExport[];

  constructor(
    private departmentService: DepartmentServices,
    private jobTitleService: JobTitleService,
    private jobPostingService: JobPostingService,
    private employeeService: EmployeeService,
    private employeeLifecycleService: EmployeeLifecycleService,
    private employeeDataImportExportService: EmployeeDataImportExportService
  ) { }

  ngOnInit() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
    });

    this.jobTitleService.getAllJobTitles().subscribe(data => {
      this.jobTitles = data;
    });
    this.jobPostingService.getAllJobPostings().subscribe(data => {
      this.jobPosting = data;
    });
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });

    this.employeeLifecycleService.getAllEmployeeLifecycles().subscribe(data => {
      this.employeeLifecycles = data;
    });

    this.employeeDataImportExportService.getAllEmployeeDataImportExports().subscribe(data => {
      this.employeeDataImportExport = data;
    });

  }
  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar?.classList.toggle('active');
    content?.classList.toggle('active');
  }
}


