//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { InterviewService } from './interview.service';
//import { Interview, InterviewTypes } from './interview.model';

//@Component({
//  selector: 'app-interview',
//  templateUrl: './interview.component.html',
//  styleUrls: ['./interview.component.css']
//})
//export class InterviewComponent implements OnInit {
//  dataSaved = false;
//  interviewForm!: FormGroup; // Use definite assignment assertion
//  allInterviews$!: Observable<Interview[]>; // Use definite assignment assertion
//  interviewIdUpdate: number | null = null;
//  message: string = "";

//  interviewTypes = InterviewTypes; // For use in template

//  constructor(
//    private formBuilder: FormBuilder,
//    private router: Router,
//    private interviewService: InterviewService
//  ) { }

//  ngOnInit() {
//    this.interviewForm = this.formBuilder.group({
//      dateTime: ['', [Validators.required]],
//      location: ['', [Validators.required]],
//      notes: [''],
//      isActive: [false, [Validators.required]],
//      interviewer: ['', [Validators.required]],
//      applicantId: [0, [Validators.required]],
//      interviewType: [InterviewTypes.PreliminaryTest, [Validators.required]],
//      durationMinutes: [0, [Validators.required, Validators.min(1)]],
//      feedback: [''],
//      outcome: [''],
//      followUp: ['']
//    });
//    this.loadAllInterviews();
//  }

//  loadAllInterviews() {
//    this.allInterviews$ = this.interviewService.getAllInterviews();
//  }

//  onFormSubmit() {
//    if (this.interviewForm.invalid) {
//      return;
//    }
//    this.dataSaved = false;
//    const interview: Interview = this.interviewForm.value;
//    this.createOrUpdateInterview(interview);
//  }

//  loadInterviewToEdit(interviewId: number) {
//    this.interviewService.getInterviewById(interviewId).subscribe(
//      interview => {
//        this.message = "";
//        this.dataSaved = false;
//        this.interviewIdUpdate = interview.interviewId;
//        this.interviewForm.patchValue({
//          dateTime: new Date(interview.dateTime).toISOString().slice(0, 16),
//          location: interview.location,
//          notes: interview.notes,
//          isActive: interview.isActive,
//          interviewer: interview.interviewer,
//          applicantId: interview.applicantId,
//          interviewType: interview.interviewType,
//          durationMinutes: interview.durationMinutes,
//          feedback: interview.feedback,
//          outcome: interview.outcome,
//          followUp: interview.followUp
//        });
//      },
//      error => {
//        this.message = "Failed to load interview.";
//      }
//    );
//  }

//  createOrUpdateInterview(interview: Interview) {
//    if (this.interviewIdUpdate == null) {
//      this.interviewService.createInterview(interview).subscribe(
//        () => {
//          this.dataSaved = true;
//          this.message = "Record Saved Successfully.";
//          this.loadAllInterviews();
//          this.interviewIdUpdate = null;
//          this.interviewForm.reset();
//        },
//        error => {
//          this.message = "Failed to save record.";
//        }
//      );
//    } else {
//      interview.interviewId = this.interviewIdUpdate;
//      this.interviewService.updateInterview(this.interviewIdUpdate, interview).subscribe(
//        () => {
//          this.dataSaved = true;
//          this.message = "Record Updated Successfully.";
//          this.loadAllInterviews();
//          this.interviewIdUpdate = null;
//          this.interviewForm.reset();
//        },
//        error => {
//          this.message = "Failed to update record.";
//        }
//      );
//    }
//  }

//  deleteInterview(id: number) {
//    if (confirm("Are you sure you want to delete this interview?")) {
//      this.interviewService.deleteInterviewById(id).subscribe(
//        () => {
//          this.dataSaved = true;
//          this.message = "Record Deleted Successfully.";
//          this.loadAllInterviews();
//          this.interviewIdUpdate = null;
//          this.interviewForm.reset();
//        },
//        error => {
//          this.message = "Failed to delete record.";
//        }
//      );
//    }
//  }

//  resetForm() {
//    this.interviewForm.reset();
//    this.message = "";
//    this.dataSaved = false;
//  }
//}
import { Component } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {

}
