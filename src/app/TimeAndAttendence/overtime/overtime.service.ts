import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Overtime } from './overtime.model';

@Injectable({
  providedIn: 'root'
})
export class OvertimeService {

  private url: string = `${environment.apiBaseUrl}/Overtime`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllOvertimes(): Observable<Overtime[]> {
    return this._http.get<Overtime[]>(this.url);
  }

  getOvertimeById(id: number): Observable<Overtime> {
    return this._http.get<Overtime>(`${this.url}/${id}`);
  }

  createOvertime(overtime: Overtime): Observable<Overtime> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Overtime>(this.url, overtime, httpOptions);
  }

  updateOvertime(id: number, overtime: Overtime): Observable<Overtime> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Overtime>(`${this.url}/${id}`, overtime, httpOptions);
  }

  deleteOvertimeById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
