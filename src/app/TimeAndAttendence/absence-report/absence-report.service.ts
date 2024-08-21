import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AbsenceReport } from './absence-report.model'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class AbsenceReportService {

  private url: string = `${environment.apiBaseUrl}/AbsenceReport`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllAbsenceReports(): Observable<AbsenceReport[]> {
    return this._http.get<AbsenceReport[]>(`${this.url}`);
  }

  getAbsenceReportById(id: number): Observable<AbsenceReport> {
    return this._http.get<AbsenceReport>(`${this.url}/${id}`);
  }

  createAbsenceReport(absenceReport: AbsenceReport): Observable<AbsenceReport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<AbsenceReport>(this.url, absenceReport, httpOptions);
  }

  updateAbsenceReport(id: number, absenceReport: AbsenceReport): Observable<AbsenceReport> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<AbsenceReport>(`${this.url}/${id}`, absenceReport, httpOptions);
  }

  deleteAbsenceReportById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
