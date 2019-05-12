import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Period} from '../../models/period';

@Injectable({
  providedIn: 'root'
})

export class PeriodService {
  private periodList: Period[];

  private periodUrl = 'http://localhost:9428/api/periods/';
  public periods$: BehaviorSubject<Period[]> = new BehaviorSubject(this.periodList);

  constructor(
    private http: HttpClient) {
    this.http.get<Period[]>(this.periodUrl).subscribe(value => {
      this.periodList = value;
      this.periods$.next(value);
    });
  }
}
