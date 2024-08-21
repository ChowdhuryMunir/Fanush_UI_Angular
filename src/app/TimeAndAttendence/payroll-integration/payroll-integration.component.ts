import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PayrollIntegrationService } from './payroll-integration.service';
import { PayrollIntegration } from './payroll-integration.model';

@Component({
  selector: 'app-payroll-integration',
  templateUrl: './payroll-integration.component.html',
  styleUrls: ['./payroll-integration.component.css']
})
export class PayrollIntegrationComponent implements OnInit {
  dataSaved = false;
  payrollIntegrationForm: any;
  allPayrollIntegrations: Observable<PayrollIntegration[]> = this.payrollIntegrationService.getAllPayrollIntegrations();
  payrollIntegrationIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false; // Add this property

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private payrollIntegrationService: PayrollIntegrationService
  ) { }

  ngOnInit() {
    this.payrollIntegrationForm = this.formBuilder.group({
      employeeId: [0, [Validators.required]],
      payrollSystemId: [0, [Validators.required]],
      amount: [0.0, [Validators.required]],
      integrationDate: [new Date(), [Validators.required]],
      integrationType: [''],
      transactionId: [''],
      isActive: [false],
      payPeriodStartDate: [new Date()],
      payPeriodEndDate: [new Date()],
      payFrequency: [''],
      deductions: [0.0],
      netPay: [0.0],
      taxAmount: [0.0],
      grossPay: [0.0]
    });
    this.loadAllPayrollIntegrations();
  }

  loadAllPayrollIntegrations() {
    this.allPayrollIntegrations = this.payrollIntegrationService.getAllPayrollIntegrations();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const payrollIntegration = this.payrollIntegrationForm.value;
    this.createOrUpdatePayrollIntegration(payrollIntegration);
    this.payrollIntegrationForm.reset();
    this.isAdding = false; // Reset isAdding when form is submitted
  }

  loadPayrollIntegrationToEdit(payrollIntegrationId: number) {
    this.payrollIntegrationService.getPayrollIntegrationById(payrollIntegrationId).subscribe(payrollIntegration => {
      this.message = "";
      this.dataSaved = false;
      this.payrollIntegrationIdUpdate = payrollIntegration.payrollIntegrationId;
      this.payrollIntegrationForm.patchValue(payrollIntegration);
      this.isAdding = true; // Set isAdding to true when editing a payroll integration
    });
  }

  createOrUpdatePayrollIntegration(payrollIntegration: PayrollIntegration) {
    if (this.payrollIntegrationIdUpdate == null) {
      this.payrollIntegrationService.createPayrollIntegration(payrollIntegration).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllPayrollIntegrations();
        this.payrollIntegrationIdUpdate = null;
        this.payrollIntegrationForm.reset();
      });
    } else {
      payrollIntegration.payrollIntegrationId = this.payrollIntegrationIdUpdate;
      this.payrollIntegrationService.updatePayrollIntegration(this.payrollIntegrationIdUpdate, payrollIntegration).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllPayrollIntegrations();
        this.payrollIntegrationIdUpdate = null;
        this.payrollIntegrationForm.reset();
      });
    }
  }

  deletePayrollIntegration(id: number) {
    if (confirm("Are you sure you want to delete this payroll integration?")) {
      this.payrollIntegrationService.deletePayrollIntegrationById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllPayrollIntegrations();
        this.payrollIntegrationIdUpdate = null;
        this.payrollIntegrationForm.reset();
      });
    }
  }

  resetForm() {
    this.payrollIntegrationForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false; // Reset isAdding when form is reset
  }

  startAdding() {
    this.isAdding = true; // Set isAdding to true to show form for adding
  }

  cancelAdding() {
    this.isAdding = false; // Set isAdding to false to hide form
    this.resetForm();
  }
}
