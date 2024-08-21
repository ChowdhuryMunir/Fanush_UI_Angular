import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GoalService } from './goal.service';
import { Goal } from './goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  dataSaved = false;
  goalForm: any;
  allGoals: Observable<Goal[]> = this.goalService.getAllGoals();
  goalIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService
  ) { }

  ngOnInit() {
    this.goalForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      employeeId: ['', [Validators.required]],
      goalStatus: ['', [Validators.required]],
      progress: ['', [Validators.required]],
      isActive: [false],
      lastUpdatedDate: [''],
      updatedBy: [''],
      completionDate: [''],
      assignedByUserId: [''],
      comments: ['']
    });
    this.loadAllGoals();
  }

  loadAllGoals() {
    this.allGoals = this.goalService.getAllGoals();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const goal = this.goalForm.value;
    this.createOrUpdateGoal(goal);
    this.goalForm.reset();
    this.isAdding = false;
  }

  loadGoalToEdit(goalId: number) {
    this.goalService.getGoalById(goalId).subscribe(goal => {
      this.message = "";
      this.dataSaved = false;
      this.goalIdUpdate = goal.goalId;
      this.goalForm.patchValue(goal);
      this.isAdding = true;
    });
  }

  createOrUpdateGoal(goal: Goal) {
    if (this.goalIdUpdate == null) {
      this.goalService.createGoal(goal).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllGoals();
        this.goalIdUpdate = null;
        this.goalForm.reset();
      });
    } else {
      goal.goalId = this.goalIdUpdate;
      this.goalService.updateGoal(this.goalIdUpdate, goal).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllGoals();
        this.goalIdUpdate = null;
        this.goalForm.reset();
      });
    }
  }

  deleteGoal(goalId: number) {
    if (confirm("Are you sure you want to delete this goal?")) {
      this.goalService.deleteGoalById(goalId).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllGoals();
        this.goalIdUpdate = null;
        this.goalForm.reset();
      });
    }
  }

  resetForm() {
    this.goalForm.reset();
    this.message = "";
    this.dataSaved = false;
    this.goalIdUpdate = null;
    this.isAdding = false;
  }

  startAdding() {
    this.isAdding = true;
    this.goalForm.reset();
  }

  cancelAdding() {
    this.isAdding = false;
    this.resetForm();
  }
}
