import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PayrollCalculationService } from './payroll-calculation.service';
import { PayrollCalculation } from './payroll-calculation.model';

@Component({
  selector: 'app-payroll-calculation',
  templateUrl: './payroll-calculation.component.html',
  styleUrls: ['./payroll-calculation.component.css']
})
export class PayrollCalculationComponent implements OnInit {
  dataSaved = false;
  payrollCalculationForm: any;
  allPayrollCalculations: Observable<PayrollCalculation[]> = this.payrollCalculationService.getAllPayrollCalculations();
  payrollCalculationIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private payrollCalculationService: PayrollCalculationService
  ) { }

  ngOnInit() {
    this.payrollCalculationForm = this.formBuilder.group({
      employeeId: [0, [Validators.required]],
      basicSalary: [0, [Validators.required]],
      houseRent: [0],
      medicalAllowance: [0],
      conveyanceAllowance: [0],
      otherAllowance: [0]
    });
    this.loadAllPayrollCalculations();
  }

  loadAllPayrollCalculations() {
    this.allPayrollCalculations = this.payrollCalculationService.getAllPayrollCalculations();
  }

  //onFormSubmit() {
  //  this.dataSaved = false;
  //  const payrollCalculation = this.payrollCalculationForm.value;
  //  this.createOrUpdatePayrollCalculation(payrollCalculation);
  //  this.payrollCalculationForm.reset();
  //  this.isAdding = false;
  //}
  onFormSubmit() {
    if (this.payrollCalculationForm.valid) {
      const formValue = this.payrollCalculationForm.value;
      if (this.payrollCalculationIdUpdate == null) {
        this.payrollCalculationService.createPayrollCalculation(formValue).subscribe(() => {
          this.message = 'Payroll Calculation added successfully!';
          this.loadAllPayrollCalculations(); // Refresh the list
          this.cancelAdding();
        });
      } else {
        this.payrollCalculationService.updatePayrollCalculation(this.payrollCalculationIdUpdate, formValue).subscribe(() => {
          this.message = 'Payroll Calculation updated successfully!';
          this.loadAllPayrollCalculations(); // Refresh the list
          this.cancelAdding();
        });
      }
    }
  }


  //loadPayrollCalculationToEdit(payrollCalculationId: number) {
  //  this.payrollCalculationService.getPayrollCalculationById(payrollCalculationId).subscribe(payrollCalculation => {
  //    this.message = "";
  //    this.dataSaved = false;
  //    this.payrollCalculationIdUpdate = payrollCalculation.payrollCalculationId;
  //    this.payrollCalculationForm.patchValue(payrollCalculation);
  //    this.isAdding = true;
  //  });
  loadPayrollCalculationToEdit(id: number) {
    this.payrollCalculationService.getPayrollCalculationById(id).subscribe(data => {
      this.payrollCalculationIdUpdate = id;
      this.payrollCalculationForm.patchValue(data);
      this.isAdding = true;
    });
  }

  createOrUpdatePayrollCalculation(payrollCalculation: PayrollCalculation) {
    if (this.payrollCalculationIdUpdate == null) {
      this.payrollCalculationService.createPayrollCalculation(payrollCalculation).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllPayrollCalculations();
        this.payrollCalculationIdUpdate = null;
        this.payrollCalculationForm.reset();
      });
    } else {
      payrollCalculation.payrollCalculationId = this.payrollCalculationIdUpdate;
      this.payrollCalculationService.updatePayrollCalculation(this.payrollCalculationIdUpdate, payrollCalculation).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllPayrollCalculations();
        this.payrollCalculationIdUpdate = null;
        this.payrollCalculationForm.reset();
      });
    }
  }

  deletePayrollCalculation(payrollCalculationId: number) {
    if (confirm("Are you sure you want to delete this payroll calculation?")) {
      this.payrollCalculationService.deletePayrollCalculationById(payrollCalculationId).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllPayrollCalculations();
        this.payrollCalculationIdUpdate = null;
        this.payrollCalculationForm.reset();
      });
    }
  }

  resetForm() {
    this.payrollCalculationForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
  }

  cancelAdding() {
    this.isAdding = false;
    this.payrollCalculationForm.reset();
  }
}
