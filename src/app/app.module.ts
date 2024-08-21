//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';


//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { DepartmentComponent } from './EmployeeManagement/department/department.component';
//import { DepartmentServices} from './EmployeeManagement/department/department.service';
//import { NavigationComponent } from './navigation/navigation.component';
//import { HomeComponent } from './home/home.component'


//@NgModule({
//  declarations: [
//    AppComponent,
//    DepartmentComponent,
//    NavigationComponent,
//    HomeComponent,

//  ],
//  imports: [
//    BrowserModule,
//    AppRoutingModule,

//    FormsModule,
//    HttpClientModule,
//    ReactiveFormsModule
//  ],
//  providers: [DepartmentServices, HttpClientModule],

//  bootstrap: [AppComponent]
//})
//export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './EmployeeManagement/department/department.component';
import { DepartmentServices } from './EmployeeManagement/department/department.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './EmployeeManagement/employee/employee.component';
import { EmployeeLifecycleComponent } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.component';
import { JobTitleComponent } from './EmployeeManagement/job-title/job-title.component';
import { EmployeeDataImportExportComponent } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.component';
import { JobTitleService } from './EmployeeManagement/job-title/job-title.service';
import { AppRoutingModule } from './app-routing.module'; // Ensure the AppRoutingModule is imported
import { EmployeeLifecycleService } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.service';
import { EmployeeDataImportExportService } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.service';
import { EmployeeService } from './EmployeeManagement/employee/employee.service';
import { ApplicantComponent } from './RecruitmentManagement/applicant/applicant.component';
import { InterviewComponent } from './RecruitmentManagement/interview/interview.component';
import { JobPostingComponent } from './RecruitmentManagement/job-posting/job-posting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbsenceReportComponent } from './TimeAndAttendence/absence-report/absence-report.component';
import { AbsenceReportService } from './TimeAndAttendence/absence-report/absence-report.service';

import { ClockInOutService } from './TimeAndAttendence/clock-in-out/clock-in-out.service';
import { ClockInOutComponent } from './TimeAndAttendence/clock-in-out/clock-in-out.component';
import { LeaveService } from './TimeAndAttendence/leave/leave.service';
import { LeaveComponent } from './TimeAndAttendence/leave/leave.component';
import { OvertimeComponent } from './TimeAndAttendence/overtime/overtime.component';
import { OvertimeService } from './TimeAndAttendence/overtime/overtime.service';
import { PayrollIntegrationComponent } from './TimeAndAttendence/payroll-integration/payroll-integration.component';
import { PayrollIntegrationService } from './TimeAndAttendence/payroll-integration/payroll-integration.service';
import { InterviewService } from './RecruitmentManagement/interview/interview.service';
import { DevelopmentPlanComponent } from './PerformenceManagement/development-plan/development-plan.component';
import { GoalComponent } from './PerformenceManagement/goal/goal.component';
import { PerformanceReportComponent } from './PerformenceManagement/performance-report/performance-report.component';
import { PerformanceReviewComponent } from './PerformenceManagement/performance-review/performance-review.component';
import { DevelopmentPlanService } from './PerformenceManagement/development-plan/development-plan.service';
import { GoalService } from './PerformenceManagement/goal/goal.service';
import { PerformanceReportService } from './PerformenceManagement/performance-report/performance-report.service';
import { PerformanceReviewService } from './PerformenceManagement/performance-review/performance-review.service';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    NavigationComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeLifecycleComponent,
    JobTitleComponent,
AbsenceReportComponent,
    EmployeeDataImportExportComponent,
    ApplicantComponent,
    InterviewComponent,
    ClockInOutComponent,
    JobPostingComponent,
    LeaveComponent,
    OvertimeComponent,
    InterviewComponent,
    PayrollIntegrationComponent,
    DevelopmentPlanComponent,
    GoalComponent,
    PerformanceReportComponent,
    PerformanceReviewComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    DepartmentServices,
    JobTitleService,
    AbsenceReportService,
    ClockInOutService,
    LeaveService,
    EmployeeLifecycleService,
    EmployeeDataImportExportService,
    EmployeeService,
    OvertimeService,
    PayrollIntegrationService,
    InterviewService,
    DevelopmentPlanService,
    GoalService,
    PerformanceReportService,
    PerformanceReviewService,
    // Add other services here if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

