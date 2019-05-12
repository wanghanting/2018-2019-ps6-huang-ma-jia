import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Company} from '../../../models/company';

@Component({
  selector: 'app-company-search',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss']
})
export class SearchCompanyComponent implements OnInit {
  @Input()
  company: Company;
  @Output()
  clickEventCompany = new EventEmitter<String>();
  constructor() {
  }

  ngOnInit() {
  }

  onClick(id) {
    this.clickEventCompany.emit(id);
  }

}
