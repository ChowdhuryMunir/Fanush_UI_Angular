import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = `${environment.apiBaseUrl}/Employee`;

  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.url);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this._http.get<Employee>(`${this.url}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Employee>(this.url, employee, httpOptions);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Employee>(`${this.url}/${id}`, employee, httpOptions);
  }

  deleteEmployee(id: number): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<Employee>(`${this.url}/${id}`, httpOptions);
  }
}
