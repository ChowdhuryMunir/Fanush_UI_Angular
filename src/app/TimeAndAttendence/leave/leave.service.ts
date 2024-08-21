import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Leave } from './leave.model'; // Adjust the path to your Leave model

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private url: string = `${environment.apiBaseUrl}/Leave`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllLeaves(): Observable<Leave[]> {
    return this._http.get<Leave[]>(this.url);
  }

  getLeaveById(id: number): Observable<Leave> {
    return this._http.get<Leave>(`${this.url}/${id}`);
  }

  createLeave(leave: Leave): Observable<Leave> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Leave>(this.url, leave, httpOptions);
  }

  updateLeave(id: number, leave: Leave): Observable<Leave> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Leave>(`${this.url}/${id}`, leave, httpOptions);
  }

  deleteLeaveById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
