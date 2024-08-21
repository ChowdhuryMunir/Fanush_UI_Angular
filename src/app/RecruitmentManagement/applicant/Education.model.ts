export class Education {
  educationId: number = 0;
  applicantId?: number = undefined; // Optional property
  applicant?: any = undefined; // Adjust type as needed (e.g., `Applicant` model if available)

  degree: string = "";
  institution: string = "";
  passingYear: string = "";
  result: number = 0.0;

  constructor(init?: Partial<Education>) {
    Object.assign(this, init);
  }
}
