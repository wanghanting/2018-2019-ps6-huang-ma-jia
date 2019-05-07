import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryService} from '../../../services/country/country.service';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-map-world',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  @Output() ticketEvent = new EventEmitter<Country>();
  @Output() clickEvent = new EventEmitter<String>();

  public countryTicketList: Country[] = [];

  constructor(public someInformationCountryService: CountryService) {
    this.someInformationCountryService.countries$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  mouseEnter(id: string) {
    for (let i = 0; i < this.countryTicketList.length; i++) {
      if (this.countryTicketList[i].id === id) {
        console.log(this.countryTicketList[i].id, );
        this.ticketEvent.emit(this.countryTicketList[i]);
      }
    }
  }

  mouseLeave(id: string) {
    for (let i = 0; i < this.countryTicketList.length; i++) {
      if (this.countryTicketList[i].id === id) {
        this.ticketEvent.emit(null);
      }
    }
  }

  mouseClick(id: string) {
    for (let i = 0; i < this.countryTicketList.length; i++) {
      if (this.countryTicketList[i].id === id) {
        this.clickEvent.emit(id);
      }
    }
  }
}
