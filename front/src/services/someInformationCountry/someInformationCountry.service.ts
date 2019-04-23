import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {SomeInformationCountry} from '../../models/someInformationCountry';

@Injectable({
  providedIn: 'root'
})

export class SomeInformationCountryService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private someInformationCountryList: SomeInformationCountry[] = [];

  private someInformationCountryUrl = 'http://localhost:9428/api/students/';

  /**
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public someInformationCountry$: BehaviorSubject<SomeInformationCountry[]> = new BehaviorSubject(this.someInformationCountryList);

  constructor(
    private http: HttpClient) {
      this.getStudent();
     }

  public getStudent() {
    this.http.get<SomeInformationCountry[]>(this.someInformationCountryUrl).subscribe(value => {
      this.someInformationCountryList = value;
      this.someInformationCountry$.next(value);
    });
  }
}
