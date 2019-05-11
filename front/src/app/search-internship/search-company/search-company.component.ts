import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Company} from '../../../models/company';
import {CompanyService} from '../../../services/company/company.service';
import {InternshipService} from '../../../services/internship/internship.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss']
})
export class SearchCompanyComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  company: Company;
  @Output()
  clickEventCompany = new EventEmitter<String>();

  // public companyList: Company[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClick(id) {
    this.clickEventCompany.emit(id);
  }

}
