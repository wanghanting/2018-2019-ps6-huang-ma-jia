import { Component, OnInit } from '@angular/core';
import {Country} from "../../../models/country";
import {PartnerHousing} from "../../../models/partnerHousing";
import {Company} from "../../../models/company";
import {CountryService} from "../../../services/country/country.service";
import {CompanyService} from "../../../services/company/company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-life-info',
  templateUrl: './life-info.component.html',
  styleUrls: ['./life-info.component.css']
})
export class LifeInfoComponent implements OnInit {

  public country: Country[];
  public oneCountry: Country;
  public partnerHousingList: PartnerHousing[];
  public companyList: Company[];
  public visaFullStarsArray: any[];
  public visaEmptyStarsArray: any[];

  constructor(
    public countryService: CountryService,
    // public partnerHousingService: PartnerHousingService,
    public companyService: CompanyService,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.countryService.oneCountryService(params['id']);
      // this.partnerHousingService.setCountryId(params['id']);
      // this.companyService.setCountryId(params['id']);
    });
    this.countryService.countries$.subscribe((country) => {
      this.oneCountry = country.pop();
      if (this.oneCountry != null) {
        this.visaFullStarsArray = Array(this.oneCountry.visaDifficulty);
        this.visaEmptyStarsArray = Array(5 - this.oneCountry.visaDifficulty);
      }
    });
    this.companyService.companies$.subscribe((companies) => {
      this.companyList = companies;
    });

  }

  ngOnInit() {
  }
  onClick(idCompany) {
    window.location.href = 'http://localhost:4200/company/?id=' + idCompany;
  }
}
