import {Component, Input, OnInit} from '@angular/core';

import {Student} from '../../../models/student';

import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})

export class StudentPageComponent implements OnInit {
  public student: Student;
  constructor(public studentService: StudentService) {
    this.studentService.student$.subscribe((stu) => this.student = stu.pop());
  }
  ngOnInit() {}
}
