
//import { Component, OnInit } from '@angular/core';
//import { Department } from '../EmployeeManagement/department/department.model';
//import { DepartmentServices } from '../EmployeeManagement/department/department.service';
//import { JobTitleService } from '../EmployeeManagement/job-title/job-title.service';
//import { JobTitle } from '../EmployeeManagement/job-title/job-title.model';
//import { EmployeeService } from '../EmployeeManagement/employee/employee.service';
//import { Employee } from '../EmployeeManagement/employee/employee.model';
//import { EmployeeLifecycleService } from '../EmployeeManagement/employee-lifecycle/employee-lifecycle.service';
//import { EmployeeLifecycle } from '../EmployeeManagement/employee-lifecycle/employee-lifecycle.model';
//import { EmployeeDataImportExportService } from '../EmployeeManagement/employee-data-import-export/employee-data-import-export.service';
//import { EmployeeDataImportExport } from '../EmployeeManagement/employee-data-import-export/employee-data-import-export.model';
//import { JobPosting } from '../RecruitmentManagement/job-posting/job-posting.model';
//import { JobPostingService } from '../RecruitmentManagement/job-posting/job-posting.service';
//import { AbsenceReportService } from '../TimeAndAttendence/absence-report/absence-report.service';
//import { AbsenceReport } from '../TimeAndAttendence/absence-report/absence-report.model';

//import { ClockInOutService } from '../TimeAndAttendence/clock-in-out/clock-in-out.service'; // Import service
//import { LeaveService } from '../TimeAndAttendence/leave/leave.service'; // Import service
//import { OvertimeService } from '../TimeAndAttendence/overtime/overtime.service'; // Import service
//import { PayrollIntegrationService } from '../TimeAndAttendence/payroll-integration/payroll-integration.service'; // Import service


//@Component({
//  selector: 'app-navigation',
//  templateUrl: './navigation.component.html',
//  styleUrls: ['./navigation.component.css']
//})
//export class NavigationComponent implements OnInit {
//  departments!: Department[];
//  jobTitles!: JobTitle[];
//  jobPosting!: JobPosting[];
//  employees!: Employee[];
//  employeeLifecycles!: EmployeeLifecycle[];
//  employeeDataImportExport!: EmployeeDataImportExport[];
//  absenceReports!: AbsenceReport[]; // Add this property

//  constructor(
//    private departmentService: DepartmentServices,
//    private jobTitleService: JobTitleService,
//    private jobPostingService: JobPostingService,
//    private employeeService: EmployeeService,
//    private employeeLifecycleService: EmployeeLifecycleService,
//    private employeeDataImportExportService: EmployeeDataImportExportService,
//    private absenceReportService: AbsenceReportService,
//  ) { }

//  ngOnInit() {
//    this.departmentService.getAllDepartment().subscribe(data => {
//      this.departments = data;
//    });

//    this.jobTitleService.getAllJobTitles().subscribe(data => {
//      this.jobTitles = data;
//    });
//    this.jobPostingService.getAllJobPostings().subscribe(data => {
//      this.jobPosting = data;
//    });
//    this.employeeService.getAllEmployees().subscribe(data => {
//      this.employees = data;
//    });

//    this.employeeLifecycleService.getAllEmployeeLifecycles().subscribe(data => {
//      this.employeeLifecycles = data;
//    });

//    this.employeeDataImportExportService.getAllEmployeeDataImportExports().subscribe(data => {
//      this.employeeDataImportExport = data;
//    });
//    this.absenceReportService.getAllAbsenceReports().subscribe(data => { // Fetch absence reports
//      this.absenceReports = data;
//    });

