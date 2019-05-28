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

  public FullStarsArray: any[];
  public EmptyStarsArray: any[];


  constructor() {

  }

  ngOnInit() {
    this. FullStarsArray = Array(this.internship.rating);
    this. EmptyStarsArray = Array(5 - this.internship.rating);


  }
  onclick(id) {
    this.clickEvent.emit(id);
  }
}
