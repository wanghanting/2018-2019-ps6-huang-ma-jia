import { Component, OnInit } from '@angular/core';
import { OneCountryService } from '../../../services/country/one-country.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

    public country: Country

  constructor(public id: number) {//Id par la suite
    
  }

  ngOnInit() {
  }
}
