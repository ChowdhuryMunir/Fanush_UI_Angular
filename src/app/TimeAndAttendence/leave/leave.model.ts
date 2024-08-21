import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class Leave {
  leaveId: number = 0;

  employeeId: number = 0;
  employee: Employee | null = null;

  leaveType: string = "";
  startDate: Date = new Date();
  endDate: Date = new Date();

  status: string = "Pending"; // Default status set to "Pending"
  reason: string = "";
  requestedBy: string = "";
  approvalDate?: Date = undefined; // Optional property
  approver?: string = ""; // Optional property
  approvalComments?: string = ""; // Optional property
  isActive: boolean = false;

  // Additional properties
  isPaidLeave: boolean = false;
  leaveCategory: string = ""; // Category of leave (e.g., sick leave, vacation leave)

  constructor(init?: Partial<Leave>) {
    Object.assign(this, init);
  }
}
