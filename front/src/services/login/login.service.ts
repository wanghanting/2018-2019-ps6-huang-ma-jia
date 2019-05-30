import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class LogeService {
  private user: User;

  private loginUrl = 'http://localhost:9428/api/loge/';
  public logeduser$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor(private http: HttpClient) {
    this.http.get<User>(this.loginUrl).subscribe(value => {
      this.user = value;
      this.logeduser$.next(value);
    });
  }
}
