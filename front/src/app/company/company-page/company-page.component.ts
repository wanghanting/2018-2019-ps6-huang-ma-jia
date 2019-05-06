import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../../models/internship";
import {Company} from "../../../models/company";
import {InternshipService} from "../../../services/internship/internship.service";
import {CompanyService} from "../../../services/company/company.service";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})

export class CompanyPageComponent implements OnInit {
  @Input()
  company: Company;

  constructor(public internshipService: InternshipService) {
  }
  ngOnInit() {}
}
