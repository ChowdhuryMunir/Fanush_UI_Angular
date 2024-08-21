import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PerformanceReport } from './performance-report.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceReportService {

  private url: string = `${environment.apiBaseUrl}/PerformanceReport`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllPerformanceReports(): Observable<PerformanceReport[]> {
    return this._http.get<PerformanceReport[]>(`${this.url}`);
  }

  getPerformanceReportById(id: number): Observable<PerformanceReport> {
    return this._http.get<PerformanceReport>(`${this.url}/${id}`);
  }

  createPerformanceReport(performanceReport: PerformanceReport): Observable<PerformanceReport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<PerformanceReport>(this.url, performanceReport, httpOptions);
  }

  updatePerformanceReport(id: number, performanceReport: PerformanceReport): Observable<PerformanceReport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<PerformanceReport>(`${this.url}/${id}`, performanceReport, httpOptions);
  }

  deletePerformanceReportById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
