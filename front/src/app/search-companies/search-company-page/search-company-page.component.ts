import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company/company.service';

@Component({
  selector: 'app-searchcompany-page',
  templateUrl: './search-company-page.component.html',
  styleUrls: ['./search-company-page.component.scss']
})
export class SearchCompanyPageComponent implements OnInit {
  constructor(public companyService: CompanyService) {
  }
  ngOnInit() {}
  onClick(idCompany) {
    window.location.href = 'http://localhost:4200/company/?id=' + idCompany;
  }
}
