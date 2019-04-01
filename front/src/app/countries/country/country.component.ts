import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-ticket',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  country: Country;

  @Output()
  countryHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.countryHasBeenSelected.emit(true);
  }
}
