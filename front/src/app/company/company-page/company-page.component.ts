import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company/company.service';
import {ActivatedRoute} from '@angular/router';
import {InternshipService} from '../../../services/internship/internship.service';
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})

export class CompanyPageComponent implements OnInit {

  constructor(public internshipService: InternshipService , private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.internshipService.setCompanyId(params['id']);
      }
    });
  }
  ngOnInit() {}
  onClick(id) {
    window.location.href = 'http://localhost:4200/student/?id=' + id;
  }
}
