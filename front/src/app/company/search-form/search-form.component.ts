import {Component, Input, OnInit} from '@angular/core';
import {searchInternship} from '../../../models/searchInternship';
import { InternshipService } from '../../../services/internship/internship.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchForm: FormGroup;
  public nameList = ['A ete reconduit CDD/CDI', 'Voiture de fonction'];


  constructor(public formBuilder: FormBuilder, public  internshipservice: InternshipService) {
    // Form creation
    this.searchForm = this.formBuilder.group({
      contractRenewed: [''],
      hasCompanyCar: [''],
    });
  }



  ngOnInit() {
  }

  internshipFilter() {
    const conditionsInternship: searchInternship = this.searchForm.getRawValue() as searchInternship;
    const obj = {hasCDIouCDD: conditionsInternship.contractRenewed, hasVoiture: conditionsInternship.hasCompanyCar};
    console.log(obj);
    // this.internshipservice.filterInternships(conditionsInternship.contractRenewed, conditionsInternship.hasCompanyCar);
    this.internshipservice.formChange(this.searchForm);
  }
}
