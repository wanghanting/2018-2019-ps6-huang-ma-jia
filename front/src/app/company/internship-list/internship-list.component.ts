import { Component, OnInit } from '@angular/core';

import {Internship} from "../../../models/internship";
import {InternshipService} from "../../../services/internship/internship.service";

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss']
})
export class InternshipListComponent implements OnInit {

  public internshipList: Internship[] = [];

  constructor(public internshipService: InternshipService) {
    this.internshipService.internships$.subscribe((internship) => this.internshipList = internship);
  }

  ngOnInit() {
  }
}
