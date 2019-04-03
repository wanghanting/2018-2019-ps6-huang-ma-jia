import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject, Subject} from 'rxjs';
import {COMPANIES_MOCKED} from '../../mocks/companies';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyList: Company[] = COMPANIES_MOCKED;
  private companiesFiltered: Company[] ;
  private searchTerms = new Subject<Company>();
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);

  constructor(private http: HttpClient) {
  }
  Companyfilter() {
    this.loadCompanies(URL);
    return this.companiesFiltered;

  }
  loadCompanies(URL): void {
    this.http.get<Company[]>(URL).subscribe( companies => {
      this.companiesFiltered = companies;
      this.companies$.next(companies);
    });
  }
  filterCompanies(jsoncompany) {
    const URL = 'http://localhost:9428/api/companies/filterresult';
    this.http.post(URL, jsoncompany).subscribe(res => {
      console.log(res);
    });
    console.log(URL);
  }


}
