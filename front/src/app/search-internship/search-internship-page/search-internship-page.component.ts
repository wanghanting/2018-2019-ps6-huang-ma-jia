import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company/company.service';

@Component({
  selector: 'app-searchcompany-page',
  templateUrl: './search-internship-page.component.html',
  styleUrls: ['./search-internship-page.component.scss']
})
export class SearchInternshipPageComponent implements OnInit {
  constructor(public companyService: CompanyService) {
  }
  ngOnInit() {}
  onClick(idCompany) {
    window.location.href = 'http://localhost:4200/company/?id=' + idCompany;
  }
}
