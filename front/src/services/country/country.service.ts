import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private countryList: Country[] = [];

  private countriesUrl = 'http://localhost:9428/api/country/';

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public country$: BehaviorSubject<Country[]> = new BehaviorSubject(this.countryList);

  constructor(
    private http: HttpClient) {
      this.getStudent();
     }

  public getStudent() {
    this.http.get<Country[]>(this.countriesUrl).subscribe(value => {
      this.countryList = value;
      this.country$.next(value);
    });
  }
}
