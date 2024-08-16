////import { Injectable } from '@angular/core';
////import { HttpClient, HttpHeaders } from '@angular/common/http';
////import { Observable } from 'rxjs';
////import { environment } from 'src/environments/environment.development';
////import { JobTitle } from './job-title.model';

////@Injectable({
////  providedIn: 'root'
////})
////export class JobTitleService {

////  private apiUrl = `${environment.apiBaseUrl}/JobTitle`; // Ensure this matches your API endpoint

////  constructor(private http: HttpClient) { }

////  getAllJobTitles(): Observable<JobTitle[]> {
////    return this.http.get<JobTitle[]>(this.apiUrl);
////  }

////  getJobTitleById(id: number): Observable<JobTitle> {
////    return this.http.get<JobTitle>(`${this.apiUrl}/${id}`);
////  }

////  createJobTitle(jobTitle: JobTitle): Observable<JobTitle> {
////    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
////    return this.http.post<JobTitle>(this.apiUrl, jobTitle, httpOptions);
////  }

////  updateJobTitle(id: number, jobTitle: JobTitle): Observable<JobTitle> {
////    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
////    return this.http.put<JobTitle>(`${this.apiUrl}/${id}`, jobTitle, httpOptions);
////  }

////  deleteJobTitleById(id: number): Observable<void> {
////    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
////    return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
////  }
////}
//import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { JobTitle } from './job-title.model';
//import { environment } from '../../../environments/environment.development';

//@Injectable({
//  providedIn: 'root'
//})
//export class JobTitleService {
//  url: string = environment.apiBaseUrl

//  constructor(private _http: HttpClient) { }

//  getJobTitles(): Observable<JobTitle[]> {
//    return this._http.get<JobTitle[]>(this.url + '/JobTitle');
//  }

//  getJobTitle(id: number): Observable<any> {
//    return this._http.get<JobTitle[]>(this.url + '/JobTitle/' + id);

//  }

//  addJobTitle(jobTitle: JobTitle): Observable<JobTitle> {
//    return this._http.post<JobTitle>(this.url, jobTitle);
//  }

//  updateJobTitle(id: number, jobTitle: JobTitle): Observable<any> {
//    const url = `${this.url}/${id}`;
//    return this._http.put(url, jobTitle);
//  }

//  deleteJobTitle(id: number): Observable<JobTitle> {
//    const url = `${this.url}/${id}`;
//    return this._http.delete<JobTitle>(url);
//  }
//}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { JobTitle } from './job-title.model';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  private url: string = `${environment.apiBaseUrl}/JobTitle`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllJobTitles(): Observable<JobTitle[]> {
    return this._http.get<JobTitle[]>(`${this.url}`);
  }

  getJobTitleById(id: number): Observable<JobTitle> {
    return this._http.get<JobTitle>(`${this.url}/${id}`);
  }

  createJobTitle(jobTitle: JobTitle): Observable<JobTitle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<JobTitle>(this.url, jobTitle, httpOptions);
  }

  updateJobTitle(id: number, jobTitle: JobTitle): Observable<JobTitle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<JobTitle>(`${this.url}/${id}`, jobTitle, httpOptions);
  }

  deleteJobTitleById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}

