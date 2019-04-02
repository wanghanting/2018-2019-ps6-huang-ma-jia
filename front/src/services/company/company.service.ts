import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject, Subject} from 'rxjs';
import {COMPANIES_MOCKED} from '../../mocks/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyList: Company[] = COMPANIES_MOCKED;
  private searchTerms = new Subject<Company>();
  private Url = 'http://localhost:9428/api/companies';
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);

  constructor() {
  }


}
