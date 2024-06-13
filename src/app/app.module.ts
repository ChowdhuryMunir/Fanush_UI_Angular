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
import { HomeComponent } from './home/home.component'; // Ensure HomeComponent is imported

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    NavigationComponent,
    HomeComponent, // Add HomeComponent to declarations
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
    HttpClientModule// Add other services here if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

