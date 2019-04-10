import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { OneCountryService } from '../../../services/country/one-country.service';
import { PartnerHousingService } from '../../../services/partnerHousing/partnerHousing.service';
import { CompanyService } from '../../../services/company/company.service';
import { Country } from '../../../models/country';
import { PartnerHousing } from '../../../models/partnerHousing';
import { Company } from '../../../models/company';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

    public country: Country
    public countryPageForm: FormGroup
    public partnerHousingList: PartnerHousing[]
    public companyList: Company[]
    public visaFullStarsArray: any[]
    public visaEmptyStarsArray: any[]
    public filliereArray: any[]
    public specialiteArray: any[]
    public secteurArray: any[]
    public sizeArray: any[]

  constructor(public formBuilder: FormBuilder, public oneCountryService: OneCountryService, public partnerHousingService: PartnerHousingService,public companyService: CompanyService , private route: ActivatedRoute) {//Id par la suite
    this.filliereArray = ['salut', 'coucou', 'bonjour'];
    this.specialiteArray = [];
    this.secteurArray = [];
    this.sizeArray = [];
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
    this.companyService.companies$.subscribe((companies) => {
        this.companyList = companies
    });
    this.route.queryParams.subscribe(params => {
        this.oneCountryService.setCountryId(params['id']);
        this.partnerHousingService.setCountryId(params['id']);
        this.companyService.setCountryId(params['id']);
    });

    this.countryPageForm = this.formBuilder.group({
      filliere: [''],
      specialite: [''],
      secteur: [''],
      size: ['']
    });
  }

  ngOnInit() {
  }

  filliereChange(value){

    switch (value){
      case 'salut':
        this.secteurArray = ['salut', 'salut']
        break;
      case 'coucou':
        this.secteurArray = ['c', 'c']
        break;
      case 'bonjour':
        this.secteurArray = ['b', 'b']
        break;
    }
  }
}
