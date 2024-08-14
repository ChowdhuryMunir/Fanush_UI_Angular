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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import { DepartmentComponent } from './EmployeeManagement/department/department.component';
import { DepartmentServices } from './EmployeeManagement/department/department.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './EmployeeManagement/employee/employee.component';
import { EmployeeLifecycleComponent } from './EmployeeManagement/employee-lifecycle/employee-lifecycle.component';
import { JobTitleComponent } from './EmployeeManagement/job-title/job-title.component';
import { EmployeeDataImportExportComponent } from './EmployeeManagement/employee-data-import-export/employee-data-import-export.component'; // Ensure HomeComponent is imported
import { JobTitleService } from './EmployeeManagement/job-title/job-title.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    NavigationComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeLifecycleComponent,
    JobTitleComponent,
    EmployeeDataImportExportComponent, // Add HomeComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DepartmentServices,
    JobTitleService,
    HttpClientModule// Add other services here if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

