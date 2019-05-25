import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/review/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  public reviewList: Review[];

  constructor(public reviewService: ReviewService) {
    this.reviewService.reviews$.subscribe((review) => this.reviewList = review);
  }

  ngOnInit() {
  }
}
