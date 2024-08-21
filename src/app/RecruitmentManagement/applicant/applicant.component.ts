import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicantService } from './applicant.service';
import { Applicant } from './applicant.model';
import { Education } from './Education.model';
import { WorkExperience } from './WorkExperience.model';

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
    private applicantService: ApplicantService
  ) { }

  ngOnInit() {
    this.applicantForm = this.formBuilder.group({
      applicantName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      resumeUrl: [''],
      status: ['Pending'],
      appliedDate: [new Date()],
      phoneNumber: [''],
      linkedinProfileUrl: [''],
      address: [''],
      city: [''],
      zipCode: [''],
      country: [''],
      expectedSalary: [''],
      languages: [''],
      skills: [''],
      references: [''],
      educations: this.formBuilder.array([]),
      workExperiences: this.formBuilder.array([])
    });
    this.loadAllApplicants();
  }

  get educations(): FormArray {
    return this.applicantForm.get('educations') as FormArray;
  }

  get workExperiences(): FormArray {
    return this.applicantForm.get('workExperiences') as FormArray;
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
      // Handle nested form arrays for educations and work experiences
      this.setEducations(applicant.educations || []);
      this.setWorkExperiences(applicant.workExperiences || []);
    });
  }

  setEducations(educations: Education[]) {
    const educationFGs = educations.map(education => this.formBuilder.group(education));
    const educationFormArray = this.formBuilder.array(educationFGs);
    this.applicantForm.setControl('educations', educationFormArray);
  }

  setWorkExperiences(workExperiences: WorkExperience[]) {
    const workExperienceFGs = workExperiences.map(workExperience => this.formBuilder.group(workExperience));
    const workExperienceFormArray = this.formBuilder.array(workExperienceFGs);
    this.applicantForm.setControl('workExperiences', workExperienceFormArray);
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

  deleteApplicant(applicantId: number) {
    if (confirm("Are you sure you want to delete this applicant?")) {
      this.applicantService.deleteApplicantById(applicantId).subscribe(() => {
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
    this.applicantForm.reset();
  }

  addEducation() {
    this.educations.push(this.formBuilder.group({
      educationId: [0],
      applicantId: [this.applicantIdUpdate],
      degree: [''],
      institution: [''],
      passingYear: [''],
      result: ['']
    }));
  }

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }

  addWorkExperience() {
    this.workExperiences.push(this.formBuilder.group({
      workExperienceId: [0],
      applicantId: [this.applicantIdUpdate],
      company: [''],
      position: [''],
      duration: ['']
    }));
  }

  removeWorkExperience(index: number) {
    this.workExperiences.removeAt(index);
  }
}
