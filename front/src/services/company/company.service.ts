import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private  onecompany: Company[] = [];
  private companyList: Company[] = [];
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);
  public company$: BehaviorSubject<Company[]> = new BehaviorSubject(this.onecompany);
  public countryId: number = null;

  private companiesUrl = 'http://localhost:9428/api/companies/';

  constructor(private http: HttpClient) {
    this.http.get<Company[]>(this.companiesUrl).subscribe( companies => {
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
  public OneCompanyService(id) {
    this.http.get<Company[]>(this.companiesUrl + '?id=' + id).subscribe(value => {
      this.onecompany = value;
      this.company$.next(value);
    });

  }

  public formChange(form: FormGroup) {
    this.http.get<Company[]>(this.companiesUrl + '?' + (this.countryId != null ?  'countryId=' + this.countryId : '')
      + (form.getRawValue().country ? ('&countryId=' + form.getRawValue().country) : '')
      + (form.getRawValue().secteur ? ('&activitySector=' + form.getRawValue().secteur) : '')
      + (form.getRawValue().size ? ('&employeesNumber=' + form.getRawValue().size) : '')
      + (form.getRawValue().activitySector  ? ('&activitySector=' + form.getRawValue().activitySector) : '')
      + (form.getRawValue().size1 ? ('&size1=' + form.getRawValue().size1) : '')
      + (form.getRawValue().size2 ? ('&size2=' + form.getRawValue().size2) : '')
      + (form.getRawValue().size3 ? ('&size3=' + form.getRawValue().size3) : '')
    ).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }
  public search(extra) {
    this.http.get<Company[]>(this.companiesUrl + '?' + extra).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }
}
