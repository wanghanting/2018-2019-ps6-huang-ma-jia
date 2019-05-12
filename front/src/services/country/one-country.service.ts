import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class OneCountryService {
  private country: Country;

  private countriesUrl = 'http://localhost:9428/api/countries/';
  public country$: BehaviorSubject<Country> = new BehaviorSubject(this.country);

  constructor(
    private http: HttpClient) {
     }

  public setCountryId(id: number) {
    this.http.get<Country>(this.countriesUrl + '?id=' + id).subscribe(value => {
      this.country = value;
      this.country$.next(value);
    });
  }
}
