import {Component, Input, OnInit} from '@angular/core';

import {Student} from '../../../models/student';

import {StudentService} from '../../../services/student/student.service';
import {ActivatedRoute} from '@angular/router';
import {InternshipService} from '../../../services/internship/internship.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})

export class StudentPageComponent implements OnInit {
  public student: Student;
  constructor(public studentService: StudentService, public stageService: InternshipService, private route: ActivatedRoute) {
    this.studentService.student$.subscribe((stu) => this.student = stu.pop());
    this.route.queryParams.subscribe(params => {
      this.studentService.OneStudentService(params['id']);
      const str = 'studentId=' + params['id'];
      this.stageService.filterIntern(str);
    });
  }
  ngOnInit() {}
  onClick(id) {
    window.location.href = 'http://localhost:4200/emailTo/?id=' + id;
  }
}
