import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Loge} from '../../models/Loge';

@Injectable({
  providedIn: 'root'
})

export class LogeService {
  private logeList: Loge[];

  private logeUrl = 'http://localhost:9428/api/loge/';
  public loge$: BehaviorSubject<Loge[]> = new BehaviorSubject(this.logeList);

  constructor(
    private http: HttpClient) {
    this.http.get<Loge[]>(this.logeUrl).subscribe(value => {
      this.logeList = value;
      this.loge$.next(value);
    });
  }
}
