//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }

//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { DepartmentComponent } from './EmployeeManagement/department/department.component';

//const routes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'departments', component: DepartmentComponent }
//];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './EmployeeManagement/department/department.component';
import { JobTitleComponent } from './EmployeeManagement/job-title/job-title.component';
import { EmployeeLifecycleComponent } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.component';
import { EmployeeDataImportExportComponent } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.component';
import { EmployeeComponent } from './EmployeeManagement/employee/employee.component';
import { HomeComponent }from'../app/home/home.component'
import { JobPostingComponent } from './RecruitmentManagement/job-posting/job-posting.component';


const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'job-title', component: JobTitleComponent },
  { path: 'job-posting', component: JobPostingComponent },
  { path: 'employee-lifecycle', component: EmployeeLifecycleComponent },
  { path: 'employee-data-import-export', component: EmployeeDataImportExportComponent },
  { path: 'employee', component: EmployeeComponent },
 // { path: '', redirectTo: '/employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


