import {Component, Input, OnInit} from '@angular/core';
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
  private nameList = ['A ete reconduit CDD/CDI', 'Voiture de fonction'];


  constructor(public formBuilder: FormBuilder, public  internshipservice: InternshipService) {
    // Form creation
    this.internshipForm = this.formBuilder.group({
      name:[''],
      contractRenewed: [''],
      hasCompanyCar: [''],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }



  ngOnInit() {
  }

  onSearchChange(searchValue : string){
    console.log(searchValue);
  }

  internshipFilter() {
    const conditionsInternship: searchInternship = this.internshipForm.getRawValue() as searchInternship;
    const obj = {name: conditionsInternship.name, hasCDIouCDD: conditionsInternship.contractRenewed, hasVoiture: conditionsInternship.hasCompanyCar};
    console.log(obj);
    this.internshipservice.filterInternships(conditionsInternship.contractRenewed, conditionsInternship.hasCompanyCar);
  }

  onFocus() {
    const itemDiv = document.getElementById('item-div');
    this.listFor(this.nameList);
    itemDiv.style.display = 'table';
  };

  listFor(listNow) {
    const list = document.getElementById('list');
    listNow.forEach(item => {
      const node = document.createElement("li");
      const textnode = document.createTextNode(item);
      node.appendChild(textnode);
      list.appendChild(node)
    });
  }

  onInput() {
    // const searchDom = document.getElementById('search');
    const list = document.getElementById('list');
    const inputValue = (<HTMLInputElement>document.getElementById('search')).value;
    const newList = this.nameList.filter(item => {
      return item.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
    list.innerHTML = '';
    this.listFor(newList);
  }

  onBlur() {
    const itemDiv = document.getElementById('item-div');
    const list = document.getElementById('list');
    itemDiv.style.display = 'none';
    list.innerHTML = '';
  }

}
