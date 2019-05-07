import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  @Input()
  ticket: Country;
  @Input()
  visaFullStarsArray: any[];
  @Input()
  visaEmptyStarsArray: any[];

  constructor() {

  }

  ngOnInit() {

  }
}
