import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Goal } from './goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private url: string = `${environment.apiBaseUrl}/Goal`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllGoals(): Observable<Goal[]> {
    return this._http.get<Goal[]>(`${this.url}`);
  }

  getGoalById(id: number): Observable<Goal> {
    return this._http.get<Goal>(`${this.url}/${id}`);
  }

  createGoal(goal: Goal): Observable<Goal> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Goal>(this.url, goal, httpOptions);
  }

  updateGoal(id: number, goal: Goal): Observable<Goal> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Goal>(`${this.url}/${id}`, goal, httpOptions);
  }

  deleteGoalById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
