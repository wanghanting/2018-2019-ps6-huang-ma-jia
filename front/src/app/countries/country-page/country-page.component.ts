import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country/country.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryPageComponent implements OnInit {

  constructor(public country: Country) {
  }

  ngOnInit() {
  }
}
