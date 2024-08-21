import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Applicant } from './applicant.model'; // Make sure this path is correct

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private url: string = `${environment.apiBaseUrl}/Applicant`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllApplicants(): Observable<Applicant[]> {
    return this._http.get<Applicant[]>(`${this.url}`);
  }

  getApplicantById(id: number): Observable<Applicant> {
    return this._http.get<Applicant>(`${this.url}/${id}`);
  }

  createApplicant(applicant: Applicant): Observable<Applicant> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Applicant>(this.url, applicant, httpOptions);
  }

  updateApplicant(id: number, applicant: Applicant): Observable<Applicant> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Applicant>(`${this.url}/${id}`, applicant, httpOptions);
  }

  deleteApplicantById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
