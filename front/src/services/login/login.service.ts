import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: User;

  private loginUrl = 'http://localhost:9428/api/login/';
  public logeduser$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor(private http: HttpClient) {
  }
  checkUser(user, pass) {
    const info = {'name': user, 'password': pass};
    this.http.get(this.loginUrl + '?name=' + user + '&password=' + pass).subscribe(res => {
      if (!res) {
        this.http.get(this.loginUrl + '?enroll=' + user + '&password=' + pass).subscribe(res2 => {
          if (res2) {
            this.user = res2;
            this.logeduser$.next(res2);
          } else {
            console.log('wrong');
          }
        });
      } else {
        this.user = res;
        this.logeduser$.next(res);
      }

    }, error => {

    });

  }
}
