import { Employee } from "../../EmployeeManagement/employee/employee.model";

export class PerformanceReview {
  performanceReviewId: number = 0;

  employeeId: number = 0;
  employee: Employee | null = null; // Assuming Employee is another model class
  reviewerId: number = 0;
  feedback: string = "";

  performanceRating: number = 1;
  comments: string = "";
  reviewDate?: Date = undefined; // Optional property
  reviewType: string = "";

  constructor(init?: Partial<PerformanceReview>) {
    Object.assign(this, init);
  }
}
