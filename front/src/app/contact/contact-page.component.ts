import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/login/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(public userService: UserService,public formBuilder: FormBuilder) {
  }
  ngOnInit() {}
}
