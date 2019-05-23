import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Internship} from '../../../models/internship';
import {InternshipService} from '../../../services/internship/internship.service';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../services/student/student.service';
import {CompanyService} from '../../../services/company/company.service';
import {Student} from '../../../models/student';
import {Company} from '../../../models/company';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {

  public internshipList: Internship[] = [];
  public studentList: Student[] = [];
  public companyList: Company[] = [];
  @Output() clickEventList = new EventEmitter<number>();

  constructor(public internshipService: InternshipService, public studentService: StudentService, public companyService: CompanyService) {
    this.internshipService.internships$.subscribe((intern) => this.internshipList = intern);
    this.studentService.student$.subscribe((student) => this.studentList = student);
    this.companyService.companies$.subscribe((companies) => {this.companyList = companies; });
  }
  ngOnInit() {}
  onClick(id) {
    this.clickEventList.emit(id);
  }

}
