import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import { COUNTRIES_MOCKED } from '../../mocks/countries.mock';
import {Country} from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class OneCountryService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private country: Country;

  private countriesUrl = 'http://localhost:9428/api/countries/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public country$: BehaviorSubject<Country> = new BehaviorSubject(this.country);

  constructor(
    private http: HttpClient) {
     }

  public getStudent(id : number) {
    this.http.get<Country>(this.countriesUrl+id).subscribe(value => {
      this.country = value;
      this.country$.next(value);
    });
  }
}
