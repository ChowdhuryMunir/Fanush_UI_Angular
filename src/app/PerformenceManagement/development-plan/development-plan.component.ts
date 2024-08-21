import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DevelopmentPlanService } from './development-plan.service';
import { DevelopmentPlan } from './development-plan.model';

@Component({
  selector: 'app-development-plan',
  templateUrl: './development-plan.component.html',
  styleUrls: ['./development-plan.component.css']
})
export class DevelopmentPlanComponent implements OnInit {
  dataSaved = false;
  developmentPlanForm: any;
  allDevelopmentPlans: Observable<DevelopmentPlan[]> =this.developmentPlanService.getAllDevelopmentPlans();
  developmentPlanIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private developmentPlanService: DevelopmentPlanService
  ) { }

  ngOnInit() {
    this.developmentPlanForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      description: [''],
      targetCompletionDate: ['', [Validators.required]],
      developmentPlanStatus: ['', [Validators.required]],
      progress: ['', [Validators.required]],
      isActive: [false],
      feedback: [''],
      resources: [''],
      completionDate: ['']
    });
    this.loadAllDevelopmentPlans();
  }

  loadAllDevelopmentPlans() {
    this.allDevelopmentPlans = this.developmentPlanService.getAllDevelopmentPlans();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const developmentPlan = this.developmentPlanForm.value;
    this.createOrUpdateDevelopmentPlan(developmentPlan);
    this.developmentPlanForm.reset();
    this.isAdding = false;
  }

  loadDevelopmentPlanToEdit(developmentPlanId: number) {
    this.developmentPlanService.getDevelopmentPlanById(developmentPlanId).subscribe(developmentPlan => {
      this.message = "";
      this.dataSaved = false;
      this.developmentPlanIdUpdate = developmentPlan.developmentPlanId;
      this.developmentPlanForm.patchValue(developmentPlan);
      this.isAdding = true;
    });
  }

  createOrUpdateDevelopmentPlan(developmentPlan: DevelopmentPlan) {
    if (this.developmentPlanIdUpdate == null) {
      this.developmentPlanService.createDevelopmentPlan(developmentPlan).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllDevelopmentPlans();
        this.developmentPlanIdUpdate = null;
        this.developmentPlanForm.reset();
      });
    } else {
      developmentPlan.developmentPlanId = this.developmentPlanIdUpdate;
      this.developmentPlanService.updateDevelopmentPlan(this.developmentPlanIdUpdate, developmentPlan).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllDevelopmentPlans();
        this.developmentPlanIdUpdate = null;
        this.developmentPlanForm.reset();
      });
    }
  }

  deleteDevelopmentPlan(id: number) {
    if (confirm("Are you sure you want to delete this development plan?")) {
      this.developmentPlanService.deleteDevelopmentPlanById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllDevelopmentPlans();
      });
    }
  }

  resetForm() {
    this.developmentPlanForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
    this.developmentPlanForm.reset();
    this.developmentPlanIdUpdate = null;
  }

  cancelAdding() {
    this.isAdding = false;
    this.resetForm();
  }
}
