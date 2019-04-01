import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country/country.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countryList: Country[] = [];

  constructor(public countryService: CountryService) {
    this.countryService.countries$.subscribe((countries) => this.countryList = countries);
  }

  ngOnInit() {
  }

  countryHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }
}
