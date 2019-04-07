import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../../models/internship";
import {Company} from "../../../models/company";
import {InternshipService} from "../../../services/internship/internship.service";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
  @Input()
  company: Company;

  // public internshipList: Internship[] = [];
  //
  // constructor(public internshipService: InternshipService) {
  //   this.internshipService.internships$.subscribe((internship) => this.internshipList = internship);
  // }

  ngOnInit() {}
}
