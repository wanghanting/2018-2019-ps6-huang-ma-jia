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

  public searchForm: FormGroup;
  private nameList = ['A ete reconduit CDD/CDI', 'Voiture de fonction'];


  constructor(public formBuilder: FormBuilder, public  internshipservice: InternshipService) {
    // Form creation
    this.searchForm = this.formBuilder.group({
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
    // const conditionsInternship: searchInternship = this.internshipForm.getRawValue() as searchInternship;
    // const obj = {name: conditionsInternship.name, hasCDIouCDD: conditionsInternship.contractRenewed, hasVoiture: conditionsInternship.hasCompanyCar};
    // console.log(obj);
    // this.internshipservice.filterInternships(conditionsInternship.contractRenewed, conditionsInternship.hasCompanyCar);
    this.internshipservice.formChange(this.searchForm)
  }

  // listFor(listNow) {
  //   const list = document.getElementById('sel');
  //   listNow.forEach(item => {
  //     const node = document.createElement("li");
  //     const textnode = document.createTextNode(item);
  //     node.appendChild(textnode);
  //     list.appendChild(node)
  //   });
  // }

  onInput() {
    // const searchDom = document.getElementById('search');
    const list = document.getElementById('sel');
    const inputValue = (<HTMLInputElement>document.getElementById('search-input')).value;
    const newList = this.nameList.filter(item => {
      return item.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
    list.innerHTML = '';
    // this.listFor(newList);
  }

  onBlur() {
    const selList = document.getElementById('sel');
    // const list = document.getElementById('list');
    selList.style.display = 'none';
    // list.innerHTML = '';
  }

  onFocus(){
    const selList = document.getElementById('sel');
    selList.style.display = 'block';
  }

  onClick(){
    const contract = document.getElementById('contract')
    const voiture = document.getElementById('car')
    const input = (<HTMLSelectElement>document.getElementById('txt'))
    const selList = (<HTMLSelectElement>document.getElementById('sel'))
    const search = (<HTMLInputElement>document.getElementById('search-input'))
    selList.style.display = "none"
    input.value = selList.options[selList.selectedIndex].text;
    const conditionsInternship: searchInternship = this.searchForm.getRawValue() as searchInternship;
    conditionsInternship.name = selList.options[selList.selectedIndex].text;
    // if(input.value === 'A ete reconduit CDD/CDI'){
    //   contract.spellcheck
    // }
  }

}
