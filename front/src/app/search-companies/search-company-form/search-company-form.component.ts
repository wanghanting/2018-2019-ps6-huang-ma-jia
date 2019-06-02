import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Searchcompany} from '../../../models/searchcompany';
import {CompanyService} from '../../../services/company/company.service';
import {SectorService} from '../../../services/sector/sector.service';
import {SpecialtyService} from '../../../services/specialty/specialty.service';
import {ActivitySectorService} from '../../../services/activitySector/activitySector.service';
import {ActivitySector} from '../../../models/activitySector';
import {CompanySize} from '../../../models/companySize';
import {CompanySizeService} from '../../../services/companySize/companySize.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './search-company-form.component.html',
  styleUrls: ['./search-company-form.component.scss']
})
export class SearchCompanyFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public searchForm: FormGroup;
  public searchCom: string;
  public TAILLE_LIST: CompanySize[] = [];
  public SECTEUR_LIST: ActivitySector[] = [];
  constructor(public formBuilder: FormBuilder, public  companyservice: CompanyService, public activitySectorService: ActivitySectorService,
  public companySize: CompanySizeService, public specialtyService: SpecialtyService) {
    this.activitySectorService.activitySectors$.subscribe((sectors) => {
      this.SECTEUR_LIST = sectors;
    });
    this.companySize.companySizes$.subscribe((sizes) => {
      this.TAILLE_LIST = sizes;
    });
    this.searchForm = this.formBuilder.group({
      secteur: [''],
      size: [''],
    });
    this.companyFilter();
  }

  ngOnInit() {
  }
  companyFilter() {
    this.companyservice.formChange(this.searchForm);
  }
  onClick(key) {
    this.companyservice.search('&name=' + key);
  }
  sectorChange(value) {
    this.specialtyService.setSectorName(value);
  }
  formChange() {
    this.companyservice.formChange(this.searchForm);
  }
}
