import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PayrollIntegration } from './payroll-integration.model'; // Adjust path as needed

@Injectable({
  providedIn: 'root'
})
export class PayrollIntegrationService {

  private url: string = `${environment.apiBaseUrl}/PayrollIntegration`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllPayrollIntegrations(): Observable<PayrollIntegration[]> {
    return this._http.get<PayrollIntegration[]>(`${this.url}`);
  }

  getPayrollIntegrationById(id: number): Observable<PayrollIntegration> {
    return this._http.get<PayrollIntegration>(`${this.url}/${id}`);
  }

  createPayrollIntegration(payrollIntegration: PayrollIntegration): Observable<PayrollIntegration> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<PayrollIntegration>(this.url, payrollIntegration, httpOptions);
  }

  updatePayrollIntegration(id: number, payrollIntegration: PayrollIntegration): Observable<PayrollIntegration> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<PayrollIntegration>(`${this.url}/${id}`, payrollIntegration, httpOptions);
  }

  deletePayrollIntegrationById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
