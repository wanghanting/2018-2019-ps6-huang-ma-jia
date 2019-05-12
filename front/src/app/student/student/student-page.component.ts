import {Component, Input, OnInit} from '@angular/core';

import {Student} from '../../../models/student';

import {StudentService} from '../../../services/student/student.service';
import {CompanyService} from '../../../services/company/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})

export class StudentPageComponent implements OnInit {
  public student: Student;
  constructor(public studentService: StudentService, private route: ActivatedRoute) {
    this.studentService.student$.subscribe((stu) => this.student = stu.pop());
    this.route.queryParams.subscribe(params => {
      this.studentService.OneStudentService(params['id']);
    });
  }
  ngOnInit() {}
}
