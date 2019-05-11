import { Component, Input, OnInit } from '@angular/core';
import { Internship} from '../../../models/internship';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  internship: Internship;

  constructor() {
  }

  ngOnInit() {

  }
}
