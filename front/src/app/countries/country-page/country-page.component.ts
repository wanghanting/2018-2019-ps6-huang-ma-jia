import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OneCountryService } from '../../../services/country/one-country.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

    public country: Country

  constructor(public oneCountryService: OneCountryService, private route: ActivatedRoute) {//Id par la suite
    this.oneCountryService.country$.subscribe((country) => this.country = country);
    this.route.queryParams.subscribe(params => {
        this.oneCountryService.getStudent(params['id']);
    });
  }

  ngOnInit() {
    console.log(this.country.name);
  }
}
