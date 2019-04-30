import { Component, OnInit } from '@angular/core';
import {SomeInformationCountry} from '../../../models/someInformationCountry';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public countrySelected: SomeInformationCountry = null;
  public visaFullStarsArray: any[];
  public visaEmptyStarsArray: any[];

  constructor() {

  }

  ngOnInit() {

  }

  onClick(idPays: string) {
    window.location.href = 'http://localhost:4200/country/?id=' + idPays;
  }

  ticketEvent(someInformationCountry: SomeInformationCountry) {
    this.countrySelected = someInformationCountry;
    this.visaFullStarsArray = Array(someInformationCountry.visaStar);
    this.visaEmptyStarsArray = Array(5 - someInformationCountry.visaStar);
  }

}

