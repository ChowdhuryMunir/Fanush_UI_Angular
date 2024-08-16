import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { EmployeeLifecycle } from './employee-lifecycle.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLifecycleService {

  private url: string = `${environment.apiBaseUrl}/EmployeeLifecycle`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllEmployeeLifecycles(): Observable<EmployeeLifecycle[]> {
    return this._http.get<EmployeeLifecycle[]>(`${this.url}`);
  }

  getEmployeeLifecycleById(id: number): Observable<EmployeeLifecycle> {
    return this._http.get<EmployeeLifecycle>(`${this.url}/${id}`);
  }

  createEmployeeLifecycle(employeeLifecycle: EmployeeLifecycle): Observable<EmployeeLifecycle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<EmployeeLifecycle>(this.url, employeeLifecycle, httpOptions);
  }

  updateEmployeeLifecycle(id: number, employeeLifecycle: EmployeeLifecycle): Observable<EmployeeLifecycle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<EmployeeLifecycle>(`${this.url}/${id}`, employeeLifecycle, httpOptions);
  }

  deleteEmployeeLifecycleById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
