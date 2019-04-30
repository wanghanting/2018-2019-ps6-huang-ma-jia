import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SomeInformationCountryService } from '../../../services/someInformationCountry/someInformationCountry.service';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-country-ticket-list',
  templateUrl: './country-ticket-list.component.html',
  styleUrls: ['./country-ticket-list.component.scss']
})
export class CountryTicketListComponent implements OnInit {

  @Output() ticketEventList = new EventEmitter<SomeInformationCountry>();

  public countryTicketList: SomeInformationCountry[] = [];

  constructor(public someInformationCountryService: SomeInformationCountryService) {
    this.someInformationCountryService.someInformationCountry$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  clickPays(idPays: string) {
    console.log(idPays);
  }

  ticketEvent(someInformationCountry: SomeInformationCountry) {
    this.ticketEventList.emit(someInformationCountry);
  }
}
