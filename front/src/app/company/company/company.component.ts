import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Company} from '../../../models/company';
import {CompanyService} from '../../../services/company/company.service';
import {InternshipService} from '../../../services/internship/internship.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-card',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  company: Company;
  @Output()
  clickEventCompany = new EventEmitter<String>();

  constructor(public companyService: CompanyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.companyService.OneCompanyService(params['id']);
    });
     this.companyService.company$.subscribe((company) => this.company = company.pop());
  }

  ngOnInit() {
  }

  onClick(id) {
    // this.internshipService.setCompanyId(id);
    this.clickEventCompany.emit(id);
  }

}
