import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class PerformanceReport {
  performanceReportId: number = 0;

  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class

  evaluatorId: number = 0;
  evaluationDate: Date = new Date();

  performanceScore?: number = undefined; // Optional property

  goalsMet?: string = ""; // Optional property

  strengths: string = "";
  areasForImprovement: string = "";
  achievements: string = "";
  developmentPlan: string = "";
  comments: string = "";
  overallRating: string = "";

  reviewPeriodStart?: Date = undefined; // Optional property
  reviewPeriodEnd?: Date = undefined;   // Optional property

  status: string = "";
  actionItems: string = "";

  constructor(init?: Partial<PerformanceReport>) {
    Object.assign(this, init);
  }
}
