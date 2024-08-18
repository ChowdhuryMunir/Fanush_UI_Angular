//import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment.development';
//import { Interview, InterviewTypes } from './interview.model';

//@Injectable({
//  providedIn: 'root'
//})
//export class InterviewService {

//  private url: string = `${environment.apiBaseUrl}/Interview`; // Ensure this matches your API endpoint

//  constructor(private http: HttpClient) { }

//  getAllInterviews(): Observable<Interview[]> {
//    return this.http.get<Interview[]>(this.url);
//  }

//  getInterviewById(id: number): Observable<Interview> {
//    return this.http.get<Interview>(`${this.url}/${id}`);
//  }

//  createInterview(interview: Interview): Observable<Interview> {
//    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//    return this.http.post<Interview>(this.url, interview, httpOptions);
//  }

//  updateInterview(id: number, interview: Interview): Observable<Interview> {
//    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//    return this.http.put<Interview>(`${this.url}/${id}`, interview, httpOptions);
//  }

//  deleteInterviewById(id: number): Observable<void> {
//    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//    return this.http.delete<void>(`${this.url}/${id}`, httpOptions);
//  }
//}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor() { }
}
