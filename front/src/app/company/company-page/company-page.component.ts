import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})

export class CompanyPageComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {}
  onClick(id) {
    window.location.href = 'http://localhost:4200/student/?id=' + id;
  }
}
