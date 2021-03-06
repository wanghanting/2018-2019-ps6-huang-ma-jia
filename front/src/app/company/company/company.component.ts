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
  public visaFullStarsArray: any[];
  public visaEmptyStarsArray: any[];
  private company: Company;

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Output()
  clickEventCompany = new EventEmitter<String>();

  constructor(public companyService: CompanyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.companyService.OneCompanyService(params['id']);
    });
     this.companyService.company$.subscribe((company) => {
       this.company = company.pop();
       if (this.company != null) {
         this.visaFullStarsArray = Array(this.company.rating);
         this.visaEmptyStarsArray = Array(5 - this.company.rating);
       }
     });
  }

  ngOnInit() {
  }

  onClick(id) {
    // this.internshipService.setCompanyId(id);
    this.clickEventCompany.emit(id);
  }

}
