import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyList: Company[] = [];
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);
  public countryId: number = null;

  private companiesUrl = 'http://localhost:9428/api/companies/';

  constructor(private http: HttpClient) {
    this.loadCompanies(this.companiesUrl);
  }
  loadCompanies(URL): void {
    this.http.get<Company[]>(URL).subscribe( companies => {
      this.companyList = companies;
      this.companies$.next(companies);
    });
  }
  public setCountryId(id: number) {
    this.countryId = id;
    this.http.get<Company[]>(this.companiesUrl + '?countryId=' + id).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }

  public formChange(form: FormGroup) {
    this.http.get<Company[]>(this.companiesUrl + '?countryId=' + this.countryId
      + (form.getRawValue().sector ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty ? ('&specialty=' + form.getRawValue().specialty) : '')
      + (form.getRawValue().continent ? ('&continent=' + form.getRawValue().continent) : '')
      + (form.getRawValue().secteur ? ('&secteur=' + form.getRawValue().secteur) : '')
      + (form.getRawValue().size ? ('&size=' + form.getRawValue().size) : '')
    ).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }
}
