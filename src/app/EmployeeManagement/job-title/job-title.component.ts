//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { FormBuilder, Validators } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { JobTitleService } from './job-title.service';
//import { JobTitle } from './job-title.model';

//@Component({
//  selector: 'app-job-title',
//  templateUrl: './job-title.component.html',
//  styleUrls: ['./job-title.component.css']
//})
//export class JobTitleComponent implements OnInit {
//  dataSaved = false;
//  jobTitleForm: any;
//  allJobTitles!: Observable<JobTitle[]>; // Use non-null assertion operator
//  jobTitleIdUpdate: number | null = null;
//  message: string = "";

//  constructor(
//    private formBuilder: FormBuilder,
//    private router: Router,
//    private jobTitleService: JobTitleService
//  ) { }

//  ngOnInit() {
//    this.jobTitleForm = this.formBuilder.group({
//      jobTitleName: ['', [Validators.required]],
//      isActive: [false]
//    });
//    this.loadAllJobTitles();
//  }

//  loadAllJobTitles() {
//    this.allJobTitles = this.jobTitleService.getJobTitles();
//  }

//  onFormSubmit() {
//    this.dataSaved = false;
//    const jobTitle = this.jobTitleForm.value;
//    this.createOrUpdateJobTitle(jobTitle);
//    this.jobTitleForm.reset();
//  }

//  loadJobTitleToEdit(jobTitleId: number) {
//    this.jobTitleService.getJobTitle(jobTitleId).subscribe(jobTitle => {
//      this.message = "";
//      this.dataSaved = false;
//      this.jobTitleIdUpdate = jobTitle.jobTitleId;
//      this.jobTitleForm.get('jobTitleName').setValue(jobTitle.jobTitleName);
//      this.jobTitleForm.get('isActive').setValue(jobTitle.isActive);
//    });
//  }

//  createOrUpdateJobTitle(jobTitle: JobTitle) {
//    if (this.jobTitleIdUpdate === null) {
//      this.jobTitleService.addJobTitle(jobTitle).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Saved Successfully.";
//        this.loadAllJobTitles();
//        this.jobTitleIdUpdate = null;
//        this.jobTitleForm.reset();
//      });
//    } else {
//      jobTitle.jobTitleId = this.jobTitleIdUpdate;
//      this.jobTitleService.updateJobTitle(this.jobTitleIdUpdate, jobTitle).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Updated Successfully.";
//        this.loadAllJobTitles();
//        this.jobTitleIdUpdate = null;
//        this.jobTitleForm.reset();
//      });
//    }
//  }

//  deleteJobTitle(id: number) {
//    if (confirm("Are you sure you want to delete this?")) {
//      this.jobTitleService.deleteJobTitle(id).subscribe(() => {
//        this.dataSaved = true;
//        this.message = "Record Deleted Successfully.";
//        this.loadAllJobTitles();
//        this.jobTitleIdUpdate = null;
//        this.jobTitleForm.reset();
//      });
//    }
//  }

//  resetForm() {
//    this.jobTitleForm.reset();
//    this.message = "";
//    this.dataSaved = false;
//  }
//}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobTitleService } from './job-title.service';
import { JobTitle } from './job-title.model';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnInit {
  dataSaved = false;
  jobTitleForm: any;
  allJobTitles: Observable<JobTitle[]> = this.jobTitleService.getAllJobTitles();
  jobTitleIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private jobTitleService: JobTitleService
  ) { }

  ngOnInit() {
    this.jobTitleForm = this.formBuilder.group({
      jobTitleName: ['', [Validators.required]],
      isActive: [false]
    });
    this.loadAllJobTitles();
  }

  loadAllJobTitles() {
    this.allJobTitles = this.jobTitleService.getAllJobTitles();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const jobTitle = this.jobTitleForm.value;
    this.createOrUpdateJobTitle(jobTitle);
    this.jobTitleForm.reset();
    this.isAdding = false;
  }

  loadJobTitleToEdit(jobTitleId: number) {
    this.jobTitleService.getJobTitleById(jobTitleId).subscribe(jobTitle => {
      this.message = "";
      this.dataSaved = false;
      this.jobTitleIdUpdate = jobTitle.jobTitleId;
      this.jobTitleForm.patchValue(jobTitle);
      this.isAdding = true;
    });
  }

  createOrUpdateJobTitle(jobTitle: JobTitle) {
    if (this.jobTitleIdUpdate == null) {
      this.jobTitleService.createJobTitle(jobTitle).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllJobTitles();
        this.jobTitleIdUpdate = null;
        this.jobTitleForm.reset();
      });
    } else {
      jobTitle.jobTitleId = this.jobTitleIdUpdate;
      this.jobTitleService.updateJobTitle(this.jobTitleIdUpdate, jobTitle).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllJobTitles();
        this.jobTitleIdUpdate = null;
        this.jobTitleForm.reset();
      });
    }
  }

  deleteJobTitle(id: number) {
    if (confirm("Are you sure you want to delete this job title?")) {
      this.jobTitleService.deleteJobTitleById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllJobTitles();
        this.jobTitleIdUpdate = null;
        this.jobTitleForm.reset();
      });
    }
  }

  resetForm() {
    this.jobTitleForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
  }

  cancelAdding() {
    this.isAdding = false;
    this.jobTitleForm.reset();
  }
}
