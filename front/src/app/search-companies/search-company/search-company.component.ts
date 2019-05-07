import { Component, Input, OnInit } from '@angular/core';
import { Company} from '../../../models/company';
import {CompanyService} from '../../../services/company/company.service';

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

  public companyList: Company[] = [];

  constructor(public companyService: CompanyService) {
    this.companyService.companies$.subscribe((company) => this.companyList = company);
  }

  ngOnInit() {
  }


}
