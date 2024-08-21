import { Interview } from '../../RecruitmentManagement/interview/interview.model';
import { Education } from '../../RecruitmentManagement/applicant/Education.model';
import { WorkExperience } from '../../RecruitmentManagement/applicant/WorkExperience.model';

export class Applicant {
  applicantId: number = 0;
  applicantName: string = "";
  email: string = "";
  resumeUrl: string = "";
  resumeFile?: File; // Optional property for file upload

  status: "Approved" | "Pending" | "Rejected" = "Pending"; // Enum-like property
  appliedDate: Date = new Date();
  phoneNumber?: string = undefined; // Optional property
  linkedinProfileUrl?: string = undefined; // Optional property
  address?: string = undefined; // Optional property
  city?: string = undefined; // Optional property
  zipCode?: string = undefined; // Optional property
  country?: string = undefined; // Optional property
  expectedSalary?: number = undefined; // Optional property
  languages?: string = undefined; // Optional property
  skills?: string = undefined; // Optional property
  references?: string = undefined; // Optional property

  interviews?: Interview[] = []; // Array of related models
  educations?: Education[] = []; // Array of related models
  workExperiences?: WorkExperience[] = []; // Array of related models

  constructor(init?: Partial<Applicant>) {
    Object.assign(this, init);
  }
}

// Sample usage of enum-like property
export type ApplicantStatus = "Approved" | "Pending" | "Rejected";
