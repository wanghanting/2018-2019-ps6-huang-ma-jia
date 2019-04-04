import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OneCountryService } from '../../../services/country/one-country.service';
import { PartnerHousingService } from '../../../services/partnerHousing/partnerHousing.service';
import { Country } from '../../../models/country';
import { PartnerHousing } from '../../../models/partnerHousing';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

    public country: Country
    public partnerHousingList: PartnerHousing[];
    public visaFullStarsArray: any[]
    public visaEmptyStarsArray: any[]

  constructor(public oneCountryService: OneCountryService, public partnerHousingService: PartnerHousingService, private route: ActivatedRoute) {//Id par la suite
    this.oneCountryService.country$.subscribe((country) => {
        this.country = country
        if (country != null){
            this.visaFullStarsArray = Array(country.visaDifficulty)
            this.visaEmptyStarsArray = Array(5 - country.visaDifficulty)
        }
    });
    this.partnerHousingService.partnersHousings$.subscribe((partnerHousings) => {
        this.partnerHousingList = partnerHousings
    });
    this.route.queryParams.subscribe(params => {
        this.oneCountryService.setCountryId(params['id']);
        this.partnerHousingService.setCountryId(params['id']);
    });
  }

  ngOnInit() {
  }
}
