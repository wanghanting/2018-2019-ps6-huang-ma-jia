import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public showsign: boolean ;
  public showlogin: boolean ;
  public userLogin: string;
  public passLogin: string;
  constructor() {
    this.showsign = false;
    this.showlogin = true;

  }
  ngOnInit() {}
  onClickSign() {
    this.showsign = true;
    this.showlogin = false;
  }
  onClickLogin () {
    this.showsign = false;
    this.showlogin = true;
  }
  submitLogin(user, pass){

  }
}
