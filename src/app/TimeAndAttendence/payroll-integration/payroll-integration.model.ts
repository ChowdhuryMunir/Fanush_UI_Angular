import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class PayrollIntegration {
  payrollIntegrationId: number = 0;
  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  payrollSystemId: number = 0;
  amount: number = 0.0;
  integrationDate: Date = new Date();

  integrationType: string = "";
  transactionId: string = "";
  isActive: boolean = false;

  payPeriodStartDate: Date = new Date();
  payPeriodEndDate: Date = new Date();
  payFrequency: string = "";
  deductions: number = 0.0;
  netPay: number = 0.0;
  taxAmount: number = 0.0;
  grossPay: number = 0.0;

  constructor(init?: Partial<PayrollIntegration>) {
    Object.assign(this, init);
  }
}
