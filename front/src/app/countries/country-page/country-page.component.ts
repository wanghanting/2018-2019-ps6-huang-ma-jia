import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

/*
  Services
*/
import { OneCountryService } from '../../../services/country/one-country.service';
import { PartnerHousingService } from '../../../services/partnerHousing/partnerHousing.service';
import { CompanyService } from '../../../services/company/company.service';
import { SectorService } from '../../../services/sector/sector.service';
import { SpecialtyService } from '../../../services/specialty/specialty.service';

/*
  Models
*/
import { Country } from '../../../models/country';
import { PartnerHousing } from '../../../models/partnerHousing';
import { Company } from '../../../models/company';
import { Sector } from '../../../models/sector';
import { Specialty } from '../../../models/specialty';

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
    public sectorArray: any[]
    public specialtyArray: any[]
    public secteurArray: any[]
    public sizeArray: any[]

  constructor(public formBuilder: FormBuilder,
    public oneCountryService: OneCountryService,
    public partnerHousingService: PartnerHousingService,
    public companyService: CompanyService,
    public sectorService: SectorService,
    public specialtyService: SpecialtyService,
    private route: ActivatedRoute) {
    this.sectorArray = [];
    this.specialtyArray = [];
    this.secteurArray = [];
    this.sizeArray = [];

    this.oneCountryService.country$.subscribe((country) => {
        this.country = country;
        if (country != null) {
            this.visaFullStarsArray = Array(country.visaDifficulty);
            this.visaEmptyStarsArray = Array(5 - country.visaDifficulty);
        }
    });
    this.partnerHousingService.partnersHousings$.subscribe((partnerHousings) => {
        this.partnerHousingList = partnerHousings;
    });
    this.companyService.companies$.subscribe((companies) => {
        this.companyList = companies;
    });
    this.route.queryParams.subscribe(params => {
        this.oneCountryService.setCountryId(params['id']);
        this.partnerHousingService.setCountryId(params['id']);
        this.companyService.setCountryId(params['id']);
    });
    this.sectorService.sectors$.subscribe((sectors) => {
      this.sectorArray = sectors;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.specialtyArray = specialties;
    });

    this.countryPageForm = this.formBuilder.group({
      sector: [''],
      specialty: [''],
      secteur: [''],
      size: ['']
    });
  }

  ngOnInit() {
  }

  sectorChange(value){
    this.specialtyService.setSectorName(value);
    //this.countryPageForm.getRawValue().sprecialty = 'ee';
    this.formChange();
  }

  formChange(){
    this.companyService.formChange(this.countryPageForm);
  }
}
