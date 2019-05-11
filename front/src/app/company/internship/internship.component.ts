import { Component, Input, OnInit } from '@angular/core';
import { Internship} from '../../../models/internship';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input()
  internship: Internship;

  constructor() {
  }

  ngOnInit() {

  }
}
