import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobPostingService } from './job-posting.service';
import { JobPosting } from './job-posting.model';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {
  dataSaved = false;
  jobPostingForm: any;
  allJobPostings: Observable<JobPosting[]> = this.jobPostingService.getAllJobPostings();
  jobPostingIdUpdate: number | null = null;
  message: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jobPostingService: JobPostingService
  ) { }

  ngOnInit() {
    this.jobPostingForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      postingDate: [''],
      applicationDeadline: [''],
      startDate: [''],
      city: [''],
      contactEmail: [''],
      contactPhone: [''],
      salaryInformation: [''],
      requirements: [''],
      jobType: [''],
      experienceRequired: [''],
      educationRequired: [''],
      skillsRequired: [''],
      benefitsOffered: [''],
      workSchedule: [''],
      isRemoteWork: [false],
      isActive: [false]
    });
    this.loadAllJobPostings();
  }

  loadAllJobPostings() {
    this.allJobPostings = this.jobPostingService.getAllJobPostings();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const jobPosting = this.jobPostingForm.value;
    this.createOrUpdateJobPosting(jobPosting);
    this.jobPostingForm.reset();
  }

  loadJobPostingToEdit(jobPostingId: number) {
    this.jobPostingService.getJobPostingById(jobPostingId).subscribe(jobPosting => {
      this.message = "";
      this.dataSaved = false;
      this.jobPostingIdUpdate = jobPosting.jobPostingId;
      this.jobPostingForm.patchValue(jobPosting);
    });
  }

  createOrUpdateJobPosting(jobPosting: JobPosting) {
    if (this.jobPostingIdUpdate == null) {
      this.jobPostingService.createJobPosting(jobPosting).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllJobPostings();
        this.jobPostingIdUpdate = null;
        this.jobPostingForm.reset();
      });
    } else {
      jobPosting.jobPostingId = this.jobPostingIdUpdate;
      this.jobPostingService.updateJobPosting(this.jobPostingIdUpdate, jobPosting).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllJobPostings();
        this.jobPostingIdUpdate = null;
        this.jobPostingForm.reset();
      });
    }
  }

  deleteJobPosting(id: number) {
    if (confirm("Are you sure you want to delete this job posting?")) {
      this.jobPostingService.deleteJobPostingById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllJobPostings();
        this.jobPostingIdUpdate = null;
        this.jobPostingForm.reset();
      });
    }
  }

  resetForm() {
    this.jobPostingForm.reset();
    this.message = "";
    this.dataSaved = false;
  }
}
