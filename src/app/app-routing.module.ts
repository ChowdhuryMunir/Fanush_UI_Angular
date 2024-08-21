
//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { DepartmentComponent } from './EmployeeManagement/department/department.component';
//import { JobTitleComponent } from './EmployeeManagement/job-title/job-title.component';
//import { EmployeeLifecycleComponent } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.component';
//import { EmployeeDataImportExportComponent } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.component';
//import { EmployeeComponent } from './EmployeeManagement/employee/employee.component';
//import { HomeComponent }from'../app/home/home.component'
//import { JobPostingComponent } from './RecruitmentManagement/job-posting/job-posting.component';
//import { AbsenceReportComponent } from './TimeAndAttendence/absence-report/absence-report.component';

//import { ClockInOutComponent } from './TimeAndAttendence/clock-in-out/clock-in-out.component';
//import { LeaveComponent } from './TimeAndAttendence/leave/leave.component';
//import { OvertimeComponent } from './TimeAndAttendence/overtime/overtime.component';
//import { PayrollIntegrationComponent } from './TimeAndAttendence/payroll-integration/payroll-integration.component';
//import { InterviewComponent } from './RecruitmentManagement/interview/interview.component';



//const routes: Routes = [
//  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
//  { path: 'HomePage', component: HomeComponent },
//  { path: 'department', component: DepartmentComponent },
//  { path: 'job-title', component: JobTitleComponent },
//  { path: 'job-posting', component: JobPostingComponent },
//  { path: 'interview', component: InterviewComponent, },

//  { path: 'absence-report', component: AbsenceReportComponent },
//  { path: 'employee-lifecycle', component: EmployeeLifecycleComponent },
//  { path: 'employee-data-import-export', component: EmployeeDataImportExportComponent },
//  { path: 'employee', component: EmployeeComponent },
//  { path: 'clock-in-out', component: ClockInOutComponent },
//  { path: 'leave', component: LeaveComponent },
//  { path: 'overtime', component: OvertimeComponent },
//  { path: 'payroll-integration', component: PayrollIntegrationComponent },
// // { path: '', redirectTo: '/employee', pathMatch: 'full' },
//];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Existing Imports
import { DepartmentComponent } from './EmployeeManagement/department/department.component';
import { JobTitleComponent } from './EmployeeManagement/job-title/job-title.component';
import { EmployeeLifecycleComponent } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.component';
import { EmployeeDataImportExportComponent } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.component';
import { EmployeeComponent } from './EmployeeManagement/employee/employee.component';
import { HomeComponent } from '../app/home/home.component';
import { JobPostingComponent } from './RecruitmentManagement/job-posting/job-posting.component';
import { InterviewComponent } from './RecruitmentManagement/interview/interview.component';
import { AbsenceReportComponent } from './TimeAndAttendence/absence-report/absence-report.component';
import { ClockInOutComponent } from './TimeAndAttendence/clock-in-out/clock-in-out.component';
import { LeaveComponent } from './TimeAndAttendence/leave/leave.component';
import { OvertimeComponent } from './TimeAndAttendence/overtime/overtime.component';
import { PayrollIntegrationComponent } from './TimeAndAttendence/payroll-integration/payroll-integration.component';

// New Imports
import { ApplicantComponent } from './RecruitmentManagement/applicant/applicant.component';
import { DevelopmentPlanComponent } from './PerformenceManagement/development-plan/development-plan.component';
import { GoalComponent } from './PerformenceManagement/goal/goal.component';
import { PerformanceReportComponent } from './PerformenceManagement/performance-report/performance-report.component';
import { PerformanceReviewComponent } from './PerformenceManagement/performance-review/performance-review.component';
import { PayrollCalculationComponent } from './PayrollManagement/payroll-calculation/payroll-calculation.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'job-title', component: JobTitleComponent },
  { path: 'job-posting', component: JobPostingComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'absence-report', component: AbsenceReportComponent },
  { path: 'employee-lifecycle', component: EmployeeLifecycleComponent },
  { path: 'employee-data-import-export', component: EmployeeDataImportExportComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'clock-in-out', component: ClockInOutComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'overtime', component: OvertimeComponent },
  { path: 'payroll-integration', component: PayrollIntegrationComponent },

  // New Routes
  { path: 'development-plan', component: DevelopmentPlanComponent },
  { path: 'goal', component: GoalComponent },
  { path: 'performance-report', component: PerformanceReportComponent },
  { path: 'performance-review', component: PerformanceReviewComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'payroll-calculation', component: PayrollCalculationComponent },

  // Fallback route for undefined paths
  { path: '**', redirectTo: '/HomePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
