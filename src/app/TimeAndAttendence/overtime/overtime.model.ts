
import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class Overtime {
  overtimeId: number = 0;
  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  date: Date = new Date();
  hours: number = 0;
  isActive: boolean = false;

  overtimeType: string = "";
  approvalStatus: string = "";
  approvedBy: string | null = null;
  approvalDate?: Date = undefined; // Optional property
  reason: string = "";
  attachmentUrl?: string = undefined; // Optional property

  createdDate: Date = new Date();
  lastModifiedDate: Date = new Date();
  createdBy: string = "";
  lastModifiedBy: string = "";
  department: string = "";
  project: string = "";

  constructor(init?: Partial<Overtime>) {
    Object.assign(this, init);
  }
}
