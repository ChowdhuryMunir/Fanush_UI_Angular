import { Applicant } from "./applicant.model";

export class WorkExperience {
  workExperienceId: number = 0;
  applicantId?: number = undefined; // Optional property
  applicant?: Applicant | null = null; // Assuming Applicant is another model class

  company: string = "";
  position: string = "";
  duration: string = "";

  constructor(init?: Partial<WorkExperience>) {
    Object.assign(this, init);
  }
}
