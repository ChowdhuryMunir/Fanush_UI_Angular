//export class EmployeeLifecycleModel {
//}
export class EmployeeLifecycle {
  lifecycleId: number = 0;
  employeeId: number = 0;
  actionType: string = ""; // Onboarding, Transfer, Promotion, Termination, etc.
  actionDate: Date = new Date();
  isActive: boolean = false;
}
