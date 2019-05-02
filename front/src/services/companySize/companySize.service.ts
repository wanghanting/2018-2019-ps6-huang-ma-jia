import { Injectable } from '@angular/core';
import {CompanySize} from '../../models/companySize';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CompanySizeService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private companySizeList: CompanySize[];

  private companySizesUrl = 'http://localhost:9428/api/companySizes/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public companySizes$: BehaviorSubject<CompanySize[]> = new BehaviorSubject(this.companySizeList);

  constructor(
    private http: HttpClient) {
        this.http.get<CompanySize[]>(this.companySizesUrl).subscribe(value => {
            this.companySizeList = value;
            this.companySizes$.next(value);
        });
    }
}
