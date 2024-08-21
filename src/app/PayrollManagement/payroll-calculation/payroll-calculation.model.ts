import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class PayrollCalculation {
  payrollCalculationId: number = 0;
  employeeId: number = 0;
  basicSalary: number = 0;
  houseRent: number = 0;
  medicalAllowance: number = 0;
  conveyanceAllowance: number = 0;
  otherAllowance: number = 0;

  // Relationships
  employee: Employee | null = null;

  // Overtime and Absence Report are not included in the class directly.
  // They might be handled separately in your application logic or service methods.

  // For calculation methods, you would typically define these in services or utility functions.
}
