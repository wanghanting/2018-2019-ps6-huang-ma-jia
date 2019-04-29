import { Component, OnInit } from '@angular/core';
import { SomeInformationCountryService } from '../../../services/someInformationCountry/someInformationCountry.service';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './country-ticket-list.component.html',
  styleUrls: ['./country-ticket-list.component.scss']
})
export class CountryTicketListComponent implements OnInit {

  public countryTicketList: SomeInformationCountry[] = [];

  constructor(public someInformationCountryService: SomeInformationCountryService) {
    this.someInformationCountryService.someInformationCountry$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  clickPays(idPays: string) {
    console.log(idPays);
  }
}
