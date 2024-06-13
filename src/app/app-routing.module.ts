//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './EmployeeManagement/department/department.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

