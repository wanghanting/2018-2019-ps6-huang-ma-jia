import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../../models/internship";
import {InternshipService} from "../../../services/internship/internship.service";
import {Company} from "../../../models/company";
import {CompanyService} from "../../../services/company/company.service";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  @Input()
  company: Company;

  public companyList: Company[] = [];

  constructor(public companyService: CompanyService) {
    this.companyService.companies$.subscribe((company) => this.companyList = company);
  }

  ngOnInit() {
  }

}
