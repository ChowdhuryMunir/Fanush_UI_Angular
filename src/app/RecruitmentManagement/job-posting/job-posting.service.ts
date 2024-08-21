//import { Injectable } from '@angular/core';

//@Injectable({
//  providedIn: 'root'
//})
//export class JobPostingService {

//  constructor() { }
//}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { JobPosting } from './job-posting.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  private url: string = `${environment.apiBaseUrl}/JobPosting`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  //getAllJobPostings(): Observable<JobPosting[]> {
  //  return this._http.get<JobPosting[]>(`${this.url}`);
  //}
  getAllJobPostings(): Observable<JobPosting[]> {
    return this._http.get<JobPosting[]>(`${this.url}/GetAllJobPosting`);
  }
  getJobPostingById(id: number): Observable<JobPosting> {
    return this._http.get<JobPosting>(`${this.url}/${id}`);
  }

  createJobPosting(jobPosting: JobPosting): Observable<JobPosting> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<JobPosting>(this.url, jobPosting, httpOptions);
  }

  updateJobPosting(id: number, jobPosting: JobPosting): Observable<JobPosting> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<JobPosting>(`${this.url}/${id}`, jobPosting, httpOptions);
  }

  deleteJobPostingById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
