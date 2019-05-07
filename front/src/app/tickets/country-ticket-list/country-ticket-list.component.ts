import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryService} from '../../../services/country/country.service';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-country-ticket-list',
  templateUrl: './country-ticket-list.component.html',
  styleUrls: ['./country-ticket-list.component.scss']
})
export class CountryTicketListComponent implements OnInit {

  @Output() ticketEventList = new EventEmitter<Country>();
  @Output() clickEventList = new EventEmitter<String>();

  public countryTicketList: Country[] = [];

  constructor(public someInformationCountryService: CountryService) {
    this.someInformationCountryService.countries$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  onClick(idPays: string) {
    this.clickEventList.emit(idPays);
  }

  ticketEvent(someInformationCountry: Country) {
    this.ticketEventList.emit(someInformationCountry);
  }
}
