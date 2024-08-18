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
import { EnrollmentComponent } from './BenefitsAdministration/enrollment/enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    NavigationComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeLifecycleComponent,
    JobTitleComponent,
    EmployeeDataImportExportComponent,
    ApplicantComponent,
    InterviewComponent,
    JobPostingComponent,
    EnrollmentComponent,
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
    EmployeeLifecycleService,
    EmployeeDataImportExportService,
    EmployeeService,
    // Add other services here if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

