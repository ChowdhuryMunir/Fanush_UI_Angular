import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JobTitle } from './job-title.model';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  private apiUrl = `${environment.apiBaseUrl}/JobTitle`; // Ensure this matches your API endpoint

  constructor(private http: HttpClient) { }

  getAllJobTitles(): Observable<JobTitle[]> {
    return this.http.get<JobTitle[]>(this.apiUrl);
  }

  getJobTitleById(id: number): Observable<JobTitle> {
    return this.http.get<JobTitle>(`${this.apiUrl}/${id}`);
  }

  createJobTitle(jobTitle: JobTitle): Observable<JobTitle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<JobTitle>(this.apiUrl, jobTitle, httpOptions);
  }

  updateJobTitle(id: number, jobTitle: JobTitle): Observable<JobTitle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<JobTitle>(`${this.apiUrl}/${id}`, jobTitle, httpOptions);
  }

  deleteJobTitleById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
  }
}

