import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class ClockInOut {
  clockInOutId: number = 0;
  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  timestamp: Date = new Date();
  action: string = "";
  location: string = "";
  notes?: string = undefined; // Optional property

  clockInTime: Date = new Date();
  clockOutTime: Date = new Date();
  isLateArrival: boolean = false;
  isEarlyDeparture: boolean = false;
  isWorkday: boolean = true;
  overtimeHours: number = 0;
  isOvertime: boolean = false;
  approvedBy: string = "";
  isActive: boolean = false;
  lateArrivalReason: string = "";
  earlyDepartureReason?: string = undefined; // Optional property

  constructor(init?: Partial<ClockInOut>) {
    Object.assign(this, init);
  }
}
