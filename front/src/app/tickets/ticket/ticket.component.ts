import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input()
  ticket: SomeInformationCountry;
  showInformation: boolean;
  public visaFullStarsArray: any[]
  public visaEmptyStarsArray: any[]

  constructor() {
    this.showInformation = false;

  }

  ngOnInit() {
  }

  mouseEnter(){
    this.visaFullStarsArray = Array(this.ticket.visaStar);
    this.visaEmptyStarsArray = Array(5 - this.ticket.visaStar);
    this.showInformation = true;
  }

  mouseLeave(){
    this.showInformation = false;
  }
}
