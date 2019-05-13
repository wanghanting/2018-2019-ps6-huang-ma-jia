import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchinternship-page',
  templateUrl: './search-internship-page.component.html',
  styleUrls: ['./search-internship-page.component.scss']
})
export class SearchInternshipPageComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {}
  onClick(id) {
    window.location.href = 'http://localhost:4200/student/?id=' + id;
  }
}
