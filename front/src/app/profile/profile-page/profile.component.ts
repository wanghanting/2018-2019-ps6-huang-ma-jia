import {Component, OnInit} from '@angular/core';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public student: Student;
  constructor(public studentService: StudentService) {
    this.studentService.student$.subscribe((stu) => this.student = stu.pop());
  }
  ngOnInit() {}
  onClick(idCompany) {
    window.location.href = 'http://localhost:4200/company/?id=' + idCompany;
  }
}
