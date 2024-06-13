import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServices {

  url: string = environment.apiBaseUrl

  constructor(private _http: HttpClient) { }

  getAllDepartment(): Observable<Department[]> {
    return this._http.get<Department[]>(this.url + '/Department/GetDepartments');
  }

  getDepartmentById(id: any): Observable<any> {
    return this._http.get<Department[]>(this.url + '/Department/GetDepartment/' + id);
  }

  createDepartment(Department: Department): Observable<Department> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Department>(this.url + '/Department/InsertDept/', Department, httpOptions);
  }

  updateDepartment(id: any, Department: Department): Observable<Department> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Department>(this.url + '/Department/UpdateDept/' + id, Department, httpOptions);
  }

  deleteDepartmentById(id: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/Department/DeleteDept/' + id, httpOptions);
  }
}


