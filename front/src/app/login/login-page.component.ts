import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/login/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

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
  public note: string;
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  public user: User;
  constructor(public userService: UserService, public formBuilder: FormBuilder) {
    this.showsign = false;
    this.showlogin = true;
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: [''],
    });
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      repeatpass: [''],
      type: [''],
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
    this.userService.logeduser$.subscribe((loginUser) => this.user = loginUser);
    if (this.user) {
      window.location.href = 'http://localhost:4200/homePage';
    }
  }
  submitSign() {
    if (this.signupForm.getRawValue().password && this.signupForm.getRawValue().repeatpass &&
      this.signupForm.getRawValue().name && this.signupForm.getRawValue().type && this.signupForm.getRawValue().email) {
      if (this.signupForm.getRawValue().password === this.signupForm.getRawValue().repeatpass) {
        this.userService.signup(this.signupForm.getRawValue().name, this.signupForm.getRawValue().email,
          this.signupForm.getRawValue().password, this.signupForm.getRawValue().type);
          window.location.href = 'http://localhost:4200/homePage';
      }
    } else {
      this.note = 'no empty';
    }
  }
}
