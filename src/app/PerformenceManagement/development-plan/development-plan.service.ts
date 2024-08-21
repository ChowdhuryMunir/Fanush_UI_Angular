import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { DevelopmentPlan } from '../../PerformenceManagement/development-plan/development-plan.model'; // Adjust path as needed

@Injectable({
  providedIn: 'root'
})
export class DevelopmentPlanService {

  private url: string = `${environment.apiBaseUrl}/DevelopmentPlan`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllDevelopmentPlans(): Observable<DevelopmentPlan[]> {
    return this._http.get<DevelopmentPlan[]>(`${this.url}`);
  }

  getDevelopmentPlanById(id: number): Observable<DevelopmentPlan> {
    return this._http.get<DevelopmentPlan>(`${this.url}/${id}`);
  }

  createDevelopmentPlan(developmentPlan: DevelopmentPlan): Observable<DevelopmentPlan> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<DevelopmentPlan>(this.url, developmentPlan, httpOptions);
  }

  updateDevelopmentPlan(id: number, developmentPlan: DevelopmentPlan): Observable<DevelopmentPlan> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<DevelopmentPlan>(`${this.url}/${id}`, developmentPlan, httpOptions);
  }

  deleteDevelopmentPlanById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
