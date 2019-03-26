import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../services/company/company.service';
import {Company} from '../../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './search-company-list.component.html',
  styleUrls: ['./search-company-list.component.scss']
})
export class SearchCompanyListComponent implements OnInit {

  public companyList: Company[] = [];

  constructor(public companyService: CompanyService) {
    this.companyService.companies$.subscribe((companies) => this.companyList = companies);
  }

  ngOnInit() {
  }
}
