import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class DevelopmentPlan {
  developmentPlanId: number = 0;

  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class
  description: string = "";
  targetCompletionDate: Date = new Date();
  developmentPlanStatus: DevelopmentPlanStatuses = DevelopmentPlanStatuses.Pending;
  progress: number = 0;
  isActive: boolean = false;
  feedback: string = "";
  resources: string = "";
  completionDate?: Date = undefined; // Optional property

   constructor(init?: Partial<DevelopmentPlan>) {
    Object.assign(this, init);
   }
}

export enum DevelopmentPlanStatuses {
  Approved = "Approved",
  Pending = "Pending",
  Rejected = "Rejected"
}

