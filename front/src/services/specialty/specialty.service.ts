import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Specialty} from '../../models/specialty';

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private specialtyList: Specialty[];



  private specialtiesUrl = 'http://localhost:9428/api/specialties/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public specialties$: BehaviorSubject<Specialty[]> = new BehaviorSubject(this.specialtyList);

  constructor(
    private http: HttpClient) {  
    }

    public setSectorName(name: string) {
        this.http.get<Specialty[]>(this.specialtiesUrl + "?sector=" + name).subscribe(value => {
            this.specialtyList = value;
            this.specialties$.next(value);
        });
    }
}
