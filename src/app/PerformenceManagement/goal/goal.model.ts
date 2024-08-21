import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class Goal {
  goalId: number = 0;

  title: string = "";
  description: string = "";
  startDate: Date = new Date();
  endDate: Date = new Date();

  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  goalStatus: GoalStatuses = GoalStatuses.Pending;
  progress: number = 0;
  isActive: boolean = false;

  lastUpdatedDate: Date = new Date();
  updatedBy: string = "";
  completionDate?: Date = undefined; // Optional property
  assignedByUserId: number = 0;
  comments: string = "";

  constructor(init?: Partial<Goal>) {
    Object.assign(this, init);
  }
}

export enum GoalStatuses {
  Approved = "Approved",
  Pending = "Pending",
  Rejected = "Rejected"
}
