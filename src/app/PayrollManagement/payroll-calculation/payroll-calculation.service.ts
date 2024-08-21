import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PayrollCalculation } from './payroll-calculation.model';
import { Overtime } from '../../TimeAndAttendence/overtime/overtime.model'; // Import your Overtime model
import { AbsenceReport } from '../../TimeAndAttendence/absence-report/absence-report.model'; // Import your AbsenceReport model
import { Leave } from '../../TimeAndAttendence/leave/leave.model'; // Import your Leave model

@Injectable({
  providedIn: 'root'
})
export class PayrollCalculationService {
  private url: string = `${environment.apiBaseUrl}/PayrollCalculation`; // Ensure this matches your API endpoint

  constructor(private _http: HttpClient) { }

  getAllPayrollCalculations(): Observable<PayrollCalculation[]> {
    return this._http.get<PayrollCalculation[]>(`${this.url}`);
  }

  //getPayrollCalculationById(id: number): Observable<PayrollCalculation> {
  //  return this._http.get<PayrollCalculation>(`${this.url}/${id}`);
  //}
  getPayrollCalculationById(id: number): Observable<PayrollCalculation> {
    return this._http.get<PayrollCalculation>(`/api/payrollcalculations/${id}`);
  }


  createPayrollCalculation(payrollCalculation: PayrollCalculation): Observable<PayrollCalculation> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<PayrollCalculation>(this.url, payrollCalculation, httpOptions);
  }

  updatePayrollCalculation(id: number, payrollCalculation: PayrollCalculation): Observable<PayrollCalculation> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<PayrollCalculation>(`${this.url}/${id}`, payrollCalculation, httpOptions);
  }

  deletePayrollCalculationById(id: number): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<void>(`${this.url}/${id}`, httpOptions);
  }

  calculateOvertime(id: number, overtime: Overtime): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-overtime`, overtime, httpOptions);
  }

  calculateAbsenceDeduction(id: number, absenceReport: AbsenceReport): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-absence-deduction`, absenceReport, httpOptions);
  }

  calculateUnpaidLeaveDeduction(id: number, leaves: Leave[]): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-unpaid-leave-deduction`, leaves, httpOptions);
  }

  calculateTotalDeduction(id: number, model: { AbsenceReport: AbsenceReport, Leaves: Leave[] }): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-total-deduction`, model, httpOptions);
  }

  calculateGrossPayable(id: number, overtimes: Overtime[]): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-gross-payable`, overtimes, httpOptions);
  }

  calculateNetPayable(id: number, model: { Overtimes: Overtime[], AbsenceReport: AbsenceReport, Leaves: Leave[] }): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<number>(`${this.url}/${id}/calculate-net-payable`, model, httpOptions);
  }

  generatePaySlip(id: number, model: { Overtimes: Overtime[], AbsenceReport: AbsenceReport, Leaves: Leave[], PayDate: Date }): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<string>(`${this.url}/${id}/payslip`, model, httpOptions);
  }

  getFullPaymentSlip(id: number): Observable<string> {
    return this._http.get<string>(`${this.url}/${id}/full-payment-slip`);
  }
}
