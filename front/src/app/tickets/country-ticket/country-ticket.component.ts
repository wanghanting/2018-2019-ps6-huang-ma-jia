import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-country-ticket',
  templateUrl: './country-ticket.component.html',
  styleUrls: ['./country-ticket.component.scss']
})
export class CountryTicketComponent implements OnInit {

  @Output() ticketEventTicket = new EventEmitter<Country>();
  @Output() clickEventTicket = new EventEmitter<String>();

  @Input()
  ticket: Country;

  constructor() {

  }

  ngOnInit() {
  }

  onClick(idPays: String) {
    this.clickEventTicket.emit(idPays);
  }

  mouseEnter() {
    console.log('Ticket ' + this.ticket.flagPath);
    this.ticketEventTicket.emit(this.ticket);
  }

  mouseLeave() {
    this.ticketEventTicket.emit(null);
  }
}
