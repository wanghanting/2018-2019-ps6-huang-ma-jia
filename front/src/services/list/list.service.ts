import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {List} from '../../models/list';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private list: List;

  private listUrl = 'http://localhost:9428/api/manage-list/';
  public interviewlist$: BehaviorSubject<List> = new BehaviorSubject(this.list);

  constructor(private http: HttpClient) {

  }
  getList(id) {
    this.http.get<List>(this.listUrl + '?id=' + id).subscribe(value => {
      this.list = value;
      this.interviewlist$.next(value);
    });
  }
}
