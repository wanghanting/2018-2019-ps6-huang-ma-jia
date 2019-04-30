import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-country-ticket',
  templateUrl: './country-ticket.component.html',
  styleUrls: ['./country-ticket.component.scss']
})
export class CountryTicketComponent implements OnInit {

  @Output() ticketEventTicket = new EventEmitter<SomeInformationCountry>();
  @Output() clickEventTicket = new EventEmitter<String>();

  @Input()
  ticket: SomeInformationCountry;

  constructor() {

  }

  ngOnInit() {
  }

  onClick(idPays: String) {
    this.clickEventTicket.emit(idPays);
  }

  mouseEnter() {
    this.ticketEventTicket.emit(this.ticket);
  }

  mouseLeave() {
    this.ticketEventTicket.emit(null);
  }
}
