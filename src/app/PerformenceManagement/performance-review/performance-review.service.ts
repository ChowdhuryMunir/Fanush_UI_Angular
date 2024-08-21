import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PerformanceReview } from './performance-review.model'; // Make sure the path is correct

@Injectable({
  providedIn: 'root'
})
export class PerformanceReviewService {

  private url: string = `${environment.apiBaseUrl}/PerformanceReview`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllPerformanceReviews(): Observable<PerformanceReview[]> {
    return this._http.get<PerformanceReview[]>(this.url);
  }

  getPerformanceReviewById(id: number): Observable<PerformanceReview> {
    return this._http.get<PerformanceReview>(`${this.url}/${id}`);
  }

  createPerformanceReview(performanceReview: PerformanceReview): Observable<PerformanceReview> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<PerformanceReview>(this.url, performanceReview, httpOptions);
  }

  updatePerformanceReview(id: number, performanceReview: PerformanceReview): Observable<PerformanceReview> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<PerformanceReview>(`${this.url}/${id}`, performanceReview, httpOptions);
  }

  deletePerformanceReviewById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}

