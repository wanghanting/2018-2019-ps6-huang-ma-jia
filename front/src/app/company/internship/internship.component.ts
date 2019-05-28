import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Internship} from '../../../models/internship';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  @Input()
  internship: Internship;
  @Output()
  clickEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }
  onclick(id) {
    this.clickEvent.emit(id);
  }
}
