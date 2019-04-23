import { Component, OnInit } from '@angular/core';
import {searchInternship} from "../../../models/searchInternship";
import { InternshipService } from "../../../services/internship/internship.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public internshipForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public  internshipservice: InternshipService) {
    // Form creation
    this.internshipForm = this.formBuilder.group({
      name:[''],
      hasCDIouCDD: [''],
      hasVoiture: [''],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  internshipFilter() {
    const conditionsInternship: searchInternship = this.internshipForm.getRawValue() as searchInternship;
    const obj = {'name': conditionsInternship.name, 'hasCDIouCDD': conditionsInternship.hasCDIouCDD, 'hasVoiture': conditionsInternship.hasVoiture};
    const jsonintern = JSON.stringify(obj);
    console.log(jsonintern);
    this.internshipservice.filterInternships(jsonintern);
  }

}
