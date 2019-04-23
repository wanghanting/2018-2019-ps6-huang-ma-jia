import { Component, OnInit } from '@angular/core';
import { SomeInformationCountryService } from '../../../services/someInformationCountry/someInformationCountry.service';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: SomeInformationCountry[] = [];

  constructor(public ticketService: SomeInformationCountryService) {
    this.ticketService.someInformationCountry$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {

  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  clickPays(idPays: string) {
    console.log(idPays);
  }
}
