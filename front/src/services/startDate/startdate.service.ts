import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {StartDate} from '../../models/startDate';

@Injectable({
  providedIn: 'root'
})

export class StartdateService {
  private startDateList: StartDate[];

  private startUrl = 'http://localhost:9428/api/startdates/';

  public startdates$: BehaviorSubject<StartDate[]> = new BehaviorSubject(this.startDateList);

  constructor(
    private http: HttpClient) {
    this.http.get<StartDate[]>(this.startUrl ).subscribe(value => {
      this.startDateList = value;
      this.startdates$.next(value);
    });
  }
}
