import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Review} from '../../models/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  private reviewList: Review[];

  private periodUrl = 'http://localhost:9428/api/review/';
  public reviews$: BehaviorSubject<Review[]> = new BehaviorSubject(this.reviewList);

  constructor(
    private http: HttpClient) {
    this.http.get<Review[]>(this.periodUrl).subscribe(value => {
      this.reviewList = value;
      this.reviews$.next(value);
    });
  }
}
