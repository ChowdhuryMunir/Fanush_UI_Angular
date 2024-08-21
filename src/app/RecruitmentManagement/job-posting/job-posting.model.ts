//export class JobPosting {
//}
export class JobPosting {
  jobPostingId: number = 0;
  title: string = "";
  description: string = "";
  isInternal: boolean = false;
  isActive: boolean = false;
  postingDate: Date = new Date();
  applicationDeadline: Date = new Date();
  startDate: Date = new Date();
  city: string = "";
  contactEmail: string = "";
  contactPhone: string = "";
  salaryInformation: string = "";
  requirements: string = "";
  jobType: string = "";
  experienceRequired: string = "";
  educationRequired: string = "";
  skillsRequired: string = "";
  benefitsOffered: string = "";
  workSchedule: string = "";
  isRemoteWork: boolean = false;
}
