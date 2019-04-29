import {Component, Input, OnInit} from '@angular/core';
import {SomeInformationCountry} from '../../../models/someInformationCountry';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  @Input()
  ticket: SomeInformationCountry;

  constructor() {

  }

  ngOnInit() {

  }
}
