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
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);

  constructor() {
  }


}
