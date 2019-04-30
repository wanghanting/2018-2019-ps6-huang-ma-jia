import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SomeInformationCountryService } from '../../../services/someInformationCountry/someInformationCountry.service';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-map-world',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  @Output() ticketEvent = new EventEmitter<SomeInformationCountry>();

  public countryTicketList: SomeInformationCountry[] = [];

  constructor(public someInformationCountryService: SomeInformationCountryService) {
    this.someInformationCountryService.someInformationCountry$.subscribe((countries) => this.countryTicketList = countries);
  }

  ngOnInit() {

  }

  mouseEnter(id: string) {
    for (let i = 0; i < this.countryTicketList.length; i++) {
      if (this.countryTicketList[i].id === id) {
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
}
