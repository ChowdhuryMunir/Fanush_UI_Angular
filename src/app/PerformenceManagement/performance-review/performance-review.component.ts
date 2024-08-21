import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerformanceReviewService } from './performance-review.service';
import { PerformanceReview } from './performance-review.model';

@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.css']
})
export class PerformanceReviewComponent implements OnInit {
  dataSaved = false;
  performanceReviewForm: any;
  allPerformanceReviews: Observable<PerformanceReview[]> = this.performanceReviewService.getAllPerformanceReviews();
  performanceReviewIdUpdate: number | null = null;
  message: string = "";
  isAdding: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private performanceReviewService: PerformanceReviewService
  ) { }

  ngOnInit() {
    this.performanceReviewForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      reviewerId: ['', [Validators.required]],
      feedback: ['', [Validators.required]],
      performanceRating: ['', [Validators.required]],
      comments: [''],
      reviewDate: [''],
      reviewType: ['', [Validators.required]]
    });
    this.loadAllPerformanceReviews();
  }

  loadAllPerformanceReviews() {
    this.allPerformanceReviews = this.performanceReviewService.getAllPerformanceReviews();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const performanceReview = this.performanceReviewForm.value;
    this.createOrUpdatePerformanceReview(performanceReview);
    this.performanceReviewForm.reset();
    this.isAdding = false;
  }

  loadPerformanceReviewToEdit(performanceReviewId: number) {
    this.performanceReviewService.getPerformanceReviewById(performanceReviewId).subscribe(performanceReview => {
      this.message = "";
      this.dataSaved = false;
      this.performanceReviewIdUpdate = performanceReview.performanceReviewId;
      this.performanceReviewForm.patchValue(performanceReview);
      this.isAdding = true;
    });
  }

  createOrUpdatePerformanceReview(performanceReview: PerformanceReview) {
    if (this.performanceReviewIdUpdate == null) {
      this.performanceReviewService.createPerformanceReview(performanceReview).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Saved Successfully.";
        this.loadAllPerformanceReviews();
        this.performanceReviewIdUpdate = null;
        this.performanceReviewForm.reset();
      });
    } else {
      performanceReview.performanceReviewId = this.performanceReviewIdUpdate;
      this.performanceReviewService.updatePerformanceReview(this.performanceReviewIdUpdate, performanceReview).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Updated Successfully.";
        this.loadAllPerformanceReviews();
        this.performanceReviewIdUpdate = null;
        this.performanceReviewForm.reset();
      });
    }
  }

  deletePerformanceReview(id: number) {
    if (confirm("Are you sure you want to delete this performance review?")) {
      this.performanceReviewService.deletePerformanceReviewById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadAllPerformanceReviews();
        this.performanceReviewIdUpdate = null;
        this.performanceReviewForm.reset();
      });
    }
  }

  resetForm() {
    this.performanceReviewForm.reset();
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
