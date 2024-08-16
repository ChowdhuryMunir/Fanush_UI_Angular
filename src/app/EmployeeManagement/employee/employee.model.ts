export class Employee {
  employeeId: number = 0;
  firstName: string = "";
  lastName: string = "";
  dateOfBirth: Date = new Date();
  gender: string = "";
  presentAddress: string = "";
  permanentAddress: string = "";
  phoneNumber: string = "";
  email: string = "";
  nationalId: string = "";
  passportNumber: string = "";
  dateOfJoining: Date = new Date();
  jobTitleId: number = 0;
  departmentId: number = 0;
  emergencyContactNumber: string = "";
  fathersName: string = "";
  mothersName: string = "";
  bloodGroup: string = "";
  religion: string = "";
  maritalStatus: string = "";
  nationality: string = "";
  profileImagePath: string = "";
  isActive: boolean = false;
  createdOn: Date = new Date();
  createdBy: string = "";
  updatedOn: Date = new Date();
  updatedBy: string = "";

  // Relationships
  //employeeLifecycles: any[] = [];
  //clockInOuts: any[] = [];
  //leaves: any[] = [];
}
