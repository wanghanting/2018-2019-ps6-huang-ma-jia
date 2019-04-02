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
    public visaFullStarsArray: any[]
    public visaEmptyStarsArray: any[]
    public partnerHousingArray: any[]

  constructor(public oneCountryService: OneCountryService, private route: ActivatedRoute) {//Id par la suite
    this.oneCountryService.country$.subscribe((country) => {
        this.country = country
        if (country != null){
            this.visaFullStarsArray = Array(country.visaDifficulty)
            this.visaEmptyStarsArray = Array(5 - country.visaDifficulty)
        }
    });
    this.route.queryParams.subscribe(params => {
        this.oneCountryService.getStudent(params['id']);
    });
    this.partnerHousingArray = ["Residence okoPoko : https://www.okopoko.org/fr/informations/logements/bangkok/","Residence asiaExchange : https://www.asiaexchange.org/fr/informations/logements/bangkok/"];
  }

  ngOnInit() {
  }
}
