import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: User;

  private loginUrl = 'http://localhost:9428/api/login';
  public logeduser$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor(private http: HttpClient) {
  }
  checkUser(user, pass) {
    const info = {'name': user, 'password': pass};
    console.log(info);
    this.http.post(this.loginUrl, info).subscribe(res => {

    }, error => {

    });

  }
}
