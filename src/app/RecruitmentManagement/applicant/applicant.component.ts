import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicantService } from './applicant.service';
import { Applicant } from './applicant.model';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  dataSaved = false;
  applicantForm: any;
  allApplicants: Observable<Applicant[]> = this.applicantService.getAllApplicants();
  applicantIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private applicantService: ApplicantService
  ) { }

  ngOnInit() {
    this.applicantForm = this.formBuilder.group({
      applicantName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phoneNumber: [''],
      address: [''],
      city: [''],
      zipCode: [''],
      country: [''],
      linkedinProfileUrl: [''],
      resumeUrl: [''],
      expectedSalary: [''],
      languages: [''],
      skills: [''],
      references: [''],
      status: ['Pending'],
      appliedDate: [new Date()]
    });
    this.loadAllApplicants();
  }

  loadAllApplicants() {
    this.allApplicants = this.applicantService.getAllApplicants();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const applicant = this.applicantForm.value;
    this.createOrUpdateApplicant(applicant);
    this.applicantForm.reset();
    this.isAdding = false;
  }

  loadApplicantToEdit(applicantId: number) {
    this.applicantService.getApplicantById(applicantId).subscribe(applicant => {
      this.message = "";
      this.dataSaved = false;
      this.applicantIdUpdate = applicant.applicantId;
      this.applicantForm.patchValue(applicant);
      this.isAdding = true;
    });
  }

  createOrUpdateApplicant(applicant: Applicant) {
    if (this.applicantIdUpdate == null) {
      this.applicantService.createApplicant(applicant).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllApplicants();
        this.applicantIdUpdate = null;
        this.applicantForm.reset();
      });
    } else {
      applicant.applicantId = this.applicantIdUpdate;
      this.applicantService.updateApplicant(this.applicantIdUpdate, applicant).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllApplicants();
        this.applicantIdUpdate = null;
        this.applicantForm.reset();
      });
    }
  }

  deleteApplicant(id: number) {
    if (confirm("Are you sure you want to delete this applicant?")) {
      this.applicantService.deleteApplicantById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllApplicants();
        this.applicantIdUpdate = null;
        this.applicantForm.reset();
      });
    }
  }

  resetForm() {
    this.applicantForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
  }

  cancelAdding() {
    this.isAdding = false;
    this.resetForm();
  }
}
