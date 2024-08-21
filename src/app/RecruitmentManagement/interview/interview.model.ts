export interface Interview {
  //interviewId: number;
  //dateTime: Date;
  //location: string;
  //notes?: string;
  //isActive: boolean;
  //interviewer: string;
  //applicantId: number;
  //interviewType: InterviewTypes;
  //durationMinutes: number;
  //feedback?: string;
  //outcome?: string;
  //followUp?: string;
}

//export enum InterviewTypes {
//  PreliminaryTest = 'PreliminaryTest',
//  Written = 'Written',
//  OralTest = 'OralTest'
//}
import { Applicant } from '../../RecruitmentManagement/applicant/applicant.model'; // Adjust the path as needed

export class Interview {
  interviewId: number = 0;
  dateTime: Date = new Date();
  location: string = "";
  notes?: string = undefined; // Optional property
  isActive: boolean = false;
  interviewer: string = "";
  applicantId: number = 0;
  applicant: Applicant | null = null; // Assuming Applicant is another model class
  interviewType: InterviewTypes = InterviewTypes.PreliminaryTest; // Default value
  durationMinutes: number = 0;
  feedback?: string = undefined; // Optional property
  outcome?: string = undefined; // Optional property
  followUp?: string = undefined; // Optional property

  constructor(init?: Partial<Interview>) {
    Object.assign(this, init);
  }
}

// Enum for Interview Types
export enum InterviewTypes {
  PreliminaryTest = "PreliminaryTest",
  Written = "Written",
  OralTest = "OralTest"
}
