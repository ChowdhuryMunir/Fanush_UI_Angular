import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class AbsenceReport {
  absenceReportId: number = 0;
  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  startDate: Date = new Date();
  endDate: Date = new Date();
  reason: string = "";
  approver: string = "";
  status: string = "";
  isPaid: boolean = false;
  approvedDate?: Date = undefined; // Optional property
  isHalfDay: boolean = false;
  halfDayType?: string = undefined; // Optional property

  constructor(init?: Partial<AbsenceReport>) {
    Object.assign(this, init);
  }
}
