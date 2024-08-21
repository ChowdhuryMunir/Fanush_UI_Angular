import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ClockInOut } from './clock-in-out.model';

@Injectable({
  providedIn: 'root'
})
export class ClockInOutService {

  private url: string = `${environment.apiBaseUrl}/ClockInOut`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllClockInOuts(): Observable<ClockInOut[]> {
    return this._http.get<ClockInOut[]>(`${this.url}`);
  }

  getClockInOutById(id: number): Observable<ClockInOut> {
    return this._http.get<ClockInOut>(`${this.url}/${id}`);
  }

  createClockInOut(clockInOut: ClockInOut): Observable<ClockInOut> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<ClockInOut>(this.url, clockInOut, httpOptions);
  }

  updateClockInOut(id: number, clockInOut: ClockInOut): Observable<ClockInOut> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<ClockInOut>(`${this.url}/${id}`, clockInOut, httpOptions);
  }

  deleteClockInOutById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
