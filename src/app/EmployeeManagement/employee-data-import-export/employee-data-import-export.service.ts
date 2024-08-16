import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { EmployeeDataImportExport } from './employee-data-import-export.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataImportExportService {

  private url: string = `${environment.apiBaseUrl}/EmployeeDataImportExport`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllEmployeeDataImportExports(): Observable<EmployeeDataImportExport[]> {
    return this._http.get<EmployeeDataImportExport[]>(`${this.url}`);
  }

  getEmployeeDataImportExportById(id: number): Observable<EmployeeDataImportExport> {
    return this._http.get<EmployeeDataImportExport>(`${this.url}/${id}`);
  }

  createEmployeeDataImportExport(employeeDataImportExport: EmployeeDataImportExport): Observable<EmployeeDataImportExport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<EmployeeDataImportExport>(this.url, employeeDataImportExport, httpOptions);
  }

  updateEmployeeDataImportExport(id: number, employeeDataImportExport: EmployeeDataImportExport): Observable<EmployeeDataImportExport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<EmployeeDataImportExport>(`${this.url}/${id}`, employeeDataImportExport, httpOptions);
  }

  deleteEmployeeDataImportExportById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
