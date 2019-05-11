import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../../models/internship";
import {Company} from "../../../models/company";
import {InternshipService} from "../../../services/internship/internship.service";
import {CompanyService} from "../../../services/company/company.service";
import {Student} from "../../../models/student";

import {StudentService} from "../../../services/student/student.service";

@Component({
  selector: 'app-company-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})

export class StudentPageComponent implements OnInit {
  @Input()
  student: Student;

  constructor(public studentService: StudentService) {
  }
  ngOnInit() {}
}
