import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/login/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  public loginForm: FormGroup;
  constructor(public userService: UserService,public formBuilder: FormBuilder) {
    this.showsign = false;
    this.showlogin = true;
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: [''],
    });


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
  submitLogin(user, pass) {
    this.userService.checkUser(user, pass);

  }
}
