import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public receiver: Student;

  constructor(public studentService: StudentService, private route: ActivatedRoute) {
    this.studentService.student$.subscribe((stu) => this.receiver = stu.pop());
    this.route.queryParams.subscribe(params => {
      this.studentService.OneStudentService(params['id']);
    });
  }

  ngOnInit() {

  }
}
