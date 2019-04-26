import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Searchcompany} from '../../../models/searchcompany';
import {CompanyService} from '../../../services/company/company.service';

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
  public FILIERE_LIST: string[] = ['SI4', 'SI5', 'MAM4', 'MAM5', 'ELEC4', 'ELEC5'];
  public CONTINENT_LIST: string[] = ['Amérique du Nord',  'Asie', 'Europe', 'Amérique du Sud', 'Océanie', 'Afrique'];
  public SPECIALITE_LIST: string[] = ['IHM', 'SECURITE'];
  public TAILE_LIST: string[] = ['1-50', '51-300', '301+'];
  public SECTEUR_LIST: string[] = ['produit', 'marketing', 'exploitation et maintenance' ];
  constructor(public formBuilder: FormBuilder, public  companyservice: CompanyService) {
    // Form creation
    this.searchForm = this.formBuilder.group({
      filiere: ['all'],
      specialite: ['all'],
      continent: ['all'],
      secteur: ['all'],
      taile: ['all'],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }
  companyFilter() {
    const conditionsCompany: Searchcompany = this.searchForm.getRawValue() as Searchcompany;
    this.companyservice.filterCompanies(conditionsCompany.filiere, conditionsCompany.specialite, conditionsCompany.continent,
      conditionsCompany.secteur, conditionsCompany.taile);
  }
}
