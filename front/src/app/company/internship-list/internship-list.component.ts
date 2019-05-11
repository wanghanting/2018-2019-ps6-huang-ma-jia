import { Component, OnInit } from '@angular/core';
import {Internship} from '../../../models/internship';
import {InternshipService} from '../../../services/internship/internship.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {

  public internshipList: Internship[] = [];
  public id: number;

  constructor(public internshipService: InternshipService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.internshipService.setCompanyId(params['id']);
    });
    this.internshipService.internships$.subscribe((intern) => this.internshipList = intern);
  }

  ngOnInit() {}

}
