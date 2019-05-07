import { Component, OnInit } from '@angular/core';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public countrySelected: Country = null;
  public visaFullStarsArray: any[];
  public visaEmptyStarsArray: any[];

  constructor() {

  }

  ngOnInit() {

  }

  onClick(idPays: string) {
    window.location.href = 'http://localhost:4200/country/?id=' + idPays;
  }

  ticketEvent(country: Country) {
    this.countrySelected = country;
    this.visaFullStarsArray = Array(country.visaDifficulty);
    this.visaEmptyStarsArray = Array(5 - country.visaDifficulty);
  }

}