//  }
//  toggleSidebar(): void {
//    const sidebar = document.getElementById('sidebar');
//    const content = document.getElementById('content');
//    sidebar?.classList.toggle('active');
//    content?.classList.toggle('active');
//  }
//}
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
import { AbsenceReportService } from '../TimeAndAttendence/absence-report/absence-report.service';
import { AbsenceReport } from '../TimeAndAttendence/absence-report/absence-report.model';
import { ClockInOutService } from '../TimeAndAttendence/clock-in-out/clock-in-out.service'; // Import service
import { ClockInOut } from '../TimeAndAttendence/clock-in-out/clock-in-out.model'
import { LeaveService } from '../TimeAndAttendence/leave/leave.service'; // Import service
import { Leave } from '../TimeAndAttendence/leave/leave.model'
import { OvertimeService } from '../TimeAndAttendence/overtime/overtime.service'; // Import service
import { PayrollIntegrationService } from '../TimeAndAttendence/payroll-integration/payroll-integration.service'; // Import service
import { Interview } from '../RecruitmentManagement/interview/interview.model';
import { InterviewService } from '../RecruitmentManagement/interview/interview.service';
import { ApplicantService } from '../RecruitmentManagement/applicant/applicant.service';
import { DevelopmentPlanService } from '../PerformenceManagement/development-plan/development-plan.service';
import { GoalService } from '../PerformenceManagement/goal/goal.service';
import { PerformanceReportService } from '../PerformenceManagement/performance-report/performance-report.service';
import { PerformanceReviewService } from '../PerformenceManagement/performance-review/performance-review.service';
import { Overtime } from '../TimeAndAttendence/overtime/overtime.model';
import { PayrollIntegration } from '../TimeAndAttendence/payroll-integration/payroll-integration.model';
import { Applicant } from '../RecruitmentManagement/applicant/applicant.model';
import { DevelopmentPlan } from '../PerformenceManagement/development-plan/development-plan.model';
import { Goal } from '../PerformenceManagement/goal/goal.model';
//add
import { PayrollCalculation  } from '../PayrollManagement/payroll-calculation/payroll-calculation.model';
import { PayrollCalculationService } from '../PayrollManagement/payroll-calculation/payroll-calculation.service';
//import { Data } from '@syncfusion/ej2-angular-grids';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  departments!: Department[];
  jobTitles!: JobTitle[];
  jobPosting!: JobPosting[];
  interview!: Interview[];
  employees!: Employee[];
  employeeLifecycles!: EmployeeLifecycle[];
  employeeDataImportExport!: EmployeeDataImportExport[];
  absenceReports!: AbsenceReport[];
  clockInOuts!: ClockInOut[]; // Add property for clock in/out data
  leaves!: Leave[]; // Add property for leave data
  overtimes!: Overtime[]; // Add property for overtime data
  payrollIntegrations!: PayrollIntegration[]; // Add property for payroll integration data

   applicantData!: Applicant[]; // Define the correct type if available
   developmentPlans!: DevelopmentPlan[]; // Define the correct type if available
   goals!: Goal[]; // Define the correct type if available
   performanceReports!: any[]; // Define the correct type if available
  performanceReviews!: any[]; // Define the correct type if available

  PayrollCalculation!: any[];
   

  constructor(
    private departmentService: DepartmentServices,
    private jobTitleService: JobTitleService,
    private jobPostingService: JobPostingService,
    private interviewService: InterviewService,
    private employeeService: EmployeeService,
    private employeeLifecycleService: EmployeeLifecycleService,
    private employeeDataImportExportService: EmployeeDataImportExportService,
    private absenceReportService: AbsenceReportService,
    private clockInOutService: ClockInOutService, // Inject service
    private leaveService: LeaveService, // Inject service
    private overtimeService: OvertimeService, // Inject service
    private payrollIntegrationService: PayrollIntegrationService, // Inject service

    private applicantService: ApplicantService, // Service for ApplicantComponent
    private developmentPlanService: DevelopmentPlanService, // Service for DevelopmentPlanComponent
    private goalService: GoalService, // Service for GoalComponent
    private performanceReportService: PerformanceReportService, // Service for PerformanceReportComponent
    private performanceReviewService: PerformanceReviewService,

    private payrollCalculationService: PayrollCalculationService


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
    this.interviewService.getAllInterviews().subscribe(data => {
      this.interview = data;
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
    this.absenceReportService.getAllAbsenceReports().subscribe(data => {
      this.absenceReports = data;
    });
    this.clockInOutService.getAllClockInOuts().subscribe(data => { // Fetch clock in/out data
      this.clockInOuts = data;
    });
    this.leaveService.getAllLeaves().subscribe(data => { // Fetch leave data
      this.leaves = data;
    });
    this.overtimeService.getAllOvertimes().subscribe(data => { // Fetch overtime data
      this.overtimes = data;
    });
    this.payrollIntegrationService.getAllPayrollIntegrations().subscribe(data => { // Fetch payroll integration data
      this.payrollIntegrations = data;
    });

   
     this.applicantService.getAllApplicants().subscribe(data => {
       this.applicantData = data;
     });
     this.developmentPlanService.getAllDevelopmentPlans().subscribe(data => {
       this.developmentPlans = data;
     });
     this.goalService.getAllGoals().subscribe(data => {
       this.goals = data;
     });
     this.performanceReportService.getAllPerformanceReports().subscribe(data => {
       this.performanceReports = data;
     });
     this.performanceReviewService.getAllPerformanceReviews().subscribe(data => {
       this.performanceReviews = data;
     });


    this.payrollCalculationService.getAllPayrollCalculations().subscribe(data => {
      this.PayrollCalculation = data
    })

  }

  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar?.classList.toggle('active');
    content?.classList.toggle('active');
  }
}

