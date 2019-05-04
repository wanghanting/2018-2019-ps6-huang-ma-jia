import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Searchcompany} from '../../../models/searchcompany';
import {CompanyService} from '../../../services/company/company.service';
import {SectorService} from '../../../services/sector/sector.service';
import {SpecialtyService} from '../../../services/specialty/specialty.service';

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
  public CONTINENT_LIST: string[] = ['Amérique du Nord',  'Asie', 'Europe', 'Amérique du Sud', 'Océanie', 'Afrique'];
  public TAILLE_LIST: string[] = ['1-50', '51-300', '301+'];
  public SECTEUR_LIST: string[] = ['produit', 'marketing', 'exploitation et maintenance' ];
  public sectorArray: any[];
  public specialtyArray: any[];
  constructor(public formBuilder: FormBuilder, public  companyservice: CompanyService, public sectorService: SectorService,
  public specialtyService: SpecialtyService) {
    this.sectorService.sectors$.subscribe((sectors) => {
      this.sectorArray = sectors;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.specialtyArray = specialties;
    });
    this.searchForm = this.formBuilder.group({
      sector: ['all'],
      specialty: ['all'],
      continent: ['all'],
      secteur: ['all'],
      size: ['all'],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }
  companyFilter() {
    // const conditionsCompany: Searchcompany = this.searchForm.getRawValue() as Searchcompany;
    this.companyservice.formChange(this.searchForm);
  }
  sectorChange(value) {
    this.specialtyService.setSectorName(value);
  }
  formChange() {
    this.companyservice.formChange(this.searchForm);
  }
}
